"use strict";(self.webpackChunkmeoo_space=self.webpackChunkmeoo_space||[]).push([[440],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=l.createContext({}),u=function(e){var t=l.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return l.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),k=a,m=d["".concat(i,".").concat(k)]||d[k]||p[k]||r;return n?l.createElement(m,o(o({ref:t},c),{},{components:n})):l.createElement(m,o({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<r;u++)o[u]=n[u];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7509:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var l=n(7462),a=(n(7294),n(3905));const r={sidebar_position:1,title:"Linux\u6587\u4ef6\u7cfb\u7edf\u662f\u5982\u4f55\u5de5\u4f5c\u7684\uff1f",slug:"/how_dose_linux_filesystem_work"},o=void 0,s={unversionedId:"notes/wechat/how_dose_linux_filesystem_work",id:"notes/wechat/how_dose_linux_filesystem_work",title:"Linux\u6587\u4ef6\u7cfb\u7edf\u662f\u5982\u4f55\u5de5\u4f5c\u7684\uff1f",description:"\u548c CPU\u3001\u5185\u5b58\u4e00\u6837\uff0c\u78c1\u76d8\u548c\u6587\u4ef6\u7cfb\u7edf\u7684\u7ba1\u7406\uff0c\u4e5f\u662f\u64cd\u4f5c\u7cfb\u7edf\u6700\u6838\u5fc3\u7684\u529f\u80fd\u3002",source:"@site/docs/notes/wechat/how_dose_linux_filesystem_work.md",sourceDirName:"notes/wechat",slug:"/how_dose_linux_filesystem_work",permalink:"/docs/how_dose_linux_filesystem_work",draft:!1,editUrl:"https://github.com/science09/science09.github.io/tree/main/docs/notes/wechat/how_dose_linux_filesystem_work.md",tags:[],version:"current",lastUpdatedBy:"zhaofeng.luo",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Linux\u6587\u4ef6\u7cfb\u7edf\u662f\u5982\u4f55\u5de5\u4f5c\u7684\uff1f",slug:"/how_dose_linux_filesystem_work"},sidebar:"notes",previous:{title:"\u5206\u5e03\u5f0f\u552f\u4e00ID\u751f\u6210\u65b9\u6848",permalink:"/docs/distribute_id_generate"},next:{title:"\u5de5\u5177\u7f51\u7ad9\u5217\u8868",permalink:"/docs/resources-webtool"}},i={},u=[{value:"<strong>\u7d22\u5f15\u8282\u70b9\u548c\u76ee\u5f55\u9879</strong>",id:"\u7d22\u5f15\u8282\u70b9\u548c\u76ee\u5f55\u9879",level:3},{value:"<strong>\u865a\u62df\u6587\u4ef6\u7cfb\u7edf</strong>",id:"\u865a\u62df\u6587\u4ef6\u7cfb\u7edf",level:3},{value:"<strong>\u6587\u4ef6\u7cfb\u7edf I/O</strong>",id:"\u6587\u4ef6\u7cfb\u7edf-io",level:3},{value:"<strong>\u5bb9\u91cf</strong>",id:"\u5bb9\u91cf",level:3},{value:"<strong>\u7f13\u5b58</strong>",id:"\u7f13\u5b58",level:3},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:3}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("br",null),(0,a.kt)("p",null,"\u548c CPU\u3001\u5185\u5b58\u4e00\u6837\uff0c\u78c1\u76d8\u548c\u6587\u4ef6\u7cfb\u7edf\u7684\u7ba1\u7406\uff0c\u4e5f\u662f\u64cd\u4f5c\u7cfb\u7edf\u6700\u6838\u5fc3\u7684\u529f\u80fd\u3002"),(0,a.kt)("p",null,"\u78c1\u76d8\u4e3a\u7cfb\u7edf\u63d0\u4f9b\u4e86\u6700\u57fa\u672c\u7684\u6301\u4e45\u5316\u5b58\u50a8\u3002\u6587\u4ef6\u7cfb\u7edf\u5219\u5728\u78c1\u76d8\u7684\u57fa\u7840\u4e0a\uff0c\u63d0\u4f9b\u4e86\u4e00\u4e2a\u7528\u6765\u7ba1\u7406\u6587\u4ef6\u7684\u6811\u72b6\u7ed3\u6784\u3002\u90a3\u4e48\uff0c\u78c1\u76d8\u548c\u6587\u4ef6\u7cfb\u7edf\u662f\u600e\u4e48\u5de5\u4f5c\u7684\u5462?\u53c8\u6709\u54ea\u4e9b\u6307\u6807\u53ef\u4ee5\u8861\u91cf\u5b83\u4eec\u7684\u6027\u80fd\u5462\uff1f"),(0,a.kt)("h3",{id:"\u7d22\u5f15\u8282\u70b9\u548c\u76ee\u5f55\u9879"},(0,a.kt)("strong",{parentName:"h3"},"\u7d22\u5f15\u8282\u70b9\u548c\u76ee\u5f55\u9879")),(0,a.kt)("p",null,"\u5728 Linux \u4e2d\u4e00\u5207\u7686\u6587\u4ef6\u3002\u4e0d\u4ec5\u666e\u901a\u7684\u6587\u4ef6\u548c\u76ee\u5f55\uff0c\u5c31\u8fde\u5757\u8bbe\u5907\u3001 \u5957\u63a5\u5b57\u3001\u7ba1\u9053\u7b49\uff0c\u4e5f\u90fd\u8981\u901a\u8fc7\u7edf\u4e00\u7684\u6587\u4ef6\u7cfb\u7edf\u6765\u7ba1\u7406\u3002"),(0,a.kt)("p",null,"\u4e3a\u4e86\u65b9\u4fbf\u7ba1\u7406\uff0cLinux \u6587\u4ef6\u7cfb\u7edf\u4e3a\u6bcf\u4e2a\u6587\u4ef6\u90fd\u5206\u914d\u4e24\u4e2a\u6570\u636e\u7ed3\u6784\uff0c\u7d22\u5f15\u8282\u70b9(index node)\u548c\u76ee\u5f55\u9879(directory entry)\u3002\u5b83\u4eec\u4e3b\u8981\u7528\u6765\u8bb0\u5f55\u6587\u4ef6\u7684\u5143\u4fe1\u606f\u548c\u76ee\u5f55\u7ed3\u6784\u3002"),(0,a.kt)("p",null,"\u7d22\u5f15\u8282\u70b9\uff0c\u7b80\u79f0\u4e3a inode\uff0c\u7528\u6765\u8bb0\u5f55\u6587\u4ef6\u7684\u5143\u6570\u636e\uff0c\u6bd4\u5982 inode \u7f16\u53f7\u3001\u6587\u4ef6\u5927\u5c0f\u3001\u8bbf\u95ee \u6743\u9650\u3001\u4fee\u6539\u65e5\u671f\u3001\u6570\u636e\u7684\u4f4d\u7f6e\u7b49\u3002\u7d22\u5f15\u8282\u70b9\u548c\u6587\u4ef6\u4e00\u4e00\u5bf9\u5e94\uff0c\u5b83\u8ddf\u6587\u4ef6\u5185\u5bb9\u4e00\u6837\uff0c\u90fd\u4f1a \u88ab\u6301\u4e45\u5316\u5b58\u50a8\u5230\u78c1\u76d8\u4e2d\u3002\u6240\u4ee5\u8bb0\u4f4f\uff0c\u7d22\u5f15\u8282\u70b9\u540c\u6837\u5360\u7528\u78c1\u76d8\u7a7a\u95f4\u3002"),(0,a.kt)("p",null,"\u76ee\u5f55\u9879\uff0c\u7b80\u79f0\u4e3a dentry\uff0c\u7528\u6765\u8bb0\u5f55\u6587\u4ef6\u7684\u540d\u5b57\u3001\u7d22\u5f15\u8282\u70b9\u6307\u9488\u4ee5\u53ca\u4e0e\u5176\u4ed6\u76ee\u5f55\u9879\u7684\u5173\u8054 \u5173\u7cfb\u3002\u591a\u4e2a\u5173\u8054\u7684\u76ee\u5f55\u9879\uff0c\u5c31\u6784\u6210\u4e86\u6587\u4ef6\u7cfb\u7edf\u7684\u76ee\u5f55\u7ed3\u6784\u3002\u4e0d\u8fc7\uff0c\u4e0d\u540c\u4e8e\u7d22\u5f15\u8282\u70b9\uff0c\u76ee\u5f55\u9879\u662f\u7531\u5185\u6838\u7ef4\u62a4\u7684\u4e00\u4e2a\u5185\u5b58\u6570\u636e\u7ed3\u6784\uff0c\u6240\u4ee5\u901a\u5e38\u4e5f\u88ab\u53eb\u505a\u76ee\u5f55\u9879\u7f13\u5b58\u3002"),(0,a.kt)("p",null,"\u6362\u53e5\u8bdd\u8bf4\uff0c\u7d22\u5f15\u8282\u70b9\u662f\u6bcf\u4e2a\u6587\u4ef6\u7684\u552f\u4e00\u6807\u5fd7\uff0c\u800c\u76ee\u5f55\u9879\u7ef4\u62a4\u7684\u6b63\u662f\u6587\u4ef6\u7cfb\u7edf\u7684\u6811\u72b6\u7ed3\u6784\u3002\u76ee\u5f55\u9879\u548c\u7d22\u5f15\u8282\u70b9\u7684\u5173\u7cfb\u662f\u591a\u5bf9\u4e00\uff0c\u4f60\u53ef\u4ee5\u7b80\u5355\u7406\u89e3\u4e3a\uff0c\u4e00\u4e2a\u6587\u4ef6\u53ef\u4ee5\u6709\u591a\u4e2a\u522b\u540d\u3002"),(0,a.kt)("p",null,"\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u901a\u8fc7\u786c\u94fe\u63a5\u4e3a\u6587\u4ef6\u521b\u5efa\u7684\u522b\u540d\uff0c\u5c31\u4f1a\u5bf9\u5e94\u4e0d\u540c\u7684\u76ee\u5f55\u9879\uff0c\u4e0d\u8fc7\u8fd9\u4e9b\u76ee\u5f55\u9879\u672c\u8d28\u4e0a\u8fd8\u662f\u94fe\u63a5\u540c\u4e00\u4e2a\u6587\u4ef6\uff0c\u6240\u4ee5\uff0c\u5b83\u4eec\u7684\u7d22\u5f15\u8282\u70b9\u76f8\u540c\u3002"),(0,a.kt)("p",null,"\u7d22\u5f15\u8282\u70b9\u548c\u76ee\u5f55\u9879\u7eaa\u5f55\u4e86\u6587\u4ef6\u7684\u5143\u6570\u636e\uff0c\u4ee5\u53ca\u6587\u4ef6\u95f4\u7684\u76ee\u5f55\u5173\u7cfb\uff0c\u90a3\u4e48\u5177\u4f53\u6765\u8bf4\uff0c\u6587\u4ef6\u6570\u636e\u5230\u5e95\u662f\u600e\u4e48\u5b58\u50a8\u7684\u5462\uff1f\u662f\u4e0d\u662f\u76f4\u63a5\u5199\u5230\u78c1\u76d8\u4e2d\u5c31\u597d\u4e86\u5462\uff1f"),(0,a.kt)("p",null,"\u5b9e\u9645\u4e0a\uff0c\u78c1\u76d8\u8bfb\u5199\u7684\u6700\u5c0f\u5355\u4f4d\u662f\u6247\u533a\uff0c\u7136\u800c\u6247\u533a\u53ea\u6709 512B \u5927\u5c0f\uff0c\u5982\u679c\u6bcf\u6b21\u90fd\u8bfb\u5199\u8fd9\u4e48\u5c0f\u7684\u5355\u4f4d\uff0c\u6548\u7387\u4e00\u5b9a\u5f88\u4f4e\u3002\u6240\u4ee5\uff0c\u6587\u4ef6\u7cfb\u7edf\u53c8\u628a\u8fde\u7eed\u7684\u6247\u533a\u7ec4\u6210\u4e86\u903b\u8f91\u5757\uff0c\u7136\u540e\u6bcf\u6b21\u90fd\u4ee5\u903b \u8f91\u5757\u4e3a\u6700\u5c0f\u5355\u5143\uff0c\u6765\u7ba1\u7406\u6570\u636e\u3002\u5e38\u89c1\u7684\u903b\u8f91\u5757\u5927\u5c0f\u4e3a 4KB\uff0c\u4e5f\u5c31\u662f\u7531\u8fde\u7eed\u7684 8 \u4e2a\u6247\u533a\u7ec4\u6210\u3002"),(0,a.kt)("p",null,"\u4e3a\u4e86\u5e2e\u52a9\u6211\u4eec\u7406\u89e3\u76ee\u5f55\u9879\u3001\u7d22\u5f15\u8282\u70b9\u4ee5\u53ca\u6587\u4ef6\u6570\u636e\u7684\u5173\u7cfb\uff0c\u753b\u4e86\u4e00\u5f20\u793a\u610f\u56fe\u3002\u6211\u4eec\u53ef\u4ee5\u5bf9\u7167\u7740\u8fd9\u5f20\u56fe\uff0c\u6765\u56de\u5fc6\u521a\u521a\u8bb2\u8fc7\u7684\u5185\u5bb9\uff0c\u628a\u77e5\u8bc6\u548c\u7ec6\u8282\u4e32\u8054\u8d77\u6765\u3002"),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/0cf21303-ce23-4439-89f9-6c28b272767e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221007T144942Z&X-Amz-Expires=3600&X-Amz-Signature=06bfe6ddb18279055b0ff7cda68e2090efa2bcca98ea18cd5aabde8e7c70d92c&X-Amz-SignedHeaders=host&x-id=GetObject",alt:"Untitled.png"})),(0,a.kt)("p",null,"\u4e0d\u8fc7\uff0c\u8fd9\u91cc\u6709\u4e24\u70b9\u9700\u8981\u6211\u4eec\u6ce8\u610f\uff1a"),(0,a.kt)("p",null,"\u7b2c\u4e00\uff0c\u76ee\u5f55\u9879\u672c\u8eab\u5c31\u662f\u4e00\u4e2a\u5185\u5b58\u7f13\u5b58\uff0c\u800c\u7d22\u5f15\u8282\u70b9\u5219\u662f\u5b58\u50a8\u5728\u78c1\u76d8\u4e2d\u7684\u6570\u636e\u3002\u5728\u524d\u9762\u7684 Buffer \u548c Cache \u539f\u7406\u4e2d\uff0c\u6211\u66fe\u7ecf\u63d0\u5230\u8fc7\uff0c\u4e3a\u4e86\u534f\u8c03\u6162\u901f\u78c1\u76d8\u4e0e\u5feb\u901f CPU \u7684\u6027\u80fd\u5dee\u5f02\uff0c\u6587 \u4ef6\u5185\u5bb9\u4f1a\u7f13\u5b58\u5230\u9875\u7f13\u5b58 Cache \u4e2d\u3002\u90a3\u4e48\uff0c\u6211\u4eec\u4e5f\u5e94\u8be5\u60f3\u5230\uff0c\u8fd9\u4e9b\u7d22\u5f15\u8282\u70b9\u81ea\u7136\u4e5f\u4f1a\u7f13\u5b58\u5230\u5185\u5b58\u4e2d\uff0c\u52a0\u901f\u6587\u4ef6\u7684\u8bbf\u95ee\u3002"),(0,a.kt)("p",null,"\u7b2c\u4e8c\uff0c\u78c1\u76d8\u5728\u6267\u884c\u6587\u4ef6\u7cfb\u7edf\u683c\u5f0f\u5316\u65f6\uff0c\u4f1a\u88ab\u5206\u6210\u4e09\u4e2a\u5b58\u50a8\u533a\u57df\uff0c\u8d85\u7ea7\u5757\u3001\u7d22\u5f15\u8282\u70b9\u533a\u548c\u6570"),(0,a.kt)("p",null,"\u636e\u5757\u533a\u3002\u5176\u4e2d\uff0c"),(0,a.kt)("p",null,"\u8d85\u7ea7\u5757\uff0c\u5b58\u50a8\u6574\u4e2a\u6587\u4ef6\u7cfb\u7edf\u7684\u72b6\u6001\u3002"),(0,a.kt)("p",null,"\u7d22\u5f15\u8282\u70b9\u533a\uff0c\u7528\u6765\u5b58\u50a8\u7d22\u5f15\u8282\u70b9\u3002"),(0,a.kt)("p",null,"\u6570\u636e\u5757\u533a\uff0c\u5219\u7528\u6765\u5b58\u50a8\u6587\u4ef6\u6570\u636e\u3002"),(0,a.kt)("h3",{id:"\u865a\u62df\u6587\u4ef6\u7cfb\u7edf"},(0,a.kt)("strong",{parentName:"h3"},"\u865a\u62df\u6587\u4ef6\u7cfb\u7edf")),(0,a.kt)("p",null,"\u76ee\u5f55\u9879\u3001\u7d22\u5f15\u8282\u70b9\u3001\u903b\u8f91\u5757\u4ee5\u53ca\u8d85\u7ea7\u5757\uff0c\u6784\u6210\u4e86 Linux \u6587\u4ef6\u7cfb\u7edf\u7684\u56db\u5927\u57fa\u672c\u8981\u7d20\u3002\u4e0d\u8fc7\uff0c \u4e3a\u4e86\u652f\u6301\u5404\u79cd\u4e0d\u540c\u7684\u6587\u4ef6\u7cfb\u7edf\uff0cLinux \u5185\u6838\u5728\u7528\u6237\u8fdb\u7a0b\u548c\u6587\u4ef6\u7cfb\u7edf\u7684\u4e2d\u95f4\uff0c\u53c8\u5f15\u5165\u4e86\u4e00\u4e2a\u62bd\u8c61\u5c42\uff0c\u4e5f\u5c31\u662f\u865a\u62df\u6587\u4ef6\u7cfb\u7edf VFS(Virtual File System)\u3002"),(0,a.kt)("p",null,"VFS \u5b9a\u4e49\u4e86\u4e00\u7ec4\u6240\u6709\u6587\u4ef6\u7cfb\u7edf\u90fd\u652f\u6301\u7684\u6570\u636e\u7ed3\u6784\u548c\u6807\u51c6\u63a5\u53e3\u3002\u8fd9\u6837\uff0c\u7528\u6237\u8fdb\u7a0b\u548c\u5185\u6838\u4e2d\u7684\u5176\u4ed6\u5b50\u7cfb\u7edf\uff0c\u53ea\u9700\u8981\u8ddf VFS \u63d0\u4f9b\u7684\u7edf\u4e00\u63a5\u53e3\u8fdb\u884c\u4ea4\u4e92\u5c31\u53ef\u4ee5\u4e86\uff0c\u800c\u4e0d\u9700\u8981\u518d\u5173\u5fc3\u5e95\u5c42\u5404\u79cd\u6587\u4ef6\u7cfb\u7edf\u7684\u5b9e\u73b0\u7ec6\u8282\u3002"),(0,a.kt)("p",null,"\u8fd9\u91cc\uff0c\u4e0b\u56fe\u662f Linux \u6587\u4ef6\u7cfb\u7edf\u7684\u67b6\u6784\u56fe\uff0c\u5e2e\u6211\u4eec\u66f4\u597d\u5730\u7406\u89e3\u7cfb\u7edf\u8c03\u7528\u3001VFS\u3001\u7f13\u5b58\u3001\u6587 \u4ef6\u7cfb\u7edf\u4ee5\u53ca\u5757\u5b58\u50a8\u4e4b\u95f4\u7684\u5173\u7cfb\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/47866446-6792-4dc0-8c73-9b0c4f8f51bf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221007T144942Z&X-Amz-Expires=3600&X-Amz-Signature=3920eb25f84b33615f98cbf8a6bd58dd4a1dc3bcbd1bc327c49508409c62b0a0&X-Amz-SignedHeaders=host&x-id=GetObject",alt:"Untitled.png"})),(0,a.kt)("p",null,"\u901a\u8fc7\u8fd9\u5f20\u56fe\uff0c\u53ef\u4ee5\u770b\u5230\uff0c\u5728 VFS \u7684\u4e0b\u65b9\uff0cLinux \u652f\u6301\u5404\u79cd\u5404\u6837\u7684\u6587\u4ef6\u7cfb\u7edf\uff0c\u5982 Ext4\u3001 XFS\u3001NFS \u7b49\u7b49\u3002\u6309\u7167\u5b58\u50a8\u4f4d\u7f6e\u7684\u4e0d\u540c\uff0c\u8fd9\u4e9b\u6587\u4ef6\u7cfb\u7edf\u53ef\u4ee5\u5206\u4e3a\u4e09\u7c7b\u3002"),(0,a.kt)("p",null,"\u7b2c\u4e00\u7c7b\u662f\u57fa\u4e8e\u78c1\u76d8\u7684\u6587\u4ef6\u7cfb\u7edf\uff0c\u4e5f\u5c31\u662f\u628a\u6570\u636e\u76f4\u63a5\u5b58\u50a8\u5728\u8ba1\u7b97\u673a\u672c\u5730\u6302\u8f7d\u7684\u78c1\u76d8\u4e2d\u3002\u5e38\u89c1\u7684 Ext4\u3001XFS\u3001OverlayFS \u7b49\uff0c\u90fd\u662f\u8fd9\u7c7b\u6587\u4ef6\u7cfb\u7edf\u3002"),(0,a.kt)("p",null,"\u7b2c\u4e8c\u7c7b\u662f\u57fa\u4e8e\u5185\u5b58\u7684\u6587\u4ef6\u7cfb\u7edf\uff0c\u4e5f\u5c31\u662f\u6211\u4eec\u5e38\u8bf4\u7684\u865a\u62df\u6587\u4ef6\u7cfb\u7edf\u3002\u8fd9\u7c7b\u6587\u4ef6\u7cfb\u7edf\uff0c\u4e0d\u9700\u8981\u4efb\u4f55\u78c1\u76d8\u5206\u914d\u5b58\u50a8\u7a7a\u95f4\uff0c\u4f46\u4f1a\u5360\u7528\u5185\u5b58\u3002\u6211\u4eec\u7ecf\u5e38\u7528\u5230\u7684 proc \u6587\u4ef6\u7cfb\u7edf\uff0c\u5176\u5b9e\u5c31\u662f \u4e00\u79cd\u6700\u5e38\u89c1\u7684\u865a\u62df\u6587\u4ef6\u7cfb\u7edf\u3002\u6b64\u5916\uff0c/sys \u6587\u4ef6\u7cfb\u7edf\u4e5f\u5c5e\u4e8e\u8fd9\u4e00\u7c7b\uff0c\u4e3b\u8981\u5411\u7528\u6237\u7a7a\u95f4\u5bfc\u51fa\u5c42\u6b21\u5316\u7684\u5185\u6838\u5bf9\u8c61\u3002"),(0,a.kt)("p",null,"\u7b2c\u4e09\u7c7b\u662f\u7f51\u7edc\u6587\u4ef6\u7cfb\u7edf\uff0c\u4e5f\u5c31\u662f\u7528\u6765\u8bbf\u95ee\u5176\u4ed6\u8ba1\u7b97\u673a\u6570\u636e\u7684\u6587\u4ef6\u7cfb\u7edf\uff0c\u6bd4\u5982 NFS\u3001 SMB\u3001iSCSI \u7b49\u3002"),(0,a.kt)("p",null,"\u8fd9\u4e9b\u6587\u4ef6\u7cfb\u7edf\uff0c\u8981\u5148\u6302\u8f7d\u5230 VFS \u76ee\u5f55\u6811\u4e2d\u7684\u67d0\u4e2a\u5b50\u76ee\u5f55(\u79f0\u4e3a\u6302\u8f7d\u70b9)\uff0c\u7136\u540e\u624d\u80fd\u8bbf\u95ee\u5176\u4e2d\u7684\u6587\u4ef6\u3002\u62ff\u7b2c\u4e00\u7c7b\uff0c\u4e5f\u5c31\u662f\u57fa\u4e8e\u78c1\u76d8\u7684\u6587\u4ef6\u7cfb\u7edf\u4e3a\u4f8b\uff0c\u5728\u5b89\u88c5\u7cfb\u7edf\u65f6\uff0c\u8981\u5148\u6302\u8f7d\u4e00\u4e2a\u6839 \u76ee\u5f55(/)\uff0c\u5728\u6839\u76ee\u5f55\u4e0b\u518d\u628a\u5176\u4ed6\u6587\u4ef6\u7cfb\u7edf(\u6bd4\u5982\u5176\u4ed6\u7684\u78c1\u76d8\u5206\u533a\u3001/proc \u6587\u4ef6\u7cfb\u7edf\u3001/sys \u6587\u4ef6\u7cfb\u7edf\u3001NFS \u7b49)\u6302\u8f7d\u8fdb\u6765\u3002"),(0,a.kt)("h3",{id:"\u6587\u4ef6\u7cfb\u7edf-io"},(0,a.kt)("strong",{parentName:"h3"},"\u6587\u4ef6\u7cfb\u7edf I/O")),(0,a.kt)("p",null,"\u628a\u6587\u4ef6\u7cfb\u7edf\u6302\u8f7d\u5230\u6302\u8f7d\u70b9\u540e\uff0c\u4f60\u5c31\u80fd\u901a\u8fc7\u6302\u8f7d\u70b9\uff0c\u518d\u53bb\u8bbf\u95ee\u5b83\u7ba1\u7406\u7684\u6587\u4ef6\u4e86\u3002VFS \u63d0\u4f9b\u4e86\u4e00\u7ec4\u6807\u51c6\u7684\u6587\u4ef6\u8bbf\u95ee\u63a5\u53e3\u3002\u8fd9\u4e9b\u63a5\u53e3\u4ee5\u7cfb\u7edf\u8c03\u7528\u7684\u65b9\u5f0f\uff0c\u63d0\u4f9b\u7ed9\u5e94\u7528\u7a0b\u5e8f\u4f7f\u7528\u3002"),(0,a.kt)("p",null,"\u5c31\u62ff cat \u547d\u4ee4\u6765\u8bf4\uff0c\u5b83\u9996\u5148\u8c03\u7528 open() \uff0c\u6253\u5f00\u4e00\u4e2a\u6587\u4ef6;\u7136\u540e\u8c03\u7528 read() \uff0c\u8bfb\u53d6\u6587\u4ef6\u7684\u5185\u5bb9;\u6700\u540e\u518d\u8c03\u7528 write() \uff0c\u628a\u6587\u4ef6\u5185\u5bb9\u8f93\u51fa\u5230\u63a7\u5236\u53f0\u7684\u6807\u51c6\u8f93\u51fa\u4e2d:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plain",metastring:"text",text:!0},"int\xa0open(const\xa0char\xa0*pathname,\xa0int\xa0flags,\xa0mode_t\xa0mode);\nssize_t\xa0read(int\xa0fd,\xa0void\xa0*buf,\xa0size_t\xa0count);\nssize_t\xa0write(int\xa0fd,\xa0const\xa0void\xa0*buf,\xa0size_t\xa0count);\n\n\n")),(0,a.kt)("p",null,"\u6587\u4ef6\u8bfb\u5199\u65b9\u5f0f\u7684\u5404\u79cd\u5dee\u5f02\uff0c\u5bfc\u81f4 I/O \u7684\u5206\u7c7b\u591a\u79cd\u591a\u6837\u3002\u6700\u5e38\u89c1\u7684\u6709\uff0c\u7f13\u51b2\u4e0e\u975e\u7f13\u51b2 I/O\u3001 \u76f4\u63a5\u4e0e\u975e\u76f4\u63a5 I/O\u3001\u963b\u585e\u4e0e\u975e\u963b\u585e I/O\u3001\u540c\u6b65\u4e0e\u5f02\u6b65 I/O \u7b49\u3002\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u5c31\u8be6\u7ec6\u770b\u8fd9\u56db\u79cd\u5206\u7c7b\u3002"),(0,a.kt)("p",null,"\u7b2c\u4e00\u79cd\uff0c\u6839\u636e\u662f\u5426\u5229\u7528\u6807\u51c6\u5e93\u7f13\u5b58\uff0c\u53ef\u4ee5\u628a\u6587\u4ef6 I/O \u5206\u4e3a\u7f13\u51b2 I/O \u4e0e\u975e\u7f13\u51b2 I/O\u3002"),(0,a.kt)("p",null,"\u7f13\u51b2 I/O\uff0c\u662f\u6307\u5229\u7528\u6807\u51c6\u5e93\u7f13\u5b58\u6765\u52a0\u901f\u6587\u4ef6\u7684\u8bbf\u95ee\uff0c\u800c\u6807\u51c6\u5e93\u5185\u90e8\u518d\u901a\u8fc7\u7cfb\u7edf\u8c03\u5ea6\u8bbf\u95ee\u6587\u4ef6\u3002"),(0,a.kt)("p",null,"\u975e\u7f13\u51b2 I/O\uff0c\u662f\u6307\u76f4\u63a5\u901a\u8fc7\u7cfb\u7edf\u8c03\u7528\u6765\u8bbf\u95ee\u6587\u4ef6\uff0c\u4e0d\u518d\u7ecf\u8fc7\u6807\u51c6\u5e93\u7f13\u5b58\u3002"),(0,a.kt)("p",null,"\u6ce8\u610f\uff0c\u8fd9\u91cc\u6240\u8bf4\u7684\u201c\u7f13\u51b2\u201d\uff0c\u662f\u6307\u6807\u51c6\u5e93\u5185\u90e8\u5b9e\u73b0\u7684\u7f13\u5b58\u3002\u6bd4\u65b9\u8bf4\uff0c\u4f60\u53ef\u80fd\u89c1\u5230\u8fc7\uff0c\u5f88\u591a\u7a0b\u5e8f\u9047\u5230\u6362\u884c\u65f6\u624d\u771f\u6b63\u8f93\u51fa\uff0c\u800c\u6362\u884c\u524d\u7684\u5185\u5bb9\uff0c\u5176\u5b9e\u5c31\u662f\u88ab\u6807\u51c6\u5e93\u6682\u65f6\u7f13\u5b58\u4e86\u8d77\u6765\u3002"),(0,a.kt)("p",null,"\u65e0\u8bba\u7f13\u51b2 I/O \u8fd8\u662f\u975e\u7f13\u51b2 I/O\uff0c\u5b83\u4eec\u6700\u7ec8\u8fd8\u662f\u8981\u7ecf\u8fc7\u7cfb\u7edf\u8c03\u7528\u6765\u8bbf\u95ee\u6587\u4ef6\u3002\u6211\u4eec\u77e5\u9053\uff0c\u7cfb\u7edf\u8c03\u7528\u540e\uff0c\u8fd8\u4f1a\u901a\u8fc7\u9875\u7f13\u5b58\uff0c\u6765\u51cf\u5c11\u78c1\u76d8\u7684 I/O \u64cd\u4f5c\u3002"),(0,a.kt)("p",null,"\u7b2c\u4e8c\uff0c\u6839\u636e\u662f\u5426\u5229\u7528\u64cd\u4f5c\u7cfb\u7edf\u7684\u9875\u7f13\u5b58\uff0c\u53ef\u4ee5\u628a\u6587\u4ef6 I/O \u5206\u4e3a\u76f4\u63a5 I/O \u4e0e\u975e\u76f4\u63a5 I/O\u3002"),(0,a.kt)("p",null,"\u76f4\u63a5 I/O\uff0c\u662f\u6307\u8df3\u8fc7\u64cd\u4f5c\u7cfb\u7edf\u7684\u9875\u7f13\u5b58\uff0c\u76f4\u63a5\u8ddf\u6587\u4ef6\u7cfb\u7edf\u4ea4\u4e92\u6765\u8bbf\u95ee\u6587\u4ef6\u3002"),(0,a.kt)("p",null,"\u975e\u76f4\u63a5 I/O \u6b63\u597d\u76f8\u53cd\uff0c\u6587\u4ef6\u8bfb\u5199\u65f6\uff0c\u5148\u8981\u7ecf\u8fc7\u7cfb\u7edf\u7684\u9875\u7f13\u5b58\uff0c\u7136\u540e\u518d\u7531\u5185\u6838\u6216\u989d\u5916\u7684\u7cfb\u7edf\u8c03\u7528\uff0c\u771f\u6b63\u5199\u5165\u78c1\u76d8\u3002"),(0,a.kt)("p",null,"\u60f3\u8981\u5b9e\u73b0\u76f4\u63a5 I/O\uff0c\u9700\u8981\u4f60\u5728\u7cfb\u7edf\u8c03\u7528\u4e2d\uff0c\u6307\u5b9a O_DIRECT \u6807\u5fd7\u3002\u5982\u679c\u6ca1\u6709\u8bbe\u7f6e\u8fc7\uff0c\u9ed8\u8ba4 \u7684\u662f\u975e\u76f4\u63a5 I/O\u3002"),(0,a.kt)("p",null,"\u4e0d\u8fc7\u8981\u6ce8\u610f\uff0c\u76f4\u63a5 I/O\u3001\u975e\u76f4\u63a5 I/O\uff0c\u672c\u8d28\u4e0a\u8fd8\u662f\u548c\u6587\u4ef6\u7cfb\u7edf\u4ea4\u4e92\u3002\u5982\u679c\u662f\u5728\u6570\u636e\u5e93\u7b49\u573a\u666f\u4e2d\uff0c\u8fd8\u4f1a\u770b\u5230\uff0c\u8df3\u8fc7\u6587\u4ef6\u7cfb\u7edf\u8bfb\u5199\u78c1\u76d8\u7684\u60c5\u51b5\uff0c\u4e5f\u5c31\u662f\u6211\u4eec\u901a\u5e38\u6240\u8bf4\u7684\u88f8 I/O\u3002"),(0,a.kt)("p",null,"\u7b2c\u4e09\uff0c\u6839\u636e\u5e94\u7528\u7a0b\u5e8f\u662f\u5426\u963b\u585e\u81ea\u8eab\u8fd0\u884c\uff0c\u53ef\u4ee5\u628a\u6587\u4ef6 I/O \u5206\u4e3a\u963b\u585e I/O \u548c\u975e\u963b\u585e I/O"),(0,a.kt)("p",null,"\u6240\u8c13\u963b\u585e I/O\uff0c\u662f\u6307\u5e94\u7528\u7a0b\u5e8f\u6267\u884c I/O \u64cd\u4f5c\u540e\uff0c\u5982\u679c\u6ca1\u6709\u83b7\u5f97\u54cd\u5e94\uff0c\u5c31\u4f1a\u963b\u585e\u5f53\u524d\u7ebf\u7a0b\uff0c\u81ea\u7136\u5c31\u4e0d\u80fd\u6267\u884c\u5176\u4ed6\u4efb\u52a1\u3002"),(0,a.kt)("p",null,"\u6240\u8c13\u975e\u963b\u585e I/O\uff0c\u662f\u6307\u5e94\u7528\u7a0b\u5e8f\u6267\u884c I/O \u64cd\u4f5c\u540e\uff0c\u4e0d\u4f1a\u963b\u585e\u5f53\u524d\u7684\u7ebf\u7a0b\uff0c\u53ef\u4ee5\u7ee7\u7eed\u6267\u884c\u5176\u4ed6\u7684\u4efb\u52a1\uff0c\u968f\u540e\u518d\u901a\u8fc7\u8f6e\u8be2\u6216\u8005\u4e8b\u4ef6\u901a\u77e5\u7684\u5f62\u5f0f\uff0c\u83b7\u53d6\u8c03\u7528\u7684\u7ed3\u679c\u3002"),(0,a.kt)("p",null,"\u6bd4\u65b9\u8bf4\uff0c\u8bbf\u95ee\u7ba1\u9053\u6216\u8005\u7f51\u7edc\u5957\u63a5\u5b57\u65f6\uff0c\u8bbe\u7f6e O_NONBLOCK \u6807\u5fd7\uff0c\u5c31\u8868\u793a\u7528\u975e\u963b\u585e\u65b9\u5f0f\u8bbf\u95ee\uff1b\u800c\u5982\u679c\u4e0d\u505a\u4efb\u4f55\u8bbe\u7f6e\uff0c\u9ed8\u8ba4\u7684\u5c31\u662f\u963b\u585e\u8bbf\u95ee\u3002"),(0,a.kt)("p",null,"\u7b2c\u56db\uff0c\u6839\u636e\u662f\u5426\u7b49\u5f85\u54cd\u5e94\u7ed3\u679c\uff0c\u53ef\u4ee5\u628a\u6587\u4ef6 I/O \u5206\u4e3a\u540c\u6b65\u548c\u5f02\u6b65 I/O"),(0,a.kt)("p",null,"\u6240\u8c13\u540c\u6b65 I/O\uff0c\u662f\u6307\u5e94\u7528\u7a0b\u5e8f\u6267\u884c I/O \u64cd\u4f5c\u540e\uff0c\u8981\u4e00\u76f4\u7b49\u5230\u6574\u4e2a I/O \u5b8c\u6210\u540e\uff0c\u624d\u80fd\u83b7\u5f97 I/O \u54cd\u5e94\u3002"),(0,a.kt)("p",null,"\u6240\u8c13\u5f02\u6b65 I/O\uff0c\u662f\u6307\u5e94\u7528\u7a0b\u5e8f\u6267\u884c I/O \u64cd\u4f5c\u540e\uff0c\u4e0d\u7528\u7b49\u5f85\u5b8c\u6210\u548c\u5b8c\u6210\u540e\u7684\u54cd\u5e94\uff0c\u800c\u662f\u7ee7\u7eed\u6267\u884c\u5c31\u53ef\u4ee5\u3002\u7b49\u5230\u8fd9\u6b21 I/O \u5b8c\u6210\u540e\uff0c\u54cd\u5e94\u4f1a\u7528\u4e8b\u4ef6\u901a\u77e5\u7684\u65b9\u5f0f\uff0c\u544a\u8bc9\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\uff0c\u5728\u64cd\u4f5c\u6587\u4ef6\u65f6\uff0c\u5982\u679c\u8bbe\u7f6e\u4e86 O_SYNC \u6216\u8005 O_DSYNC \u6807\u5fd7\uff0c\u5c31\u4ee3\u8868\u540c\u6b65 I/O\u3002\u5982\u679c\u8bbe\u7f6e\u4e86 O_DSYNC\uff0c\u5c31\u8981\u7b49\u6587\u4ef6\u6570\u636e\u5199\u5165\u78c1\u76d8\u540e\uff0c\u624d\u80fd\u8fd4\u56de\uff1b\u800c O_SYNC\uff0c\u5219\u662f\u5728 O_DSYNC \u57fa\u7840\u4e0a\uff0c\u8981\u6c42\u6587\u4ef6\u5143\u6570\u636e\u4e5f\u8981\u5199\u5165\u78c1\u76d8\u540e\uff0c\u624d\u80fd\u8fd4\u56de\u3002"),(0,a.kt)("p",null,"\u518d\u6bd4\u5982\uff0c\u5728\u8bbf\u95ee\u7ba1\u9053\u6216\u8005\u7f51\u7edc\u5957\u63a5\u5b57\u65f6\uff0c\u8bbe\u7f6e\u4e86 O_ASYNC \u9009\u9879\u540e\uff0c\u76f8\u5e94\u7684 I/O \u5c31\u662f\u5f02\u6b65I/O\u3002\u8fd9\u6837\uff0c\u5185\u6838\u4f1a\u518d\u901a\u8fc7 SIGIO \u6216\u8005 SIGPOLL\uff0c\u6765\u901a\u77e5\u8fdb\u7a0b\u6587\u4ef6\u662f\u5426\u53ef\u8bfb\u5199\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u80fd\u53d1\u73b0\u4e86\uff0c\u8fd9\u91cc\u7684\u597d\u591a\u6982\u5ff5\u4e5f\u7ecf\u5e38\u51fa\u73b0\u5728\u7f51\u7edc\u7f16\u7a0b\u4e2d\u3002\u6bd4\u5982\u975e\u963b\u585e I/O\uff0c\u901a\u5e38\u4f1a\u8ddf select/poll \u914d\u5408\uff0c\u7528\u5728\u7f51\u7edc\u5957\u63a5\u5b57\u7684 I/O \u4e2d\u3002"),(0,a.kt)("p",null,"\u8fd9\u4e0b\u6211\u4eec\u4e5f\u5e94\u8be5\u53ef\u4ee5\u7406\u89e3\uff0c\u201cLinux \u4e00\u5207\u7686\u6587\u4ef6\u201d\u7684\u6df1\u523b\u542b\u4e49\u3002\u65e0\u8bba\u662f\u666e\u901a\u6587\u4ef6\u548c\u5757\u8bbe\u5907\u3001\u8fd8\u662f\u7f51\u7edc\u5957\u63a5\u5b57\u548c\u7ba1\u9053\u7b49\uff0c\u5b83\u4eec\u90fd\u901a\u8fc7\u7edf\u4e00\u7684 VFS \u63a5\u53e3\u6765\u8bbf\u95ee\u3002"),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"\u5bb9\u91cf"},(0,a.kt)("strong",{parentName:"h3"},"\u5bb9\u91cf")),(0,a.kt)("p",null,"\u5bf9\u6587\u4ef6\u7cfb\u7edf\u6765\u8bf4\uff0c\u6700\u5e38\u89c1\u7684\u4e00\u4e2a\u95ee\u9898\u5c31\u662f\u7a7a\u95f4\u4e0d\u8db3\u3002\u5f53\u7136\uff0c\u4f60\u53ef\u80fd\u672c\u8eab\u5c31\u77e5\u9053\uff0c\u7528 df \u547d \u4ee4\uff0c\u5c31\u80fd\u67e5\u770b\u6587\u4ef6\u7cfb\u7edf\u7684\u78c1\u76d8\u7a7a\u95f4\u4f7f\u7528\u60c5\u51b5\u3002\u6bd4\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"df /dev/vda1\n\u6587\u4ef6\u7cfb\u7edf           1K-\u5757         \u5df2\u7528         \u53ef\u7528        \u5df2\u7528%    \u6302\u8f7d\u70b9\n/dev/vda1      104846316     28228044     76618272      27%     /\n")),(0,a.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u6211\u7684\u6839\u6587\u4ef6\u7cfb\u7edf\u53ea\u4f7f\u7528\u4e86 27% \u7684\u7a7a\u95f4\u3002\u8fd9\u91cc\u8fd8\u8981\u6ce8\u610f\uff0c\u603b\u7a7a\u95f4\u7528 1K- \u5feb \u7684\u6570\u91cf\u6765\u8868\u793a\uff0c\u4f60\u53ef\u4ee5\u7ed9 df \u52a0\u4e0a -h \u9009\u9879\uff0c\u4ee5\u83b7\u5f97\u66f4\u597d\u7684\u53ef\u8bfb\u6027\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"df -h /dev/vda1\n \u6587\u4ef6\u7cfb\u7edf         \u5bb9\u91cf     \u5df2\u7528     \u53ef\u7528   \u5df2\u7528%   \u6302\u8f7d\u70b9\n/dev/vda1       100G     27G      74G   27%     /\n")),(0,a.kt)("p",null,"\u4e0d\u8fc7\u6709\u65f6\u5019\uff0c\u660e\u660e\u78b0\u5230\u4e86\u7a7a\u95f4\u4e0d\u8db3\u7684\u95ee\u9898\uff0c\u53ef\u662f\u7528 df \u67e5\u770b\u78c1\u76d8\u7a7a\u95f4\u540e\uff0c\u5374\u53d1\u73b0\u5269\u4f59\u7a7a\u95f4\u8fd8\u6709\u5f88\u591a\u3002\u8fd9\u662f\u600e\u4e48\u56de\u4e8b\u5462\uff1f"),(0,a.kt)("p",null,"\u5176\u5b9e\u9664\u4e86\u6587\u4ef6\u6570\u636e\uff0c\u7d22\u5f15\u8282\u70b9\u4e5f\u5360\u7528\u78c1\u76d8\u7a7a\u95f4\u3002\u53ef\u4ee5\u7ed9 df \u547d\u4ee4\u52a0\u4e0a -i \u53c2\u6570\uff0c\u67e5\u770b\u7d22\u5f15\u8282\u70b9\u7684\u4f7f\u7528\u60c5\u51b5\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"df -h -i /dev/vda1\n\u6587\u4ef6\u7cfb\u7edf         Inode    \u5df2\u7528(I)   \u53ef\u7528(I)   \u5df2\u7528(I)%  \u6302\u8f7d\u70b9\n/dev/vda1        50M     162K     50M        1%       /\n")),(0,a.kt)("p",null,"\u7d22\u5f15\u8282\u70b9\u7684\u5bb9\u91cf\uff0c\uff08\u4e5f\u5c31\u662f Inode \u4e2a\u6570\uff09\u662f\u5728\u683c\u5f0f\u5316\u78c1\u76d8\u65f6\u8bbe\u5b9a\u597d\u7684\uff0c\u4e00\u822c\u7531\u683c\u5f0f\u5316\u5de5\u5177\u81ea\u52a8\u751f\u6210\u3002\u5f53\u53d1\u73b0\u7d22\u5f15\u8282\u70b9\u7a7a\u95f4\u4e0d\u8db3\uff0c\u4f46\u78c1\u76d8\u7a7a\u95f4\u5145\u8db3\u65f6\uff0c\u5f88\u53ef\u80fd\u5c31\u662f\u8fc7\u591a\u5c0f\u6587\u4ef6\u5bfc\u81f4\u7684\u3002"),(0,a.kt)("p",null,"\u6240\u4ee5\uff0c\u4e00\u822c\u6765\u8bf4\uff0c\u5220\u9664\u8fd9\u4e9b\u5c0f\u6587\u4ef6\uff0c\u6216\u8005\u628a\u5b83\u4eec\u79fb\u52a8\u5230\u7d22\u5f15\u8282\u70b9\u5145\u8db3\u7684\u5176\u4ed6\u78c1\u76d8\u4e2d\uff0c\u5c31\u53ef\u4ee5\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u3002"),(0,a.kt)("h3",{id:"\u7f13\u5b58"},(0,a.kt)("strong",{parentName:"h3"},"\u7f13\u5b58")),(0,a.kt)("p",null,"\u53ef\u4ee5\u7528 free \u6216 vmstat\uff0c\u6765\u89c2\u5bdf\u9875\u7f13\u5b58\u7684\u5927\u5c0f\u3002free \u8f93\u51fa\u7684 Cache\uff0c\u662f\u9875\u7f13\u5b58\u548c\u53ef\u56de\u6536 Slab \u7f13\u5b58\u7684\u548c\uff0c\u4f60\u53ef\u4ee5\u4ece proc/meminfo \uff0c\u76f4\u63a5\u5f97\u5230\u5b83\u4eec\u7684\u5927\u5c0f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'cat /proc/meminfo | grep -E "SReclaimable|Cached"\nCached:          2014100 kB\nSwapCached:         5316 kB\nSReclaimable:     216128 kB\n')),(0,a.kt)("p",null,"\u8bdd\u8bf4\u56de\u6765\uff0c\u6587\u4ef6\u7cfb\u7edf\u4e2d\u7684\u76ee\u5f55\u9879\u548c\u7d22\u5f15\u8282\u70b9\u7f13\u5b58\uff0c\u53c8\u8be5\u5982\u4f55\u89c2\u5bdf\u5462\uff1f"),(0,a.kt)("p",null,"\u5b9e\u9645\u4e0a\uff0c\u5185\u6838\u4f7f\u7528 Slab \u673a\u5236\uff0c\u7ba1\u7406\u76ee\u5f55\u9879\u548c\u7d22\u5f15\u8282\u70b9\u7684\u7f13\u5b58\u3002/proc/meminfo \u53ea\u7ed9\u51fa\u4e86 Slab \u7684\u6574\u4f53\u5927\u5c0f\uff0c\u5177\u4f53\u5230\u6bcf\u4e00\u79cd Slab \u7f13\u5b58\uff0c\u8fd8\u8981\u67e5\u770b /proc/slabinfo \u8fd9\u4e2a\u6587\u4ef6\u3002"),(0,a.kt)("p",null,"\u6bd4\u5982\uff0c\u8fd0\u884c\u4e0b\u9762\u7684\u547d\u4ee4\uff0c\u4f60\u5c31\u53ef\u4ee5\u5f97\u5230\uff0c\u6240\u6709\u76ee\u5f55\u9879\u548c\u5404\u79cd\u6587\u4ef6\u7cfb\u7edf\u7d22\u5f15\u8282\u70b9\u7684\u7f13\u5b58\u60c5\u51b5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# name <active_objs> <num_objs> <objsize> <objperslab> <pagesperslab> : tunab\ncat /proc/slabinfo | grep -E '^#|dentry|inode'\n# name            <active_objs> <num_objs> <objsize> <objperslab> <pagesperslab> : tunables <limit> <batchcount> <sharedfactor> : slabdata <active_slabs> <num_slabs> <sharedavail>\novl_inode             66     66    736   22    4 : tunables    0    0    0 : slabdata      3      3      0\nfuse_inode             0      0    832   19    4 : tunables    0    0    0 : slabdata      0      0      0\nxfs_inode         100470 110736   1024   16    4 : tunables    0    0    0 : slabdata   6921   6921      0\nmqueue_inode_cache     64     64   1024   16    4 : tunables    0    0    0 : slabdata      4      4      0\nhugetlbfs_inode_cache     48     48    680   24    4 : tunables    0    0    0 : slabdata      2      2      0\nsock_inode_cache    4581   4807    704   23    4 : tunables    0    0    0 : slabdata    209    209      0\nshmem_inode_cache   1816   2541    760   21    4 : tunables    0    0    0 : slabdata    121    121      0\nproc_inode_cache   10210  13024    728   22    4 : tunables    0    0    0 : slabdata    592    592      0\ninode_cache        36498  38832    656   24    4 : tunables    0    0    0 : slabdata   1618   1618      0\ndentry            150086 183204    192   21    1 : tunables    0    0    0 : slabdata   8724   8724      0\n")),(0,a.kt)("p",null,"\u8fd9\u4e2a\u754c\u9762\u4e2d\uff0cdentry \u884c\u8868\u793a\u76ee\u5f55\u9879\u7f13\u5b58\uff0cinode_cache \u884c\uff0c\u8868\u793a VFS \u7d22\u5f15\u8282\u70b9\u7f13\u5b58\uff0c\u5176 \u4f59\u7684\u5219\u662f\u5404\u79cd\u6587\u4ef6\u7cfb\u7edf\u7684\u7d22\u5f15\u8282\u70b9\u7f13\u5b58\u3002"),(0,a.kt)("p",null,"/proc/slabinfo \u7684\u5217\u6bd4\u8f83\u591a\uff0c\u5177\u4f53\u542b\u4e49\u53ef\u4ee5\u67e5\u8be2 man slabinfo\u3002\u5728\u5b9e\u9645\u6027\u80fd\u5206\u6790\u4e2d\uff0c\u6211\u4eec\u66f4\u5e38\u4f7f\u7528 slabtop \uff0c\u6765\u627e\u5230\u5360\u7528\u5185\u5b58\u6700\u591a\u7684\u7f13\u5b58\u7c7b\u578b\u3002"),(0,a.kt)("p",null,"\u6bd4\u5982\uff0c\u4e0b\u9762\u5c31\u662f\u8fd0\u884c slabtop \u5f97\u5230\u7684\u7ed3\u679c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u6309\u4e0b c \u6309\u7167\u7f13\u5b58\u5927\u5c0f\u6392\u5e8f\uff0c\u6309\u4e0b a \u6309\u7167\u6d3b\u8dc3\u5bf9\u8c61\u6570\u6392\u5e8f \nslabtop\nActive / Total Objects (% used)    : 991123 / 1087653 (91.1%)\n Active / Total Slabs (% used)      : 40627 / 40627 (100.0%)\n Active / Total Caches (% used)     : 103 / 138 (74.6%)\n Active / Total Size (% used)       : 329426.37K / 371563.66K (88.7%)\n Minimum / Average / Maximum Object : 0.01K / 0.34K / 8.00K\n\n OBJS  ACTIVE   USE OBJ SIZE  SLABS OBJ/SLAB CACHE SIZE    NAME                   \n183204 150026   81%    0.19K   8724      21       34896K    dentry\n 38832  36498   93%    0.64K   1618      24       25888K    inode_cache\n....\n  6174   6009   97%    0.19K   294      21       1176K    cred_jar\n  6066   5878   96%    0.44K   337      18       2696K    xfrm_dst_cache\n  5950   5950   100%   0.02K   35      170      140K     avtab_node\n  4807   4581   95%    0.69K   209      23       3344K    sock_inode_cache\n  3948   3812   96%    1.12K   141      28       4512K    signal_cache\n  3744   3680   98%    0.25K   234      16       936K     skbuff_head_cache\n  3634   3634   100%   0.09K   79      46       316K     trace_event_file\n")),(0,a.kt)("p",null,"\u4ece\u8fd9\u4e2a\u7ed3\u679c\u4f60\u53ef\u4ee5\u770b\u5230\uff0c\u5728\u6211\u7684\u7cfb\u7edf\u4e2d\uff0c\u76ee\u5f55\u9879\uff08dentry\uff09\u548c\u7d22\u5f15\u8282\u70b9\uff08inode_cache\uff09\u5360\u7528\u4e86\u6700\u591a\u7684 Slab \u7f13\u5b58\u3002\u4e0d \u8fc7\u5b83\u4eec\u5360\u7528\u7684\u5185\u5b58\u5176\u5b9e\u5e76\u4e0d\u5927\uff0c\u52a0\u8d77\u6765\u4e5f\u53ea\u6709 60MB \u5de6\u53f3\u3002"),(0,a.kt)("h3",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,a.kt)("p",null,"\u6587\u4ef6\u7cfb\u7edf\uff0c\u662f\u5bf9\u5b58\u50a8\u8bbe\u5907\u4e0a\u7684\u6587\u4ef6\uff0c\u8fdb\u884c\u7ec4\u7ec7\u7ba1\u7406\u7684\u4e00\u79cd\u673a\u5236\u3002\u4e3a\u4e86\u652f\u6301\u5404\u7c7b\u4e0d\u540c\u7684\u6587\u4ef6\u7cfb\u7edf\uff0cLinux \u5728\u5404\u79cd\u6587\u4ef6\u7cfb\u7edf\u5b9e\u73b0\u4e0a\uff0c\u62bd\u8c61\u4e86\u4e00\u5c42\u865a\u62df\u6587\u4ef6\u7cfb\u7edf(VFS)\u3002"),(0,a.kt)("p",null,"VFS \u5b9a\u4e49\u4e86\u4e00\u7ec4\u6240\u6709\u6587\u4ef6\u7cfb\u7edf\u90fd\u652f\u6301\u7684\u6570\u636e\u7ed3\u6784\u548c\u6807\u51c6\u63a5\u53e3\u3002\u8fd9\u6837\uff0c\u7528\u6237\u8fdb\u7a0b\u548c\u5185\u6838\u4e2d\u7684\u5176\u4ed6\u5b50\u7cfb\u7edf\uff0c\u5c31\u53ea\u9700\u8981\u8ddf VFS \u63d0\u4f9b\u7684\u7edf\u4e00\u63a5\u53e3\u8fdb\u884c\u4ea4\u4e92\u3002"),(0,a.kt)("p",null,"\u4e3a\u4e86\u964d\u4f4e\u6162\u901f\u78c1\u76d8\u5bf9\u6027\u80fd\u7684\u5f71\u54cd\uff0c\u6587\u4ef6\u7cfb\u7edf\u53c8\u901a\u8fc7\u9875\u7f13\u5b58\u3001\u76ee\u5f55\u9879\u7f13\u5b58\u4ee5\u53ca\u7d22\u5f15\u8282\u70b9\u7f13\u5b58\uff0c\u7f13\u548c\u78c1\u76d8\u5ef6\u8fdf\u5bf9\u5e94\u7528\u7a0b\u5e8f\u7684\u5f71\u54cd\u3002"))}p.isMDXComponent=!0}}]);