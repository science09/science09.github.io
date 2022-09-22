"use strict";(self.webpackChunkmeoo_space=self.webpackChunkmeoo_space||[]).push([[537],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var l=n(7294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,l,c=function(e,t){if(null==e)return{};var n,l,c={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var u=l.createContext({}),s=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return l.createElement(u.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},p=l.forwardRef((function(e,t){var n=e.components,c=e.mdxType,r=e.originalType,u=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=s(n),k=c,b=p["".concat(u,".").concat(k)]||p[k]||i[k]||r;return n?l.createElement(b,o(o({ref:t},d),{},{components:n})):l.createElement(b,o({ref:t},d))}));function k(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var r=n.length,o=new Array(r);o[0]=p;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:c,o[1]=a;for(var s=2;s<r;s++)o[s]=n[s];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8473:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>i,frontMatter:()=>r,metadata:()=>a,toc:()=>s});var l=n(7462),c=(n(7294),n(3905));const r={slug:"k8s-coredns",title:"Kubernetes\u4e2d\u7684DNS",authors:"science09",tags:["k8s","CoreDNS"]},o=void 0,a={permalink:"/blog/k8s-coredns",editUrl:"https://github.com/science09/science09.github.io/tree/main/blog/k8s coreDNS.md",source:"@site/blog/k8s coreDNS.md",title:"Kubernetes\u4e2d\u7684DNS",description:"\u672c\u7bc7\uff0c\u662f CoreDNS \u7684\u524d\u7bc7\u4e4b\u4e00\uff0c\u540e\u7eed\u4f1a\u7740\u91cd\u4ecb\u7ecd CoreDNS\uff0c\u4f46\u662f\u6b65\u6b65\u6df1\u5165\u8bb2 CoreDNS\uff0c\u8bb2\u4e00\u4e0b Kubernetes\uff0c\u4ee5\u53cakubedns \u6709\u4e00\u5b9a\u7684\u5fc5\u8981\uff0c\u6240\u4ee5\uff0c\u5c31\u6709\u4e86 CoreDNS \u7cfb\u5217\uff0c\u672c\u7bc7\u4e3b\u8981\u5c3d\u53ef\u80fd\u8be6\u5c3d\u7684\u8bf4\u660e Kubernetes \u7684DNS\u89e3\u6790\u539f\u7406\uff0c\u4ee5\u53ca Kubernetes \u96c6\u7fa4\u4e2d DNS \u89e3\u6790\u76ee\u524d\u5b58\u5728\u7684\u5f0a\u7aef\u548c\u4f18\u5316\u65b9\u5f0f\u3002",date:"2022-09-22T15:56:21.000Z",formattedDate:"2022\u5e749\u670822\u65e5",tags:[{label:"k8s",permalink:"/blog/tags/k-8-s"},{label:"CoreDNS",permalink:"/blog/tags/core-dns"}],readingTime:13.645,hasTruncateMarker:!1,authors:[{name:"science09",title:"Unknown Life",url:"https://github.com/science09",imageURL:"https://github.com/science09.png",key:"science09"}],frontMatter:{slug:"k8s-coredns",title:"Kubernetes\u4e2d\u7684DNS",authors:"science09",tags:["k8s","CoreDNS"]}},u={authorsImageUrls:[void 0]},s=[{value:"Kubernetes \u4e2d\u7684\u57df\u540d\u662f\u5982\u4f55\u89e3\u6790\u7684",id:"kubernetes-\u4e2d\u7684\u57df\u540d\u662f\u5982\u4f55\u89e3\u6790\u7684",level:3},{value:"So Questions",id:"so-questions",level:2},{value:"curl b\uff0c\u8981\u6bd4 curl b.default \u6548\u7387\u9ad8\uff1f",id:"curl-b\u8981\u6bd4-curl-bdefault-\u6548\u7387\u9ad8",level:3},{value:"\u8bbf\u95ee\u5916\u90e8\u57df\u540d\u8d70 search \u57df\u5417",id:"\u8bbf\u95ee\u5916\u90e8\u57df\u540d\u8d70-search-\u57df\u5417",level:3},{value:"\u4e3a\u4f55\u4f1a\u51fa\u73b0DNS\u8bf7\u6c42\u6d6a\u8d39\u7684\u60c5\u51b5",id:"\u4e3a\u4f55\u4f1a\u51fa\u73b0dns\u8bf7\u6c42\u6d6a\u8d39\u7684\u60c5\u51b5",level:2},{value:"\u5982\u4f55\u4f18\u5316 DNS \u8bf7\u6c42\u6d6a\u8d39\u7684\u60c5\u51b5",id:"\u5982\u4f55\u4f18\u5316-dns-\u8bf7\u6c42\u6d6a\u8d39\u7684\u60c5\u51b5",level:2},{value:"\u4f18\u5316\u65b9\u5f0f1\uff1a\u4f7f\u7528\u5168\u9650\u5b9a\u57df\u540d",id:"\u4f18\u5316\u65b9\u5f0f1\u4f7f\u7528\u5168\u9650\u5b9a\u57df\u540d",level:3},{value:"\u4f18\u5316\u65b9\u5f0f2\uff1a\u5177\u4f53\u5e94\u7528\u914d\u7f6e\u7279\u5b9a\u7684 ndots",id:"\u4f18\u5316\u65b9\u5f0f2\u5177\u4f53\u5e94\u7528\u914d\u7f6e\u7279\u5b9a\u7684-ndots",level:3},{value:"Kubernetes DNS \u7b56\u7565",id:"kubernetes-dns-\u7b56\u7565",level:3}],d={toc:s};function i(e){let{components:t,...n}=e;return(0,c.kt)("wrapper",(0,l.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"\u672c\u7bc7\uff0c\u662f CoreDNS \u7684\u524d\u7bc7\u4e4b\u4e00\uff0c\u540e\u7eed\u4f1a\u7740\u91cd\u4ecb\u7ecd CoreDNS\uff0c\u4f46\u662f\u6b65\u6b65\u6df1\u5165\u8bb2 CoreDNS\uff0c\u8bb2\u4e00\u4e0b Kubernetes\uff0c\u4ee5\u53cakubedns \u6709\u4e00\u5b9a\u7684\u5fc5\u8981\uff0c\u6240\u4ee5\uff0c\u5c31\u6709\u4e86 CoreDNS \u7cfb\u5217\uff0c\u672c\u7bc7\u4e3b\u8981\u5c3d\u53ef\u80fd\u8be6\u5c3d\u7684\u8bf4\u660e Kubernetes \u7684DNS\u89e3\u6790\u539f\u7406\uff0c\u4ee5\u53ca Kubernetes \u96c6\u7fa4\u4e2d DNS \u89e3\u6790\u76ee\u524d\u5b58\u5728\u7684\u5f0a\u7aef\u548c\u4f18\u5316\u65b9\u5f0f\u3002"),(0,c.kt)("p",null,"\u5728 Kubernetes \u4e2d\uff0c\u670d\u52a1\u53d1\u73b0\u6709\u51e0\u79cd\u65b9\u5f0f\uff1a"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u73af\u5883\u53d8\u91cf\u7684\u65b9\u5f0f"),(0,c.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u5185\u90e8\u57df\u540d\u7684\u65b9\u5f0f")),(0,c.kt)("p",null,"\u57fa\u672c\u4e0a\uff0c\u4f7f\u7528\u73af\u5883\u53d8\u91cf\u7684\u65b9\u5f0f\u5f88\u5c11\uff0c\u4e3b\u8981\u8fd8\u662f\u4f7f\u7528\u5185\u90e8\u57df\u540d\u8fd9\u79cd\u670d\u52a1\u53d1\u73b0\u7684\u65b9\u5f0f\u3002"),(0,c.kt)("p",null,"\u5176\u4e2d\uff0c\u57fa\u4e8e\u5185\u90e8\u57df\u540d\u7684\u65b9\u5f0f\uff0c\u6d89\u53ca\u5230 Kubernetes \u5185\u90e8\u57df\u540d\u7684\u89e3\u6790\uff0c\u800c kubedns\uff0c\u662f Kubernetes \u5b98\u65b9\u7684 DNS \u89e3\u6790\u7ec4\u4ef6\u3002\u4ece 1.11 \u7248\u672c\u5f00\u59cb\uff0ckubeadm \u5df2\u7ecf\u4f7f\u7528\u7b2c\u4e09\u65b9\u7684 CoreDNS \u66ff\u6362\u5b98\u65b9\u7684 kubedns \u4f5c\u4e3a Kubernetes \u96c6\u7fa4\u7684\u5185\u90e8\u57df\u540d\u89e3\u6790\u7ec4\u4ef6\uff0c\u6211\u4eec\u7684\u91cd\u70b9\uff0c\u662f CoreDNS\uff0c\u4f46\u662f\u5728\u5f00\u59cb CoreDNS \u4e4b\u524d\uff0c\u9700\u8981\u5148\u4e86\u89e3\u4e0b kubedns\uff0c\u540e\u7eed\uff0c\u4f1a\u5bf9\u8fd92\u4e2a DNS \u7ec4\u4ef6\u505a\u5bf9\u6bd4\uff0c\u5206\u6790\u5b83\u4eec\u7684\u4f18\u52a3\u52bf\u3002"),(0,c.kt)("h3",{id:"kubernetes-\u4e2d\u7684\u57df\u540d\u662f\u5982\u4f55\u89e3\u6790\u7684"},"Kubernetes \u4e2d\u7684\u57df\u540d\u662f\u5982\u4f55\u89e3\u6790\u7684"),(0,c.kt)("p",null,"\u5728 Kubernetes \u4e2d\uff0c\u6bd4\u5982\u670d\u52a1 a \u8bbf\u95ee\u670d\u52a1 b\uff0c\u5bf9\u4e8e\u540c\u4e00\u4e2a Namespace\u4e0b\uff0c\u53ef\u4ee5\u76f4\u63a5\u5728 pod \u4e2d\uff0c\u901a\u8fc7 curl b \u6765\u8bbf\u95ee\u3002\u5bf9\u4e8e\u8de8 Namespace \u7684\u60c5\u51b5\uff0c\u670d\u52a1\u540d\u540e\u8fb9\u5bf9\u5e94 Namespace\u5373\u53ef\u3002\u6bd4\u5982 curl b.default\u3002\u90a3\u4e48\uff0c\u4f7f\u7528\u8005\u8fd9\u91cc\u8fb9\u4f1a\u6709\u51e0\u4e2a\u95ee\u9898\uff1a"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\u2460\uff1a\u670d\u52a1\u540d\u662f\u4ec0\u4e48\uff1f"),(0,c.kt)("li",{parentName:"ul"},"\u2461\uff1a\u4e3a\u4ec0\u4e48\u540c\u4e00\u4e2a Namespace \u4e0b\uff0c\u76f4\u63a5\u8bbf\u95ee\u670d\u52a1\u540d\u5373\u53ef\uff1f\u4e0d\u540c Namespace \u4e0b\uff0c\u9700\u8981\u5e26\u4e0a Namespace \u624d\u884c\uff1f"),(0,c.kt)("li",{parentName:"ul"},"\u2462\uff1a\u4e3a\u4ec0\u4e48\u5185\u90e8\u7684\u57df\u540d\u53ef\u4ee5\u505a\u89e3\u6790\uff0c\u539f\u7406\u662f\u4ec0\u4e48\uff1f")),(0,c.kt)("p",null,"DNS \u5982\u4f55\u89e3\u6790\uff0c\u4f9d\u8d56\u5bb9\u5668\u5185 resolv \u6587\u4ef6\u7684\u914d\u7f6e"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"cat /etc/resolv.conf\n\nnameserver 10.233.0.3\nsearch default.svc.cluster.local svc.cluster.local cluster.local\n")),(0,c.kt)("p",null,"\u8fd9\u4e2a\u6587\u4ef6\u4e2d\uff0c\u914d\u7f6e\u7684 DNS Server\uff0c\u4e00\u822c\u5c31\u662f K8S \u4e2d\uff0ckubedns \u7684 Service \u7684 ClusterIP\uff0c\u8fd9\u4e2aIP\u662f\u865a\u62dfIP\uff0c\u65e0\u6cd5ping\uff0c\u4f46\u53ef\u4ee5\u8bbf\u95ee\u3002"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"[root@node4 user1]# kubectl get svc -n kube-system\nNAME                   TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)         AGE\nkube-dns               ClusterIP   10.233.0.3      <none>        53/UDP,53/TCP   270d\nkubernetes-dashboard   ClusterIP   10.233.22.223   <none>        443/TCP         124d\n")),(0,c.kt)("p",null,"\u6240\u4ee5\uff0c\u6240\u6709\u57df\u540d\u7684\u89e3\u6790\uff0c\u5176\u5b9e\u90fd\u8981\u7ecf\u8fc7 kubedns \u7684\u865a\u62dfIP 10.233.0.3 \u8fdb\u884c\u89e3\u6790\uff0c\u4e0d\u8bba\u662f Kubernetes \u5185\u90e8\u57df\u540d\u8fd8\u662f\u5916\u90e8\u7684\u57df\u540d\u3002"),(0,c.kt)("p",null,"Kubernetes \u4e2d\uff0c\u57df\u540d\u7684\u5168\u79f0\uff0c\u5fc5\u987b\u662f service-name.namespace.svc.cluster.local \u8fd9\u79cd\u6a21\u5f0f\uff0c\u670d\u52a1\u540d\uff0c\u5c31\u662fKubernetes\u4e2d Service \u7684\u540d\u79f0\uff0c\u6240\u4ee5\uff0c\u5f53\u6211\u4eec\u6267\u884c\u4e0b\u9762\u7684\u547d\u4ee4\u65f6\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"curl b\n")),(0,c.kt)("p",null,"\u5fc5\u987b\u5f97\u6709\u4e00\u4e2a Service \u540d\u79f0\u4e3a b\uff0c\u8fd9\u662f\u524d\u63d0\u3002\n\u5728\u5bb9\u5668\u5185\uff0c\u4f1a\u6839\u636e /etc/resolve.conf \u8fdb\u884c\u89e3\u6790\u6d41\u7a0b\u3002\u9009\u62e9 nameserver 10.233.0.3 \u8fdb\u884c\u89e3\u6790\uff0c\u7136\u540e\uff0c\u7528\u5b57\u7b26\u4e32 \u201cb\u201d\uff0c\u4f9d\u6b21\u5e26\u5165 /etc/resolve.conf \u4e2d\u7684 search \u57df\uff0c\u8fdb\u884cDNS\u67e5\u627e\uff0c\u5206\u522b\u662f\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"// search \u5185\u5bb9\u7c7b\u4f3c\u5982\u4e0b\uff08\u4e0d\u540c\u7684pod\uff0c\u7b2c\u4e00\u4e2a\u57df\u4f1a\u6709\u6240\u4e0d\u540c\uff09\nsearch default.svc.cluster.local svc.cluster.local cluster.local\n")),(0,c.kt)("p",null,"b.default.svc.cluster.local -> b.svc.cluster.local -> b.cluster.local \uff0c\u76f4\u5230\u627e\u5230\u4e3a\u6b62\u3002\n\u6240\u4ee5\uff0c\u6211\u4eec\u6267\u884c ",(0,c.kt)("inlineCode",{parentName:"p"},"curl b"),"\uff0c\u6216\u8005\u6267\u884c ",(0,c.kt)("inlineCode",{parentName:"p"},"curl b.default"),"\uff0c\u90fd\u53ef\u4ee5\u5b8c\u6210DNS\u8bf7\u6c42\uff0c\u8fd92\u4e2a\u4e0d\u540c\u7684\u64cd\u4f5c\uff0c\u4f1a\u5206\u522b\u8fdb\u884c\u4e0d\u540c\u7684DNS\u67e5\u627e\u6b65\u9aa4\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"// curl b\uff0c\u53ef\u4ee5\u4e00\u6b21\u6027\u627e\u5230\uff08b +default.svc.cluster.local\uff09\nb.default.svc.cluster.local\n\n// curl b.default\uff0c\u7b2c\u4e00\u6b21\u627e\u4e0d\u5230\uff08 b.default + default.svc.cluster.local\uff09\nb.default.default.svc.cluster.local\n// \u7b2c\u4e8c\u6b21\u67e5\u627e\uff08 b.default + svc.cluster.local\uff09\uff0c\u53ef\u4ee5\u627e\u5230\nb.default.svc.cluster.local\n")),(0,c.kt)("h2",{id:"so-questions"},"So Questions"),(0,c.kt)("h3",{id:"curl-b\u8981\u6bd4-curl-bdefault-\u6548\u7387\u9ad8"},"curl b\uff0c\u8981\u6bd4 curl b.default \u6548\u7387\u9ad8\uff1f"),(0,c.kt)("p",null,"\u7b54\u6848\u662f\u80af\u5b9a\u7684\uff0c\u56e0\u4e3a curl b.default\uff0c\u591a\u7ecf\u8fc7\u4e86\u4e00\u6b21 DNS \u67e5\u8be2\u3002\n\u5f53\u6267\u884c curl b.default\uff0c\u4e5f\u5c31\u4f7f\u7528\u4e86\u5e26\u6709\u547d\u540d\u7a7a\u95f4\u7684\u5185\u90e8\u57df\u540d\u65f6\uff0c\u5bb9\u5668\u7684\u7b2c\u4e00\u4e2a DNS \u8bf7\u6c42\u662f"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"// b.default + default.svc.cluster.local\nb.default.default.svc.cluster.local\n")),(0,c.kt)("p",null,"\u5f53\u8bf7\u6c42\u4e0d\u5230 DNS \u7ed3\u679c\u65f6\uff0c\u4f7f\u7528"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"// b.default + svc.cluster.local\nb.default.svc.cluster.local\n")),(0,c.kt)("p",null,"\u8fdb\u884c\u8bf7\u6c42\uff0c\u6b64\u65f6\u624d\u53ef\u4ee5\u5f97\u5230\u6b63\u786e\u7684DNS\u89e3\u6790\u3002"),(0,c.kt)("h3",{id:"\u8bbf\u95ee\u5916\u90e8\u57df\u540d\u8d70-search-\u57df\u5417"},"\u8bbf\u95ee\u5916\u90e8\u57df\u540d\u8d70 search \u57df\u5417"),(0,c.kt)("p",null,"\u8fd9\u4e2a\u7b54\u6848\uff0c\u4e0d\u80fd\u8bf4\u80af\u5b9a\u4e5f\u4e0d\u80fd\u8bf4\u5426\u5b9a\uff0c\u770b\u60c5\u51b5\uff0c\u53ef\u4ee5\u8bf4\uff0c\u5927\u90e8\u5206\u60c5\u51b5\u8981\u8d70 search \u57df\u3002"),(0,c.kt)("p",null,"\u6211\u4eec\u4ee5\u8bf7\u6c42 youku.com \u4e3a\u4f8b\uff0c\u901a\u8fc7\u6293\u5305\u7684\u65b9\u5f0f\uff0c\u770b\u4e00\u770b\u5728\u67d0\u4e2a\u5bb9\u5668\u4e2d\u8bbf\u95ee youku.com\uff0c\u8fdb\u884c\u7684DNS\u67e5\u627e\u7684\u8fc7\u7a0b\uff0c\u90fd\u4ea7\u751f\u4e86\u4ec0\u4e48\u6837\u7684\u6570\u636e\u5305\u3002\u6ce8\u610f\uff1a\u6211\u4eec\u8981\u6293DNS\u5bb9\u5668\u7684\u5305\uff0c\u5c31\u5f97\u5148\u8fdb\u5165\u5230DNS\u5bb9\u5668\u7684\u7f51\u7edc\u4e2d\uff08\u800c\u4e0d\u662f\u53d1\u8d77DNS\u8bf7\u6c42\u7684\u90a3\u4e2a\u5bb9\u5668\uff09\u3002"),(0,c.kt)("p",null,"\u7531\u4e8eDNS\u5bb9\u5668\u5f80\u5f80\u4e0d\u5177\u5907bash\uff0c\u6240\u4ee5\u65e0\u6cd5\u901a\u8fc7 docker exec \u7684\u65b9\u5f0f\u8fdb\u5165\u5bb9\u5668\u5185\u6293\u5305\uff0c\u6211\u4eec\u91c7\u7528\u5176\u4ed6\u7684\u65b9\u5f0f\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},'// 1\u3001\u627e\u5230\u5bb9\u5668ID\uff0c\u5e76\u6253\u5370\u5b83\u7684NS ID\ndocker inspect --format "{{.State.Pid}}"  16938de418ac\n// 2\u3001\u8fdb\u5165\u6b64\u5bb9\u5668\u7684\u7f51\u7edcNamespace\nnsenter -n -t  54438\n// 3\u3001\u6293DNS\u5305\ntcpdump -i eth0 udp dst port 53|grep youku.com\n')),(0,c.kt)("p",null,"\u5728\u5176\u4ed6\u7684\u5bb9\u5668\u4e2d\uff0c\u8fdb\u884c youku.com \u57df\u540d\u67e5\u627e"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"nslookup  youku.com 172.22.121.65\n")),(0,c.kt)("admonition",{type:"info"},(0,c.kt)("p",{parentName:"admonition"}," \u6ce8\u610f\uff1anslookup\u547d\u4ee4\u7684\u6700\u540e\u6307\u5b9aDNS\u670d\u52a1\u5bb9\u5668\u7684IP\uff0c\u662f\u56e0\u4e3a\uff0c\u5982\u679c\u4e0d\u6307\u5b9a\uff0c\u4e14DNS\u670d\u52a1\u7684\u5bb9\u5668\u5b58\u5728\u591a\u4e2a\u7684\u8bdd\uff0c\u90a3\u4e48DNS\u8bf7\u6c42\uff0c\u53ef\u80fd\u4f1a\u5747\u5206\u5230\u6240\u6709DNS\u670d\u52a1\u7684\u5bb9\u5668\u4e0a\uff0c\u6211\u4eec\u5982\u679c\u53ea\u6293\u67d0\u5355\u4e2aDNS\u670d\u52a1\u5bb9\u5668\u6293\u5230\u7684\u5305\uff0c\u53ef\u80fd\u5c31\u4e0d\u5168\u4e86\uff0c\u6307\u5b9aIP\u540e\uff0cDNS\u7684\u8bf7\u6c42\uff0c\u5c31\u5fc5\u7136\u53ea\u4f1a\u6253\u5230\u5355\u4e2a\u7684DNS\u5bb9\u5668\u3002\u6293\u5305\u7684\u6570\u636e\u624d\u5b8c\u6574\u3002")),(0,c.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u7c7b\u4f3c\u5982\u4e0b\u7ed3\u679c\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"17:01:28.732260 IP 172.20.92.100.36326 > nodexxxx.domain: 4394+ A? youku.com.default.svc.cluster.local. (50)\n17:01:28.733158 IP 172.20.92.100.49846 > nodexxxx.domain: 60286+ A? youku.com.svc.cluster.local. (45)\n17:01:28.733888 IP 172.20.92.100.51933 > nodexxxx.domain: 63077+ A? youku.com.cluster.local. (41)\n17:01:28.734588 IP 172.20.92.100.33401 > nodexxxx.domain: 27896+ A? youku.com. (27)\n17:01:28.734758 IP nodexxxx.34138 > 192.168.x.x.domain: 27896+ A? youku.com. (27)\n\u6211\u4eec\u53ef\u4ee5\u770b\u5230\uff0c\u5728\u771f\u6b63\u89e3\u6790 youku.com \u4e4b\u524d\uff0c\u7ecf\u5386\u4e86 youku.com.default.svc.cluster.local. -> youku.com.svc.cluster.local. -> youku.com.cluster.local. -> youku.com.\n")),(0,c.kt)("p",null,"\u8fd9\u4e5f\u5c31\u610f\u5473\u7740\u67093\u6b21DNS\u8bf7\u6c42\uff0c\u662f\u6d6a\u8d39\u7684\u65e0\u610f\u4e49\u7684\u8bf7\u6c42\u3002"),(0,c.kt)("h2",{id:"\u4e3a\u4f55\u4f1a\u51fa\u73b0dns\u8bf7\u6c42\u6d6a\u8d39\u7684\u60c5\u51b5"},"\u4e3a\u4f55\u4f1a\u51fa\u73b0DNS\u8bf7\u6c42\u6d6a\u8d39\u7684\u60c5\u51b5"),(0,c.kt)("p",null,"\u8fd9\u662f\u56e0\u4e3a\uff0c\u5728 Kubernetes \u4e2d\uff0c\u5176\u5b9e /etc/resolv.conf \u8fd9\u4e2a\u6587\u4ef6\uff0c\u5e76\u4e0d\u6b62\u5305\u542b nameserver \u548c search \u57df\uff0c\u8fd8\u5305\u542b\u4e86\u975e\u5e38\u91cd\u8981\u7684\u4e00\u9879\uff1andots\u3002\u6211\u4eec\u4e4b\u524d\u6ca1\u6709\u63d0\u53ca\u8fd9\u4e2a\u9879\uff0c\u4e5f\u662f\u5e0c\u671b\u518d\u6b21\u80fd\u5f15\u8d77\u8bfb\u8005\u91cd\u89c6\u3002"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"[root@xxxx-67f54c6dff-h4zxq /]# cat /etc/resolv.conf \nnameserver 10.233.0.3\nsearch cicd.svc.cluster.local svc.cluster.local cluster.local\noptions ndots:5\n")),(0,c.kt)("p",null,"ndots:5\uff0c\u8868\u793a\uff1a\u5982\u679c\u67e5\u8be2\u7684\u57df\u540d\u5305\u542b\u7684\u70b9\u201c.\u201d\uff0c\u4e0d\u52305\u4e2a\uff0c\u90a3\u4e48\u8fdb\u884cDNS\u67e5\u627e\uff0c\u5c06\u4f7f\u7528\u975e\u5b8c\u5168\u9650\u5b9a\u540d\u79f0\uff08\u6216\u8005\u53eb\u7edd\u5bf9\u57df\u540d\uff09\uff0c\u5982\u679c\u4f60\u67e5\u8be2\u7684\u57df\u540d\u5305\u542b\u70b9\u6570\u5927\u4e8e\u7b49\u4e8e5\uff0c\u90a3\u4e48DNS\u67e5\u8be2\uff0c\u9ed8\u8ba4\u4f1a\u4f7f\u7528\u7edd\u5bf9\u57df\u540d\u8fdb\u884c\u67e5\u8be2\u3002\u4e3e\u4f8b\u6765\u8bf4\uff1a"),(0,c.kt)("p",null,"\u5982\u679c\u6211\u4eec\u8bf7\u6c42\u7684\u57df\u540d\u662f\uff0ca.b.c.d.e\uff0c\u8fd9\u4e2a\u57df\u540d\u4e2d\u67094\u4e2a\u70b9\uff0c\u90a3\u4e48\u5bb9\u5668\u4e2d\u8fdb\u884cDNS\u8bf7\u6c42\u65f6\uff0c\u4f1a\u4f7f\u7528\u975e\u7edd\u5bf9\u57df\u540d\u8fdb\u884c\u67e5\u627e\uff0c\u4f7f\u7528\u975e\u7edd\u5bf9\u57df\u540d\uff0c\u4f1a\u6309\u7167 /etc/resolv.conf \u4e2d\u7684 search \u57df\uff0c\u8d70\u4e00\u904d\u8ffd\u52a0\u5339\u914d\uff1a"),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"a.b.c.d.e.cicd.svc.cluster.local. ->\na.b.c.d.e.svc.cluster.local. ->\na.b.c.d.e.cluster.local.")),(0,c.kt)("p",null,"\u76f4\u5230\u627e\u5230\u4e3a\u6b62\u3002\u5982\u679c\u8d70\u5b8c\u4e86search\u57df\u8fd8\u627e\u4e0d\u5230\uff0c\u5219\u4f7f\u7528 a.b.c.d.e. \uff0c\u4f5c\u4e3a\u7edd\u5bf9\u57df\u540d\u8fdb\u884cDNS\u67e5\u627e\u3002"),(0,c.kt)("p",null,"\u6211\u4eec\u901a\u8fc7\u6293\u5305\u5206\u6790\u4e00\u4e2a\u5177\u4f53\u6848\u4f8b\uff1a"),(0,c.kt)("p",null,"\u57df\u540d\u4e2d\u70b9\u6570\u5c11\u4e8e5\u4e2a\u7684\u60c5\u51b5\uff1a"),(0,c.kt)("p",null,"// \u5bf9\u57df\u540d a.b.c.d.ccccc \u8fdb\u884cDNS\u89e3\u6790\u8bf7\u6c42 "),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"[root@xxxxx-67f54c6dff-h4zxq /]# nslookup  a.b.c.d.ccccc 172.22.121.65 \nServer:         172.22.121.65\nAddress:        172.22.121.65#53\n\n** server can't find a.b.c.d.ccccc: NXDOMAIN\n\n// \u6293\u5305\u6570\u636e\u5982\u4e0b\uff1a\n18:08:11.013497 IP 172.20.92.100.33387 > node011094.domain: 28844+ A? a.b.c.d.ccccc.cicd.svc.cluster.local. (54)\n18:08:11.014337 IP 172.20.92.100.33952 > node011094.domain: 57782+ A? a.b.c.d.ccccc.svc.cluster.local. (49)\n18:08:11.015079 IP 172.20.92.100.45984 > node011094.domain: 55144+ A? a.b.c.d.ccccc.cluster.local. (45)\n18:08:11.015747 IP 172.20.92.100.54589 > node011094.domain: 22860+ A? a.b.c.d.ccccc. (31)\n18:08:11.015970 IP node011094.36383 > 192.168.x.x.domain: 22860+ A? a.b.c.d.ccccc. (31)\n\n// \u7ed3\u8bba\uff1a\n// \u70b9\u6570\u5c11\u4e8e5\u4e2a\uff0c\u5148\u8d70search\u57df\uff0c\u6700\u540e\u5c06\u5176\u89c6\u4e3a\u7edd\u5bf9\u57df\u540d\u8fdb\u884c\u67e5\u8be2\n")),(0,c.kt)("p",null,"\u57df\u540d\u4e2d\u70b9\u6570>=5\u4e2a\u7684\u60c5\u51b5\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"// \u5bf9\u57df\u540d a.b.c.d.e.ccccc \u8fdb\u884cDNS\u89e3\u6790\u8bf7\u6c42\n[root@xxxxx-67f54c6dff-h4zxq /]# nslookup  a.b.c.d.e.ccccc 172.22.121.65 \nServer:         172.22.121.65\nAddress:        172.22.121.65#53\n\n** server can't find a.b.c.d.e.ccccc: NXDOMAIN\n\n// \u6293\u5305\u6570\u636e\u5982\u4e0b\uff1a\n18:10:14.514595 IP 172.20.92.100.34423 > node011094.domain: 61170+ A? a.b.c.d.e.ccccc. (33)\n18:10:14.514856 IP node011094.58522 > 192.168.x.x.domain: 61170+ A? a.b.c.d.e.ccccc. (33)\n18:10:14.515880 IP 172.20.92.100.49328 > node011094.domain: 267+ A? a.b.c.d.e.ccccc.cicd.svc.cluster.local. (56)\n18:10:14.516678 IP 172.20.92.100.35651 > node011094.domain: 54181+ A? a.b.c.d.e.ccccc.svc.cluster.local. (51)\n18:10:14.517356 IP 172.20.92.100.33259 > node011094.domain: 53022+ A? a.b.c.d.e.ccccc.cluster.local. (47)\n\n// \u7ed3\u8bba\uff1a\n// \u70b9\u6570>=5\u4e2a\uff0c\u76f4\u63a5\u89c6\u4e3a\u7edd\u5bf9\u57df\u540d\u8fdb\u884c\u67e5\u627e\uff0c\u53ea\u6709\u5f53\u67e5\u8be2\u4e0d\u5230\u7684\u65f6\u5019\uff0c\u624d\u7ee7\u7eed\u8d70 search \u57df\u3002\n")),(0,c.kt)("h2",{id:"\u5982\u4f55\u4f18\u5316-dns-\u8bf7\u6c42\u6d6a\u8d39\u7684\u60c5\u51b5"},"\u5982\u4f55\u4f18\u5316 DNS \u8bf7\u6c42\u6d6a\u8d39\u7684\u60c5\u51b5"),(0,c.kt)("h3",{id:"\u4f18\u5316\u65b9\u5f0f1\u4f7f\u7528\u5168\u9650\u5b9a\u57df\u540d"},"\u4f18\u5316\u65b9\u5f0f1\uff1a\u4f7f\u7528\u5168\u9650\u5b9a\u57df\u540d"),(0,c.kt)("p",null,"\u5176\u5b9e\u6700\u76f4\u63a5\uff0c\u6700\u6709\u6548\u7684\u4f18\u5316\u65b9\u5f0f\uff0c\u5c31\u662f\u4f7f\u7528 \u201cfully qualified name\u201d\uff0c\u7b80\u5355\u6765\u8bf4\uff0c\u4f7f\u7528\u201c\u5b8c\u5168\u9650\u5b9a\u57df\u540d\u201d\uff08\u4e5f\u53eb\u7edd\u5bf9\u57df\u540d\uff09\uff0c\u4f60\u8bbf\u95ee\u7684\u57df\u540d\uff0c\u5fc5\u987b\u8981\u4ee5 \u201c.\u201d \u4e3a\u540e\u7f00\uff0c\u8fd9\u6837\u5c31\u4f1a\u907f\u514d\u8d70 search \u57df\u8fdb\u884c\u5339\u914d\uff0c\u6211\u4eec\u6293\u5305\u518d\u8bd5\u4e00\u6b21\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"// \u6ce8\u610f\uff1ayouku.com \u540e\u8fb9\u6709\u4e00\u4e2a\u70b9 .\nnslookup  youku.com. 172.22.121.65\n")),(0,c.kt)("p",null,"\u5728DNS\u670d\u52a1\u5bb9\u5668\u4e0a\u6293\u5230\u7684\u5305\u5982\u4e0b\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"16:57:07.628112 IP 172.20.92.100.36772 > nodexxxx.domain: 46851+ [1au] A? youku.com. (38)\n16:57:07.628339 IP nodexxxx.47350 > 192.168.x.x.domain: 46851+ [1au] A? youku.com. (38)\n")),(0,c.kt)("p",null,"\u5e76\u6ca1\u6709\u591a\u4f59\u7684DNS\u8bf7\u6c42\u3002"),(0,c.kt)("h3",{id:"\u4f18\u5316\u65b9\u5f0f2\u5177\u4f53\u5e94\u7528\u914d\u7f6e\u7279\u5b9a\u7684-ndots"},"\u4f18\u5316\u65b9\u5f0f2\uff1a\u5177\u4f53\u5e94\u7528\u914d\u7f6e\u7279\u5b9a\u7684 ndots"),(0,c.kt)("p",null,"\u5176\u5b9e\uff0c\u5f80\u5f80\u6211\u4eec\u8fd8\u771f\u4e0d\u592a\u597d\u7528\u8fd9\u79cd\u7edd\u5bf9\u57df\u540d\u7684\u65b9\u5f0f\uff0c\u6709\u8c01\u8bf7\u6c42youku.com\u7684\u65f6\u5019\uff0c\u8fd8\u5199\u6210 youku.com. \u5462\uff1f"),(0,c.kt)("p",null,"\u5728 Kubernetes \u4e2d\uff0c\u9ed8\u8ba4\u8bbe\u7f6e\u4e86 ndots \u503c\u4e3a5\uff0c\u662f\u56e0\u4e3a\uff0cKubernetes \u8ba4\u4e3a\uff0c\u5185\u90e8\u57df\u540d\uff0c\u6700\u957f\u4e3a5\uff0c\u8981\u4fdd\u8bc1\u5185\u90e8\u57df\u540d\u7684\u8bf7\u6c42\uff0c\u4f18\u5148\u8d70\u96c6\u7fa4\u5185\u90e8\u7684DNS\uff0c\u800c\u4e0d\u662f\u5c06\u5185\u90e8\u57df\u540d\u7684DNS\u89e3\u6790\u8bf7\u6c42\uff0c\u6709\u6253\u5230\u5916\u7f51\u7684\u673a\u4f1a\uff0cKubernetes \u8bbe\u7f6e ndots \u4e3a5\u662f\u4e00\u4e2a\u6bd4\u8f83\u5408\u7406\u7684\u884c\u4e3a\u3002"),(0,c.kt)("p",null,"\u5982\u679c\u4f60\u9700\u8981\u5b9a\u5236\u8fd9\u4e2a\u957f\u5ea6\uff0c\u6700\u597d\u662f\u4e3a\u81ea\u5df1\u7684\u4e1a\u52a1\uff0c\u5355\u72ec\u914d\u7f6e ndots \u5373\u53ef\uff08Pod\u4e3a\u4f8b\uff0c\u5176\u5b9e\u914d\u7f6edeployment\u6700\u597d\uff09\u3002"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},'apiVersion: v1\nkind: Pod\nmetadata:\n  namespace: default\n  name: dns-example\nspec:\n  containers:\n    - name: test\n      image: nginx\n  dnsConfig:\n    options:\n      - name: ndots\n        value: "1"\n')),(0,c.kt)("h3",{id:"kubernetes-dns-\u7b56\u7565"},"Kubernetes DNS \u7b56\u7565"),(0,c.kt)("p",null,"\u5728Kubernetes \u4e2d\uff0c\u67094\u79cd DNS \u7b56\u7565\uff0c\u4ece Kubernetes \u6e90\u7801\u4e2d\u770b\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},'const (\n    // DNSClusterFirstWithHostNet indicates that the pod should use cluster DNS\n    // first, if it is available, then fall back on the default\n    // (as determined by kubelet) DNS settings.\n    DNSClusterFirstWithHostNet DNSPolicy = "ClusterFirstWithHostNet"\n\n    // DNSClusterFirst indicates that the pod should use cluster DNS\n    // first unless hostNetwork is true, if it is available, then\n    // fall back on the default (as determined by kubelet) DNS settings.\n    DNSClusterFirst DNSPolicy = "ClusterFirst"\n\n    // DNSDefault indicates that the pod should use the default (as\n    // determined by kubelet) DNS settings.\n    DNSDefault DNSPolicy = "Default"\n\n    // DNSNone indicates that the pod should use empty DNS settings. DNS\n    // parameters such as nameservers and search paths should be defined via\n    // DNSConfig.\n    DNSNone DNSPolicy = "None"\n)\n')),(0,c.kt)("p",null,"\u8fd9\u51e0\u79cdDNS\u7b56\u7565\uff0c\u9700\u8981\u5728Pod\uff0c\u6216\u8005Deployment\u3001RC\u7b49\u8d44\u6e90\u4e2d\uff0c\u8bbe\u7f6e dnsPolicy \u5373\u53ef\uff0c\u4ee5 Pod \u4e3a\u4f8b\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"apiVersion: v1\nkind: Pod\nmetadata:\n   labels:\n    name: cadvisor-nodexxxx\n    hostip: 192.168.x.x\n  name: cadvisor-nodexxxx\n  namespace: monitoring\nspec:\n  containers:\n  - args:\n    - --profiling\n    - --housekeeping_interval=10s\n    - --storage_duration=1m0s\n    image: google/cadvisor:latest\n    name: cadvisor-nodexxxx\n    ports:\n    - containerPort: 8080\n      name: http\n      protocol: TCP\n    resources: {}\n    securityContext:\n      privileged: true\n    terminationMessagePath: /dev/termination-log\n    terminationMessagePolicy: File\n  dnsPolicy: ClusterFirst\n  nodeName: nodexxxx\n")),(0,c.kt)("p",null,"\u5177\u4f53\u6765\u8bf4\uff1a"),(0,c.kt)("p",null,"None"),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"  \u8868\u793a\u7a7a\u7684DNS\u8bbe\u7f6e\n\u8fd9\u79cd\u65b9\u5f0f\u4e00\u822c\u7528\u4e8e\u60f3\u8981\u81ea\u5b9a\u4e49 DNS \u914d\u7f6e\u7684\u573a\u666f\uff0c\u800c\u4e14\uff0c\u5f80\u5f80\u9700\u8981\u548c dnsConfig \u914d\u5408\u4e00\u8d77\u4f7f\u7528\u8fbe\u5230\u81ea\u5b9a\u4e49 DNS \u7684\u76ee\u7684\u3002")),(0,c.kt)("p",null,"Default"),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"\u6709\u4eba\u8bf4 Default \u7684\u65b9\u5f0f\uff0c\u662f\u4f7f\u7528\u5bbf\u4e3b\u673a\u7684\u65b9\u5f0f\uff0c\u8fd9\u79cd\u8bf4\u6cd5\u5e76\u4e0d\u51c6\u786e\u3002\n\u8fd9\u79cd\u65b9\u5f0f\uff0c\u5176\u5b9e\u662f\uff0c\u8ba9 kubelet \u6765\u51b3\u5b9a\u4f7f\u7528\u4f55\u79cd DNS \u7b56\u7565\u3002\u800c kubelet \u9ed8\u8ba4\u7684\u65b9\u5f0f\uff0c\u5c31\u662f\u4f7f\u7528\u5bbf\u4e3b\u673a\u7684 /etc/resolv.conf\uff08\u53ef\u80fd\u8fd9\u5c31\u662f\u6709\u4eba\u8bf4\u4f7f\u7528\u5bbf\u4e3b\u673a\u7684DNS\u7b56\u7565\u7684\u65b9\u5f0f\u5427\uff09\uff0c\u4f46\u662f\uff0ckubelet \u662f\u53ef\u4ee5\u7075\u6d3b\u6765\u914d\u7f6e\u4f7f\u7528\u4ec0\u4e48\u6587\u4ef6\u6765\u8fdb\u884cDNS\u7b56\u7565\u7684\uff0c\u6211\u4eec\u5b8c\u5168\u53ef\u4ee5\u4f7f\u7528 kubelet \u7684\u53c2\u6570\uff1a\u2013resolv-conf=/etc/resolv.conf \u6765\u51b3\u5b9a\u4f60\u7684DNS\u89e3\u6790\u6587\u4ef6\u5730\u5740\u3002")),(0,c.kt)("p",null,"ClusterFirst"),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"\u8fd9\u79cd\u65b9\u5f0f\uff0c\u8868\u793a POD \u5185\u7684 DNS \u4f7f\u7528\u96c6\u7fa4\u4e2d\u914d\u7f6e\u7684 DNS \u670d\u52a1\uff0c\u7b80\u5355\u6765\u8bf4\uff0c\u5c31\u662f\u4f7f\u7528 Kubernetes \u4e2d kubedns \u6216 coredns \u670d\u52a1\u8fdb\u884c\u57df\u540d\u89e3\u6790\u3002\u5982\u679c\u89e3\u6790\u4e0d\u6210\u529f\uff0c\u624d\u4f1a\u4f7f\u7528\u5bbf\u4e3b\u673a\u7684 DNS \u914d\u7f6e\u8fdb\u884c\u89e3\u6790\u3002")),(0,c.kt)("p",null,"ClusterFirstWithHostNet"),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"\u5728\u67d0\u4e9b\u573a\u666f\u4e0b\uff0c\u6211\u4eec\u7684 POD \u662f\u7528 HOST \u6a21\u5f0f\u542f\u52a8\u7684\uff08HOST\u6a21\u5f0f\uff0c\u662f\u5171\u4eab\u5bbf\u4e3b\u673a\u7f51\u7edc\u7684\uff09\uff0c\u4e00\u65e6\u7528 HOST \u6a21\u5f0f\uff0c\u8868\u793a\u8fd9\u4e2a POD \u4e2d\u7684\u6240\u6709\u5bb9\u5668\uff0c\u90fd\u8981\u4f7f\u7528\u5bbf\u4e3b\u673a\u7684 /etc/resolv.conf \u914d\u7f6e\u8fdb\u884cDNS\u67e5\u8be2\uff0c\u4f46\u5982\u679c\u4f60\u60f3\u4f7f\u7528\u4e86 HOST \u6a21\u5f0f\uff0c\u8fd8\u7ee7\u7eed\u4f7f\u7528 Kubernetes \u7684DNS\u670d\u52a1\uff0c\u90a3\u5c31\u5c06 dnsPolicy \u8bbe\u7f6e\u4e3a ClusterFirstWithHostNet\u3002")))}i.isMDXComponent=!0}}]);