---
slug:  k8s-coredns
title: Kubernetes中的DNS
authors: science09
tags: [k8s, CoreDNS]
---

本篇，是 CoreDNS 的前篇之一，后续会着重介绍 CoreDNS，但是步步深入讲 CoreDNS，讲一下 Kubernetes，以及kubedns 有一定的必要，所以，就有了 CoreDNS 系列，本篇主要尽可能详尽的说明 Kubernetes 的DNS解析原理，以及 Kubernetes 集群中 DNS 解析目前存在的弊端和优化方式。

在 Kubernetes 中，服务发现有几种方式：
  - 基于环境变量的方式
  - 基于内部域名的方式

基本上，使用环境变量的方式很少，主要还是使用内部域名这种服务发现的方式。

其中，基于内部域名的方式，涉及到 Kubernetes 内部域名的解析，而 kubedns，是 Kubernetes 官方的 DNS 解析组件。从 1.11 版本开始，kubeadm 已经使用第三方的 CoreDNS 替换官方的 kubedns 作为 Kubernetes 集群的内部域名解析组件，我们的重点，是 CoreDNS，但是在开始 CoreDNS 之前，需要先了解下 kubedns，后续，会对这2个 DNS 组件做对比，分析它们的优劣势。

### Kubernetes 中的域名是如何解析的

在 Kubernetes 中，比如服务 a 访问服务 b，对于同一个 Namespace下，可以直接在 pod 中，通过 curl b 来访问。对于跨 Namespace 的情况，服务名后边对应 Namespace即可。比如 curl b.default。那么，使用者这里边会有几个问题：

- ①：服务名是什么？
- ②：为什么同一个 Namespace 下，直接访问服务名即可？不同 Namespace 下，需要带上 Namespace 才行？
- ③：为什么内部的域名可以做解析，原理是什么？


DNS 如何解析，依赖容器内 resolv 文件的配置

```
cat /etc/resolv.conf

nameserver 10.233.0.3
search default.svc.cluster.local svc.cluster.local cluster.local
```

这个文件中，配置的 DNS Server，一般就是 K8S 中，kubedns 的 Service 的 ClusterIP，这个IP是虚拟IP，无法ping，但可以访问。

```
[root@node4 user1]# kubectl get svc -n kube-system
NAME                   TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)         AGE
kube-dns               ClusterIP   10.233.0.3      <none>        53/UDP,53/TCP   270d
kubernetes-dashboard   ClusterIP   10.233.22.223   <none>        443/TCP         124d
```

所以，所有域名的解析，其实都要经过 kubedns 的虚拟IP 10.233.0.3 进行解析，不论是 Kubernetes 内部域名还是外部的域名。

Kubernetes 中，域名的全称，必须是 service-name.namespace.svc.cluster.local 这种模式，服务名，就是Kubernetes中 Service 的名称，所以，当我们执行下面的命令时：

```
curl b
```

必须得有一个 Service 名称为 b，这是前提。
在容器内，会根据 /etc/resolve.conf 进行解析流程。选择 nameserver 10.233.0.3 进行解析，然后，用字符串 “b”，依次带入 /etc/resolve.conf 中的 search 域，进行DNS查找，分别是：

```
// search 内容类似如下（不同的pod，第一个域会有所不同）
search default.svc.cluster.local svc.cluster.local cluster.local
```

b.default.svc.cluster.local -> b.svc.cluster.local -> b.cluster.local ，直到找到为止。
所以，我们执行 `curl b`，或者执行 `curl b.default`，都可以完成DNS请求，这2个不同的操作，会分别进行不同的DNS查找步骤：

```
// curl b，可以一次性找到（b +default.svc.cluster.local）
b.default.svc.cluster.local

// curl b.default，第一次找不到（ b.default + default.svc.cluster.local）
b.default.default.svc.cluster.local
// 第二次查找（ b.default + svc.cluster.local），可以找到
b.default.svc.cluster.local
```

## So Questions

