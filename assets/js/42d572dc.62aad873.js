"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[46333],{79874:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(93106);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(n),d=i,m=f["".concat(p,".").concat(d)]||f[d]||u[d]||a;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},80036:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});n(93106);var r=n(79874);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const o={title:"Taro.getWifiList(option)",sidebar_label:"getWifiList"},l=void 0,p={unversionedId:"apis/device/wifi/getWifiList",id:"version-3.x/apis/device/wifi/getWifiList",title:"Taro.getWifiList(option)",description:"\u8bf7\u6c42\u83b7\u53d6 Wi-Fi \u5217\u8868\u3002\u5728 onGetWifiList \u6ce8\u518c\u7684\u56de\u8c03\u4e2d\u8fd4\u56de wifiList \u6570\u636e\u3002 Android \u8c03\u7528\u524d\u9700\u8981 \u7528\u6237\u6388\u6743 scope.userLocation\u3002",source:"@site/versioned_docs/version-3.x/apis/device/wifi/getWifiList.md",sourceDirName:"apis/device/wifi",slug:"/apis/device/wifi/getWifiList",permalink:"/taro-docs/docs/apis/device/wifi/getWifiList",editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/apis/device/wifi/getWifiList.md",tags:[],version:"3.x",frontMatter:{title:"Taro.getWifiList(option)",sidebar_label:"getWifiList"},sidebar:"API",previous:{title:"offGetWifiList",permalink:"/taro-docs/docs/apis/device/wifi/offGetWifiList"},next:{title:"getConnectedWifi",permalink:"/taro-docs/docs/apis/device/wifi/getConnectedWifi"}},c={},s=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"Option",id:"option",level:3}],u={toc:s};function f(e){var{components:t}=e,o=a(e,["components"]);return(0,r.kt)("wrapper",i({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u8bf7\u6c42\u83b7\u53d6 Wi-Fi \u5217\u8868\u3002\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"onGetWifiList")," \u6ce8\u518c\u7684\u56de\u8c03\u4e2d\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"p"},"wifiList")," \u6570\u636e\u3002 ",(0,r.kt)("strong",{parentName:"p"},"Android \u8c03\u7528\u524d\u9700\u8981 ",(0,r.kt)("a",i({parentName:"strong"},{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html"}),"\u7528\u6237\u6388\u6743")," scope.userLocation\u3002")),(0,r.kt)("p",null,"iOS \u5c06\u8df3\u8f6c\u5230\u7cfb\u7edf\u7684 Wi-Fi \u754c\u9762\uff0cAndroid \u4e0d\u4f1a\u8df3\u8f6c\u3002 iOS 11.0 \u53ca iOS 11.1 \u4e24\u4e2a\u7248\u672c\u56e0\u7cfb\u7edf\u95ee\u9898\uff0c\u8be5\u65b9\u6cd5\u5931\u6548\u3002\u4f46\u5728 iOS 11.2 \u4e2d\u5df2\u4fee\u590d\u3002"),(0,r.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,r.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(98548).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"H5",src:n(30304).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,r.kt)("img",{title:"React Native",src:n(38309).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",i({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.getWifiList.html"}),"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("h2",i({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-tsx"}),"(option?: Option) => Promise<TaroGeneral.WifiError>\n")),(0,r.kt)("h2",i({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",i({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,r.kt)("th",i({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"option"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"Option"))))),(0,r.kt)("h3",i({},{id:"option"}),"Option"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",i({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,r.kt)("th",i({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,r.kt)("th",i({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,r.kt)("th",i({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"complete"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.WifiError) => void")),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"fail"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.WifiError) => void")),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"success"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.WifiError) => void")),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))))}f.isMDXComponent=!0},30304:function(e,t,n){t.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},38309:function(e,t,n){t.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},98548:function(e,t,n){t.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);