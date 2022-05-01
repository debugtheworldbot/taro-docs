"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[48367],{79874:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(93106);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,k=d["".concat(i,".").concat(h)]||d[h]||s[h]||o;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43012:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return c}});n(93106);var r=n(79874);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={title:"Taro.onPageNotFound(callback)",sidebar_label:"onPageNotFound"},p=void 0,i={unversionedId:"apis/base/weapp/app-event/onPageNotFound",id:"apis/base/weapp/app-event/onPageNotFound",title:"Taro.onPageNotFound(callback)",description:"Listens on the event that a page to be opened by the Mini Program does not exist. The callback timing for this event is consistent with that of App.onPageNotFound.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/apis/base/weapp/app-event/onPageNotFound.md",sourceDirName:"apis/base/weapp/app-event",slug:"/apis/base/weapp/app-event/onPageNotFound",permalink:"/taro-docs/en/docs/next/apis/base/weapp/app-event/onPageNotFound",editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/apis/base/weapp/app-event/onPageNotFound.md",tags:[],version:"current",frontMatter:{title:"Taro.onPageNotFound(callback)",sidebar_label:"onPageNotFound"},sidebar:"API",previous:{title:"onThemeChange",permalink:"/taro-docs/en/docs/next/apis/base/weapp/app-event/onThemeChange"},next:{title:"onError",permalink:"/taro-docs/en/docs/next/apis/base/weapp/app-event/onError"}},u={},c=[{value:"Type",id:"type",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Result",id:"result",level:3},{value:"Callback",id:"callback",level:3},{value:"API Support",id:"api-support",level:2}],s={toc:c};function d(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",a({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Listens on the event that a page to be opened by the Mini Program does not exist. The callback timing for this event is consistent with that of ",(0,r.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/reference/api/App.html#onpagenotfoundobject-object"}),(0,r.kt)("inlineCode",{parentName:"a"},"App.onPageNotFound")),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Developers can implement page redirection during callback only when the callback processing is synchronous. This approach is invalid for asynchronous processing (such as the asynchronous execution of setTimeout)."),(0,r.kt)("li",{parentName:"ul"},"If the developer neither calls the ",(0,r.kt)("a",a({parentName:"li"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/base/app/app-event/wx.onPageNotFound.html"}),"Taro.onPageNotFound")," for listening nor declares App.onPageNotFound, when the redirected page does not exist, the WeChat app's native 404 page is pushed."),(0,r.kt)("li",{parentName:"ul"},"If the callback redirects to another page that does not exist, the WeChat app's native 404 page is pushed and the API is not called back again.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/base/app/app-event/wx.onPageNotFound.html"}),"Reference"))),(0,r.kt)("h2",a({},{id:"type"}),"Type"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(callback: Callback) => void\n")),(0,r.kt)("h2",a({},{id:"parameters"}),"Parameters"),(0,r.kt)("h3",a({},{id:"result"}),"Result"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"isEntryPage"),(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",null,"Indicates whether this is the first page for this launch (for example, from sharing and other entries, the first page is the shared page configured by the developer).")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"path"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"The path to the nonexistent page")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"query"),(0,r.kt)("td",null,(0,r.kt)("code",null,"Record<string, any>")),(0,r.kt)("td",null,"The query parameter for the nonexistent page")))),(0,r.kt)("h3",a({},{id:"callback"}),"Callback"),(0,r.kt)("p",null,"The callback function for the event that a page to be opened by the Mini Program does not exist."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(res: Result) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"res"),(0,r.kt)("td",null,(0,r.kt)("code",null,"Result"))))),(0,r.kt)("h2",a({},{id:"api-support"}),"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"Taro.onPageNotFound"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"})),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}))))))}d.isMDXComponent=!0}}]);