### curl b，要比 curl b.default 效率高？

答案是肯定的，因为 curl b.default，多经过了一次 DNS 查询。
当执行 curl b.default，也就使用了带有命名空间的内部域名时，容器的第一个 DNS 请求是

```
// b.default + default.svc.cluster.local
b.default.default.svc.cluster.local
```
当请求不到 DNS 结果时，使用

```
// b.default + svc.cluster.local
b.default.svc.cluster.local
```
进行请求，此时才可以得到正确的DNS解析。

### 访问外部域名走 search 域吗

这个答案，不能说肯定也不能说否定，看情况，可以说，大部分情况要走 search 域。

我们以请求 youku.com 为例，通过抓包的方式，看一看在某个容器中访问 youku.com，进行的DNS查找的过程，都产生了什么样的数据包。注意：我们要抓DNS容器的包，就得先进入到DNS容器的网络中（而不是发起DNS请求的那个容器）。

由于DNS容器往往不具备bash，所以无法通过 docker exec 的方式进入容器内抓包，我们采用其他的方式：

```
// 1、找到容器ID，并打印它的NS ID
docker inspect --format "{{.State.Pid}}"  16938de418ac
// 2、进入此容器的网络Namespace
nsenter -n -t  54438
// 3、抓DNS包
tcpdump -i eth0 udp dst port 53|grep youku.com
```

在其他的容器中，进行 youku.com 域名查找

```
nslookup  youku.com 172.22.121.65
```
:::info 
 注意：nslookup命令的最后指定DNS服务容器的IP，是因为，如果不指定，且DNS服务的容器存在多个的话，那么DNS请求，可能会均分到所有DNS服务的容器上，我们如果只抓某单个DNS服务容器抓到的包，可能就不全了，指定IP后，DNS的请求，就必然只会打到单个的DNS容器。抓包的数据才完整。
:::

可以看到类似如下结果：
```
17:01:28.732260 IP 172.20.92.100.36326 > nodexxxx.domain: 4394+ A? youku.com.default.svc.cluster.local. (50)
17:01:28.733158 IP 172.20.92.100.49846 > nodexxxx.domain: 60286+ A? youku.com.svc.cluster.local. (45)
17:01:28.733888 IP 172.20.92.100.51933 > nodexxxx.domain: 63077+ A? youku.com.cluster.local. (41)
17:01:28.734588 IP 172.20.92.100.33401 > nodexxxx.domain: 27896+ A? youku.com. (27)
17:01:28.734758 IP nodexxxx.34138 > 192.168.x.x.domain: 27896+ A? youku.com. (27)
我们可以看到，在真正解析 youku.com 之前，经历了 youku.com.default.svc.cluster.local. -> youku.com.svc.cluster.local. -> youku.com.cluster.local. -> youku.com.
```

这也就意味着有3次DNS请求，是浪费的无意义的请求。

## 为何会出现DNS请求浪费的情况

这是因为，在 Kubernetes 中，其实 /etc/resolv.conf 这个文件，并不止包含 nameserver 和 search 域，还包含了非常重要的一项：ndots。我们之前没有提及这个项，也是希望再次能引起读者重视。
```
[root@xxxx-67f54c6dff-h4zxq /]# cat /etc/resolv.conf 
nameserver 10.233.0.3
search cicd.svc.cluster.local svc.cluster.local cluster.local
options ndots:5
```

ndots:5，表示：如果查询的域名包含的点“.”，不到5个，那么进行DNS查找，将使用非完全限定名称（或者叫绝对域名），如果你查询的域名包含点数大于等于5，那么DNS查询，默认会使用绝对域名进行查询。举例来说：

如果我们请求的域名是，a.b.c.d.e，这个域名中有4个点，那么容器中进行DNS请求时，会使用非绝对域名进行查找，使用非绝对域名，会按照 /etc/resolv.conf 中的 search 域，走一遍追加匹配：

