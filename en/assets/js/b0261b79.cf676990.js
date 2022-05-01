"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[88918],{79874:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(93106);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(r),m=l,k=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(k,c(c({ref:t},s),{},{components:r})):n.createElement(k,c({ref:t},s))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,c=new Array(a);c[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:l,c[1]=o;for(var u=2;u<a;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},22577:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return s}});r(93106);var n=r(79874);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}const c={title:"Taro.startAccelerometer(res)",sidebar_label:"startAccelerometer"},o=void 0,i={unversionedId:"apis/device/accelerometer/startAccelerometer",id:"apis/device/accelerometer/startAccelerometer",title:"Taro.startAccelerometer(res)",description:"Starts listening on acceleration data.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/apis/device/accelerometer/startAccelerometer.md",sourceDirName:"apis/device/accelerometer",slug:"/apis/device/accelerometer/startAccelerometer",permalink:"/taro-docs/en/docs/next/apis/device/accelerometer/startAccelerometer",editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/apis/device/accelerometer/startAccelerometer.md",tags:[],version:"current",frontMatter:{title:"Taro.startAccelerometer(res)",sidebar_label:"startAccelerometer"},sidebar:"API",previous:{title:"stopAccelerometer",permalink:"/taro-docs/en/docs/next/apis/device/accelerometer/stopAccelerometer"},next:{title:"onAccelerometerChange",permalink:"/taro-docs/en/docs/next/apis/device/accelerometer/onAccelerometerChange"}},u={},s=[{value:"Type",id:"type",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Option",id:"option",level:3},{value:"interval",id:"interval",level:3},{value:"Sample Code",id:"sample-code",level:2},{value:"API Support",id:"api-support",level:2}],p={toc:s};function d(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",l({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Starts listening on acceleration data."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",l({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/device/accelerometer/wx.startAccelerometer.html"}),"Reference"))),(0,n.kt)("h2",l({},{id:"type"}),"Type"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"(res?: Option) => Promise<CallbackResult>\n")),(0,n.kt)("h2",l({},{id:"parameters"}),"Parameters"),(0,n.kt)("h3",l({},{id:"option"}),"Option"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",{style:{textAlign:"center"}},"Default"),(0,n.kt)("th",{style:{textAlign:"center"}},"Required"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"interval"),(0,n.kt)("td",null,(0,n.kt)("code",null,'"game" | "ui" | "normal"')),(0,n.kt)("td",{style:{textAlign:"center"}},(0,n.kt)("code",null,'"normal"')),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The execution frequency of the acceleration data listening callback function.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"complete"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: any) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"fail"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: any) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function for a failed API call")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"success"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: Result) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function for a successful API call")))),(0,n.kt)("h3",l({},{id:"interval"}),"interval"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"game"),(0,n.kt)("td",null,(0,n.kt)("code",null,'"game"')),(0,n.kt)("td",null,"The execution interval of the callback for game updates, which is about 20 ms.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"ui"),(0,n.kt)("td",null,(0,n.kt)("code",null,'"ui"')),(0,n.kt)("td",null,"The execution interval of the callback for UI updates, which is about 60 ms.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"normal"),(0,n.kt)("td",null,(0,n.kt)("code",null,'"normal"')),(0,n.kt)("td",null,"The normal callback interval, which is about 200 ms.")))),(0,n.kt)("h2",l({},{id:"sample-code"}),"Sample Code"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"Taro.startAccelerometer({ interval: 'game' })\n")),(0,n.kt)("h2",l({},{id:"api-support"}),"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",l({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",l({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",l({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"center"}),"Taro.startAccelerometer"),(0,n.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}d.isMDXComponent=!0}}]);