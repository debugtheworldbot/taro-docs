"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[11073],{79874:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(93106);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=i(n),m=a,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(k,l(l({ref:t},s),{},{components:n})):r.createElement(k,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},27224:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});n(93106);var r=n(79874);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={title:"Taro.onGyroscopeChange(callback)",sidebar_label:"onGyroscopeChange"},c=void 0,p={unversionedId:"apis/device/gyroscope/onGyroscopeChange",id:"apis/device/gyroscope/onGyroscopeChange",title:"Taro.onGyroscopeChange(callback)",description:"\u76d1\u542c\u9640\u87ba\u4eea\u6570\u636e\u53d8\u5316\u4e8b\u4ef6\u3002\u9891\u7387\u6839\u636e Taro.startGyroscope() \u7684 interval \u53c2\u6570\u3002\u53ef\u4ee5\u4f7f\u7528 Taro.stopGyroscope() \u505c\u6b62\u76d1\u542c\u3002",source:"@site/docs/apis/device/gyroscope/onGyroscopeChange.md",sourceDirName:"apis/device/gyroscope",slug:"/apis/device/gyroscope/onGyroscopeChange",permalink:"/taro-docs/docs/next/apis/device/gyroscope/onGyroscopeChange",editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/apis/device/gyroscope/onGyroscopeChange.md",tags:[],version:"current",frontMatter:{title:"Taro.onGyroscopeChange(callback)",sidebar_label:"onGyroscopeChange"},sidebar:"API",previous:{title:"startGyroscope",permalink:"/taro-docs/docs/next/apis/device/gyroscope/startGyroscope"},next:{title:"offGyroscopeChange",permalink:"/taro-docs/docs/next/apis/device/gyroscope/offGyroscopeChange"}},i={},s=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"Callback",id:"callback",level:3},{value:"CallbackResult",id:"callbackresult",level:3}],u={toc:s};function d(e){var{components:t}=e,l=o(e,["components"]);return(0,r.kt)("wrapper",a({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u76d1\u542c\u9640\u87ba\u4eea\u6570\u636e\u53d8\u5316\u4e8b\u4ef6\u3002\u9891\u7387\u6839\u636e Taro.startGyroscope() \u7684 interval \u53c2\u6570\u3002\u53ef\u4ee5\u4f7f\u7528 Taro.stopGyroscope() \u505c\u6b62\u76d1\u542c\u3002"),(0,r.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,r.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(98548).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"H5",src:n(30304).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,r.kt)("img",{title:"React Native",src:n(38309).Z,className:"icon_platform",width:"25px"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/gyroscope/wx.onGyroscopeChange.html"}),"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("h2",a({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(callback: Callback) => void\n")),(0,r.kt)("h2",a({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"callback"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"Callback")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u9640\u87ba\u4eea\u6570\u636e\u53d8\u5316\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570")))),(0,r.kt)("h3",a({},{id:"callback"}),"Callback"),(0,r.kt)("p",null,"\u9640\u87ba\u4eea\u6570\u636e\u53d8\u5316\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(result: CallbackResult) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"result"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"CallbackResult"))))),(0,r.kt)("h3",a({},{id:"callbackresult"}),"CallbackResult"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"x"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"x \u8f74\u7684\u89d2\u901f\u5ea6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"y"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"y \u8f74\u7684\u89d2\u901f\u5ea6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"z"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"z \u8f74\u7684\u89d2\u901f\u5ea6")))))}d.isMDXComponent=!0},30304:function(e,t,n){t.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},38309:function(e,t,n){t.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},98548:function(e,t,n){t.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);