>  
a.b.c.d.e.cicd.svc.cluster.local. ->
a.b.c.d.e.svc.cluster.local. ->
a.b.c.d.e.cluster.local.


直到找到为止。如果走完了search域还找不到，则使用 a.b.c.d.e. ，作为绝对域名进行DNS查找。

我们通过抓包分析一个具体案例：

域名中点数少于5个的情况：

// 对域名 a.b.c.d.ccccc 进行DNS解析请求 
```
[root@xxxxx-67f54c6dff-h4zxq /]# nslookup  a.b.c.d.ccccc 172.22.121.65 
Server:         172.22.121.65
Address:        172.22.121.65#53

** server can't find a.b.c.d.ccccc: NXDOMAIN

// 抓包数据如下：
18:08:11.013497 IP 172.20.92.100.33387 > node011094.domain: 28844+ A? a.b.c.d.ccccc.cicd.svc.cluster.local. (54)
18:08:11.014337 IP 172.20.92.100.33952 > node011094.domain: 57782+ A? a.b.c.d.ccccc.svc.cluster.local. (49)
18:08:11.015079 IP 172.20.92.100.45984 > node011094.domain: 55144+ A? a.b.c.d.ccccc.cluster.local. (45)
18:08:11.015747 IP 172.20.92.100.54589 > node011094.domain: 22860+ A? a.b.c.d.ccccc. (31)
18:08:11.015970 IP node011094.36383 > 192.168.x.x.domain: 22860+ A? a.b.c.d.ccccc. (31)

// 结论：
// 点数少于5个，先走search域，最后将其视为绝对域名进行查询
```

域名中点数>=5个的情况：

```
// 对域名 a.b.c.d.e.ccccc 进行DNS解析请求
[root@xxxxx-67f54c6dff-h4zxq /]# nslookup  a.b.c.d.e.ccccc 172.22.121.65 
Server:         172.22.121.65
Address:        172.22.121.65#53

** server can't find a.b.c.d.e.ccccc: NXDOMAIN

// 抓包数据如下：
18:10:14.514595 IP 172.20.92.100.34423 > node011094.domain: 61170+ A? a.b.c.d.e.ccccc. (33)
18:10:14.514856 IP node011094.58522 > 192.168.x.x.domain: 61170+ A? a.b.c.d.e.ccccc. (33)
18:10:14.515880 IP 172.20.92.100.49328 > node011094.domain: 267+ A? a.b.c.d.e.ccccc.cicd.svc.cluster.local. (56)
18:10:14.516678 IP 172.20.92.100.35651 > node011094.domain: 54181+ A? a.b.c.d.e.ccccc.svc.cluster.local. (51)
18:10:14.517356 IP 172.20.92.100.33259 > node011094.domain: 53022+ A? a.b.c.d.e.ccccc.cluster.local. (47)

// 结论：
// 点数>=5个，直接视为绝对域名进行查找，只有当查询不到的时候，才继续走 search 域。
```

## 如何优化 DNS 请求浪费的情况

### 优化方式1：使用全限定域名
其实最直接，最有效的优化方式，就是使用 “fully qualified name”，简单来说，使用“完全限定域名”（也叫绝对域名），你访问的域名，必须要以 “.” 为后缀，这样就会避免走 search 域进行匹配，我们抓包再试一次：

```
// 注意：youku.com 后边有一个点 .
nslookup  youku.com. 172.22.121.65
```

在DNS服务容器上抓到的包如下：

```
16:57:07.628112 IP 172.20.92.100.36772 > nodexxxx.domain: 46851+ [1au] A? youku.com. (38)
16:57:07.628339 IP nodexxxx.47350 > 192.168.x.x.domain: 46851+ [1au] A? youku.com. (38)
```

并没有多余的DNS请求。

### 优化方式2：具体应用配置特定的 ndots

其实，往往我们还真不太好用这种绝对域名的方式，有谁请求youku.com的时候，还写成 youku.com. 呢？

