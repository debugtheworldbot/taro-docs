"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[42805],{79874:function(t,e,n){n.d(e,{Zo:function(){return o},kt:function(){return s}});var l=n(93106);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function k(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=l.createContext({}),i=function(t){var e=l.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):k(k({},e),t)),n},o=function(t){var e=i(t.components);return l.createElement(u.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},p=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,u=t.parentName,o=d(t,["components","mdxType","originalType","parentName"]),p=i(n),s=r,m=p["".concat(u,".").concat(s)]||p[s]||c[s]||a;return n?l.createElement(m,k(k({ref:e},o),{},{components:n})):l.createElement(m,k({ref:e},o))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,k=new Array(a);k[0]=p;var d={};for(var u in e)hasOwnProperty.call(e,u)&&(d[u]=e[u]);d.originalType=t,d.mdxType="string"==typeof t?t:r,k[1]=d;for(var i=2;i<a;i++)k[i]=n[i];return l.createElement.apply(null,k)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},55077:function(t,e,n){n.r(e),n.d(e,{assets:function(){return i},contentTitle:function(){return d},default:function(){return p},frontMatter:function(){return k},metadata:function(){return u},toc:function(){return o}});n(93106);var l=n(79874);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},r.apply(this,arguments)}function a(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const k={title:"LivePusher",sidebar_label:"LivePusher"},d=void 0,u={unversionedId:"components/media/live-pusher",id:"version-2.x/components/media/live-pusher",title:"LivePusher",description:"\u5b9e\u65f6\u97f3\u89c6\u9891\u5f55\u5236\u3002\u9700\u8981\u7528\u6237\u6388\u6743 scope.camera\u3001scope.record",source:"@site/versioned_docs/version-2.x/components/media/live-pusher.md",sourceDirName:"components/media",slug:"/components/media/live-pusher",permalink:"/taro-docs/en/docs/2.x/components/media/live-pusher",editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-2.x/components/media/live-pusher.md",tags:[],version:"2.x",frontMatter:{title:"LivePusher",sidebar_label:"LivePusher"}},i={},o=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"LivePusherProps",id:"livepusherprops",level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:3},{value:"orientation",id:"orientation",level:3},{value:"localMirror",id:"localmirror",level:3},{value:"audioReverbType",id:"audioreverbtype",level:3},{value:"audioVolumeType",id:"audiovolumetype",level:3},{value:"onStateChangeEventDetail",id:"onstatechangeeventdetail",level:3},{value:"onNetstatusEventDetail",id:"onnetstatuseventdetail",level:3},{value:"onErrorEventDetail",id:"onerroreventdetail",level:3},{value:"onBgmProgressEventDetail",id:"onbgmprogresseventdetail",level:3},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",level:2}],c={toc:o};function p(t){var{components:e}=t,n=a(t,["components"]);return(0,l.kt)("wrapper",r({},c,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u5b9e\u65f6\u97f3\u89c6\u9891\u5f55\u5236\u3002\u9700\u8981\u7528\u6237\u6388\u6743 scope.camera\u3001scope.record"),(0,l.kt)("p",null,"\u9700\u8981\u5148\u901a\u8fc7\u7c7b\u76ee\u5ba1\u6838\uff0c\u518d\u5728\u5c0f\u7a0b\u5e8f\u7ba1\u7406\u540e\u53f0\uff0c\u300c\u5f00\u53d1\u300d-\u300c\u63a5\u53e3\u8bbe\u7f6e\u300d\u4e2d\u81ea\u52a9\u5f00\u901a\u8be5\u7ec4\u4ef6\u6743\u9650\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"}),"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("h2",r({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"ComponentType<LivePusherProps>\n")),(0,l.kt)("h2",r({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"class App extends Components {\n  render () {\n    return (\n      <LivePusher url='url' mode='RTC' autopush  />\n    )\n  }\n}\n")),(0,l.kt)("h2",r({},{id:"livepusherprops"}),"LivePusherProps"),(0,l.kt)("p",null,"\u5b9e\u65f6\u97f3\u89c6\u9891\u5f55\u5236\u3002\n\u9700\u8981\u7528\u6237\u6388\u6743 scope.camera\u3001scope.record\n\u6682\u53ea\u9488\u5bf9\u56fd\u5185\u4e3b\u4f53\u5982\u4e0b\u7c7b\u76ee\u7684\u5c0f\u7a0b\u5e8f\u5f00\u653e\uff0c\u9700\u8981\u5148\u901a\u8fc7\u7c7b\u76ee\u5ba1\u6838\uff0c\u518d\u5728\u5c0f\u7a0b\u5e8f\u7ba1\u7406\u540e\u53f0\uff0c\u201c\u8bbe\u7f6e\u201d-\u201c\u63a5\u53e3\u8bbe\u7f6e\u201d\u4e2d\u81ea\u52a9\u5f00\u901a\u8be5\u7ec4\u4ef6\u6743\u9650\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"url"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u63a8\u6d41\u5730\u5740\u3002\u76ee\u524d\u4ec5\u652f\u6301 rtmp \u683c\u5f0f")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"mode"),(0,l.kt)("td",null,(0,l.kt)("code",null,'"SD" | "HD" | "FHD" | "RTC"')),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,'"RTC"')),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"SD\uff08\u6807\u6e05\uff09, HD\uff08\u9ad8\u6e05\uff09, FHD\uff08\u8d85\u6e05\uff09, RTC\uff08\u5b9e\u65f6\u901a\u8bdd\uff09")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"autopush"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"false")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u81ea\u52a8\u63a8\u6d41")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"muted"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"false")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u662f\u5426\u9759\u97f3\u3002\u5373\u5c06\u5e9f\u5f03\uff0c\u53ef\u7528 enable-mic \u66ff\u4ee3",(0,l.kt)("br",null),(0,l.kt)("strong",null,"\u4e0d\u63a8\u8350\u4f7f\u7528"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"enableCamera"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"true")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u5f00\u542f\u6444\u50cf\u5934")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"autoFocus"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"true")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u81ea\u52a8\u805a\u96c6")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"orientation"),(0,l.kt)("td",null,(0,l.kt)("code",null,'"vertical" | "horizontal"')),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,'"vertical"')),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u753b\u9762\u65b9\u5411")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"beauty"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"0")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u7f8e\u989c\uff0c\u53d6\u503c\u8303\u56f4 0-9 \uff0c0 \u8868\u793a\u5173\u95ed")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"whiteness"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"0")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u7f8e\u767d\uff0c\u53d6\u503c\u8303\u56f4 0-9 \uff0c0 \u8868\u793a\u5173\u95ed")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"aspect"),(0,l.kt)("td",null,(0,l.kt)("code",null,'"9:16" | "3:4"')),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,'"9:16"')),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u5bbd\u9ad8\u6bd4\uff0c\u53ef\u9009\u503c\u6709 3:4, 9:16")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"minBitrate"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"200")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u6700\u5c0f\u7801\u7387")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"maxBitrate"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"1000")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u6700\u5927\u7801\u7387")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"audioQuality"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,'"high"')),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u9ad8\u97f3\u8d28(48KHz)\u6216\u4f4e\u97f3\u8d28(16KHz)\uff0c\u503c\u4e3ahigh, low")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"waitingImage"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u8fdb\u5165\u540e\u53f0\u65f6\u63a8\u6d41\u7684\u7b49\u5f85\u753b\u9762")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"waitingImageHash"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u7b49\u5f85\u753b\u9762\u8d44\u6e90\u7684MD5\u503c")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"zoom"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"false")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u8c03\u6574\u7126\u8ddd")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"devicePosition"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,'"front"')),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u524d\u7f6e\u6216\u540e\u7f6e\uff0c\u503c\u4e3afront, back")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"backgroundMute"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"false")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u8fdb\u5165\u540e\u53f0\u65f6\u662f\u5426\u9759\u97f3")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"mirror"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"false")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u8bbe\u7f6e\u63a8\u6d41\u753b\u9762\u662f\u5426\u955c\u50cf\uff0c\u4ea7\u751f\u7684\u6548\u679c\u5728 LivePlayer \u53cd\u5e94\u5230",(0,l.kt)("br",null),(0,l.kt)("strong",null,"\u4e0d\u63a8\u8350\u4f7f\u7528"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"remoteMirror"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"false")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u8bbe\u7f6e\u63a8\u6d41\u753b\u9762\u662f\u5426\u955c\u50cf\uff0c\u4ea7\u751f\u7684\u6548\u679c\u5728 LivePlayer \u53cd\u5e94\u5230",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("strong",null,"Note:")," \u540c mirror \u5c5e\u6027\uff0c\u540e\u7eed mirror \u5c06\u5e9f\u5f03")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"localMirror"),(0,l.kt)("td",null,(0,l.kt)("code",null,'"auto" | "enable" | "disable"')),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,'"auto"')),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u63a7\u5236\u672c\u5730\u9884\u89c8\u753b\u9762\u662f\u5426\u955c\u50cf")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"audioReverbType"),(0,l.kt)("td",null,(0,l.kt)("code",null,"0 | 1 | 2 | 3 | 4 | 5 | 6 | 7")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"0")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u97f3\u9891\u6df7\u54cd\u7c7b\u578b")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"enableMic"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"true")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u5f00\u542f\u6216\u5173\u95ed\u9ea6\u514b\u98ce")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"enableAgc"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"false")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u662f\u5426\u5f00\u542f\u97f3\u9891\u81ea\u52a8\u589e\u76ca")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"enableAns"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"false")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u662f\u5426\u5f00\u542f\u97f3\u9891\u566a\u58f0\u6291\u5236")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"audioVolumeType"),(0,l.kt)("td",null,(0,l.kt)("code",null,'"media" | "voicecall"')),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,'"voicecall"')),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u97f3\u91cf\u7c7b\u578b")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"videoWidth"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"360")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u4e0a\u63a8\u7684\u89c6\u9891\u6d41\u7684\u5206\u8fa8\u7387\u5bbd\u5ea6")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"videoHeight"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"640")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u4e0a\u63a8\u7684\u89c6\u9891\u6d41\u7684\u5206\u8fa8\u7387\u9ad8\u5ea6")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onStateChange"),(0,l.kt)("td",null,(0,l.kt)("code",null,"BaseEventOrigFunction<onStateChangeEventDetail>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u72b6\u6001\u53d8\u5316\u4e8b\u4ef6\uff0cdetail = ","{code}")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onNetstatus"),(0,l.kt)("td",null,(0,l.kt)("code",null,"BaseEventOrigFunction<onNetstatusEventDetail>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u7f51\u7edc\u72b6\u6001\u901a\u77e5\uff0cdetail = ","{info}")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onError"),(0,l.kt)("td",null,(0,l.kt)("code",null,"BaseEventOrigFunction<onErrorEventDetail>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u6e32\u67d3\u9519\u8bef\u4e8b\u4ef6\uff0cdetail = ","{errMsg, errCode}")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onBgmStart"),(0,l.kt)("td",null,(0,l.kt)("code",null,"BaseEventOrigFunction<any>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u80cc\u666f\u97f3\u5f00\u59cb\u64ad\u653e\u65f6\u89e6\u53d1")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onBgmProgress"),(0,l.kt)("td",null,(0,l.kt)("code",null,"BaseEventOrigFunction<onBgmProgressEventDetail>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u80cc\u666f\u97f3\u8fdb\u5ea6\u53d8\u5316\u65f6\u89e6\u53d1\uff0cdetail = ","{progress, duration}")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onBgmComplete"),(0,l.kt)("td",null,(0,l.kt)("code",null,"BaseEventOrigFunction<any>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u80cc\u666f\u97f3\u64ad\u653e\u5b8c\u6210\u65f6\u89e6\u53d1")))),(0,l.kt)("h3",r({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"LivePusherProps.url"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"LivePusherProps.mode"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"LivePusherProps.autopush"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"LivePusherProps.muted"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"LivePusherProps.enableCamera"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"LivePusherProps.autoFocus"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"LivePusherProps.orientation"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"LivePusherProps.beauty"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"LivePusherProps.whiteness"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"LivePusherProps.aspect"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"LivePusherProps.minBitrate"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"LivePusherProps.maxBitrate"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"LivePusherProps.audioQuality"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"LivePusherProps.waitingImage"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"LivePusherProps.waitingImageHash"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"LivePusherProps.zoom"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"LivePusherProps.devicePosition"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"LivePusherProps.backgroundMute"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"LivePusherProps.mirror"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"LivePusherProps.remoteMirror"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"LivePusherProps.localMirror"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"LivePusherProps.audioReverbType"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"LivePusherProps.enableMic"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"LivePusherProps.enableAgc"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"LivePusherProps.enableAns"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"LivePusherProps.audioVolumeType"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"LivePusherProps.videoWidth"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"LivePusherProps.videoHeight"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"LivePusherProps.onStateChange"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"LivePusherProps.onNetstatus"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"LivePusherProps.onError"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"LivePusherProps.onBgmStart"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"LivePusherProps.onBgmProgress"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"LivePusherProps.onBgmComplete"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))))),(0,l.kt)("h3",r({},{id:"orientation"}),"orientation"),(0,l.kt)("p",null,"orientation \u7684\u5408\u6cd5\u503c"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"vertical"),(0,l.kt)("td",null,"\u7ad6\u76f4")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"horizontal"),(0,l.kt)("td",null,"\u6c34\u5e73")))),(0,l.kt)("h3",r({},{id:"localmirror"}),"localMirror"),(0,l.kt)("p",null,"localMirror \u7684\u5408\u6cd5\u503c"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"auto"),(0,l.kt)("td",null,"\u524d\u7f6e\u6444\u50cf\u5934\u955c\u50cf\uff0c\u540e\u7f6e\u6444\u50cf\u5934\u4e0d\u955c\u50cf")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"enable"),(0,l.kt)("td",null,"\u524d\u540e\u7f6e\u6444\u50cf\u5934\u5747\u955c\u50cf")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"disable"),(0,l.kt)("td",null,"\u524d\u540e\u7f6e\u6444\u50cf\u5934\u5747\u4e0d\u955c\u50cf")))),(0,l.kt)("h3",r({},{id:"audioreverbtype"}),"audioReverbType"),(0,l.kt)("p",null,"audioReverbType \u7684\u5408\u6cd5\u503c"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"0"),(0,l.kt)("td",null,"\u5173\u95ed")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"1"),(0,l.kt)("td",null,"KTV")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"2"),(0,l.kt)("td",null,"\u5c0f\u623f\u95f4")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"3"),(0,l.kt)("td",null,"\u5927\u4f1a\u5802")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"4"),(0,l.kt)("td",null,"\u4f4e\u6c89")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"5"),(0,l.kt)("td",null,"\u6d2a\u4eae")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"6"),(0,l.kt)("td",null,"\u91d1\u5c5e\u58f0")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"7"),(0,l.kt)("td",null,"\u78c1\u6027")))),(0,l.kt)("h3",r({},{id:"audiovolumetype"}),"audioVolumeType"),(0,l.kt)("p",null,"audioVolumeType \u7684\u5408\u6cd5\u503c"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"media"),(0,l.kt)("td",null,"\u5a92\u4f53\u97f3\u91cf")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"voicecall"),(0,l.kt)("td",null,"\u901a\u8bdd\u97f3\u91cf")))),(0,l.kt)("h3",r({},{id:"onstatechangeeventdetail"}),"onStateChangeEventDetail"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"code"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"\u72b6\u6001\u7801")))),(0,l.kt)("h3",r({},{id:"onnetstatuseventdetail"}),"onNetstatusEventDetail"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"info"),(0,l.kt)("td",null,(0,l.kt)("code",null,"netStatus")),(0,l.kt)("td",null,"\u7f51\u7edc\u72b6\u6001")))),(0,l.kt)("h3",r({},{id:"onerroreventdetail"}),"onErrorEventDetail"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"errMsg"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"\u9519\u8bef\u4fe1\u606f")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"errCode"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string | number")),(0,l.kt)("td",null,"\u9519\u8bef\u7801")))),(0,l.kt)("h3",r({},{id:"onbgmprogresseventdetail"}),"onBgmProgressEventDetail"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"progress"),(0,l.kt)("td",null,(0,l.kt)("code",null,"any")),(0,l.kt)("td",null,"\u8fdb\u5c55")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"duration"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"\u6301\u7eed\u65f6\u95f4")))),(0,l.kt)("h2",r({},{id:"api-\u652f\u6301\u5ea6-1"}),"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"LivePusher"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))))))}p.isMDXComponent=!0}}]);