在 Kubernetes 中，默认设置了 ndots 值为5，是因为，Kubernetes 认为，内部域名，最长为5，要保证内部域名的请求，优先走集群内部的DNS，而不是将内部域名的DNS解析请求，有打到外网的机会，Kubernetes 设置 ndots 为5是一个比较合理的行为。

如果你需要定制这个长度，最好是为自己的业务，单独配置 ndots 即可（Pod为例，其实配置deployment最好）。

```
apiVersion: v1
kind: Pod
metadata:
  namespace: default
  name: dns-example
spec:
  containers:
    - name: test
      image: nginx
  dnsConfig:
    options:
      - name: ndots
        value: "1"
```

### Kubernetes DNS 策略

在Kubernetes 中，有4种 DNS 策略，从 Kubernetes 源码中看：

```
const (
	// DNSClusterFirstWithHostNet indicates that the pod should use cluster DNS
	// first, if it is available, then fall back on the default
	// (as determined by kubelet) DNS settings.
	DNSClusterFirstWithHostNet DNSPolicy = "ClusterFirstWithHostNet"

	// DNSClusterFirst indicates that the pod should use cluster DNS
	// first unless hostNetwork is true, if it is available, then
	// fall back on the default (as determined by kubelet) DNS settings.
	DNSClusterFirst DNSPolicy = "ClusterFirst"

	// DNSDefault indicates that the pod should use the default (as
	// determined by kubelet) DNS settings.
	DNSDefault DNSPolicy = "Default"

	// DNSNone indicates that the pod should use empty DNS settings. DNS
	// parameters such as nameservers and search paths should be defined via
	// DNSConfig.
	DNSNone DNSPolicy = "None"
)
```
这几种DNS策略，需要在Pod，或者Deployment、RC等资源中，设置 dnsPolicy 即可，以 Pod 为例：

```
apiVersion: v1
kind: Pod
metadata:
   labels:
    name: cadvisor-nodexxxx
    hostip: 192.168.x.x
  name: cadvisor-nodexxxx
  namespace: monitoring
spec:
  containers:
  - args:
    - --profiling
    - --housekeeping_interval=10s
    - --storage_duration=1m0s
    image: google/cadvisor:latest
    name: cadvisor-nodexxxx
    ports:
    - containerPort: 8080
      name: http
      protocol: TCP
    resources: {}
    securityContext:
      privileged: true
    terminationMessagePath: /dev/termination-log
    terminationMessagePolicy: File
  dnsPolicy: ClusterFirst
  nodeName: nodexxxx
```

具体来说：

None
> 
  表示空的DNS设置
  这种方式一般用于想要自定义 DNS 配置的场景，而且，往往需要和 dnsConfig 配合一起使用达到自定义 DNS 的目的。

Default
> 
有人说 Default 的方式，是使用宿主机的方式，这种说法并不准确。
这种方式，其实是，让 kubelet 来决定使用何种 DNS 策略。而 kubelet 默认的方式，就是使用宿主机的 /etc/resolv.conf（可能这就是有人说使用宿主机的DNS策略的方式吧），但是，kubelet 是可以灵活来配置使用什么文件来进行DNS策略的，我们完全可以使用 kubelet 的参数：–resolv-conf=/etc/resolv.conf 来决定你的DNS解析文件地址。

ClusterFirst
> 
这种方式，表示 POD 内的 DNS 使用集群中配置的 DNS 服务，简单来说，就是使用 Kubernetes 中 kubedns 或 coredns 服务进行域名解析。如果解析不成功，才会使用宿主机的 DNS 配置进行解析。

ClusterFirstWithHostNet
> 
在某些场景下，我们的 POD 是用 HOST 模式启动的（HOST模式，是共享宿主机网络的），一旦用 HOST 模式，表示这个 POD 中的所有容器，都要使用宿主机的 /etc/resolv.conf 配置进行DNS查询，但如果你想使用了 HOST 模式，还继续使用 Kubernetes 的DNS服务，那就将 dnsPolicy 设置为 ClusterFirstWithHostNet。

