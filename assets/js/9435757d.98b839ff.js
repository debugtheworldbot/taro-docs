"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[80611],{79874:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return g}});var a=n(93106);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),m=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=m(t.components);return a.createElement(o.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),u=m(n),g=r,k=u["".concat(o,".").concat(g)]||u[g]||c[g]||l;return n?a.createElement(k,i(i({ref:e},d),{},{components:n})):a.createElement(k,i({ref:e},d))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=u;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},68199:function(t,e,n){n.d(e,{Z:function(){return l}});var a=n(93106);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},r.apply(this,arguments)}function l({children:t,hidden:e,className:n}){return a.createElement("div",r({role:"tabpanel"},{hidden:e,className:n}),t)}},93261:function(t,e,n){n.d(e,{Z:function(){return d}});var a=n(93106),r=n(69938),l=n(3132),i=n(26679),p="tabItem_JzMF";function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},o.apply(this,arguments)}function m(t){var e,n;const{lazy:r,block:m,defaultValue:d,values:c,groupId:u,className:g}=t,k=a.Children.map(t.children,(t=>{if((0,a.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),s=null!=c?c:k.map((({props:{value:t,label:e,attributes:n}})=>({value:t,label:e,attributes:n}))),N=(0,l.lx)(s,((t,e)=>t.value===e.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var b;const f=null===d?d:null!==(b=null!=d?d:null===(e=k.find((t=>t.props.default)))||void 0===e?void 0:e.props.value)&&void 0!==b?b:null===(n=k[0])||void 0===n?void 0:n.props.value;if(null!==f&&!s.some((t=>t.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${s.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:h}=(0,l.UB)(),[y,w]=(0,a.useState)(f),P=[],{blockElementScrollPositionUntilNextRender:x}=(0,l.o5)();if(null!=u){const t=v[u];null!=t&&t!==y&&s.some((e=>e.value===t))&&w(t)}const O=t=>{const e=t.currentTarget,n=P.indexOf(e),a=s[n].value;a!==y&&(x(e),w(a),null!=u&&h(u,a))},E=t=>{let e=null;switch(t.key){case"ArrowRight":{const n=P.indexOf(t.currentTarget)+1;e=P[n]||P[0];break}case"ArrowLeft":{const n=P.indexOf(t.currentTarget)-1;e=P[n]||P[P.length-1];break}}null==e||e.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":m},g)},s.map((({value:t,label:e,attributes:n})=>a.createElement("li",o({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:t=>P.push(t),onKeyDown:E,onFocus:O,onClick:O},n,{className:(0,i.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":y===t})}),null!=e?e:t)))),r?(0,a.cloneElement)(k.filter((t=>t.props.value===y))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},k.map(((t,e)=>(0,a.cloneElement)(t,{key:e,hidden:t.props.value!==y})))))}function d(t){const e=(0,r.Z)();return a.createElement(m,o({key:String(e)},t))}},79125:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return m},default:function(){return k},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return u}});n(93106);var a=n(79874),r=n(93261),l=n(68199);function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},i.apply(this,arguments)}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const o={title:"Image",sidebar_label:"Image"},m=void 0,d={unversionedId:"components/media/image",id:"version-3.x/components/media/image",title:"Image",description:"\u56fe\u7247\u3002\u652f\u6301 JPG\u3001PNG\u3001SVG\u3001WEBP\u3001GIF \u7b49\u683c\u5f0f\u4ee5\u53ca\u4e91\u6587\u4ef6ID\u3002",source:"@site/versioned_docs/version-3.x/components/media/image.md",sourceDirName:"components/media",slug:"/components/media/image",permalink:"/taro-docs/docs/components/media/image",editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/components/media/image.md",tags:[],version:"3.x",frontMatter:{title:"Image",sidebar_label:"Image"},sidebar:"components",previous:{title:"Audio",permalink:"/taro-docs/docs/components/media/audio"},next:{title:"LivePlayer",permalink:"/taro-docs/docs/components/media/live-player"}},c={},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"ImageProps",id:"imageprops",level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:3},{value:"Mode",id:"mode",level:3},{value:"onErrorEventDetail",id:"onerroreventdetail",level:3},{value:"onLoadEventDetail",id:"onloadeventdetail",level:3}],g={toc:u};function k(t){var{components:e}=t,o=p(t,["components"]);return(0,a.kt)("wrapper",i({},g,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u56fe\u7247\u3002\u652f\u6301 JPG\u3001PNG\u3001SVG\u3001WEBP\u3001GIF \u7b49\u683c\u5f0f\u4ee5\u53ca\u4e91\u6587\u4ef6ID\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," \u4e3a\u5b9e\u73b0\u5c0f\u7a0b\u5e8f\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"mode")," \u7279\u6027\uff0c\u5728 H5 \u7ec4\u4ef6\u4e2d\u4f7f\u7528\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"div")," \u5bb9\u5668\u6765\u5bf9\u5185\u90e8\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"img")," \u8fdb\u884c\u5c55\u793a\u533a\u57df\u7684\u88c1\u526a\uff0c\u56e0\u6b64\u8bf7\u52ff\u4f7f\u7528\u5143\u7d20\u9009\u62e9\u5668\u6765\u91cd\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"img")," \u7684\u6837\u5f0f\uff01"),(0,a.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,a.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(98548).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"\u767e\u5ea6\u5c0f\u7a0b\u5e8f",src:n(92126).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f",src:n(21349).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f",src:n(89598).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"H5",src:n(30304).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"React Native",src:n(38309).Z,className:"icon_platform",width:"25px"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",i({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/image.html"}),"\u53c2\u8003\u6587\u6863"))),(0,a.kt)("h2",i({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-tsx"}),"ComponentType<ImageProps>\n")),(0,a.kt)("h2",i({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)(r.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"React",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-tsx"}),"export default class PageView extends Component {\n  constructor() {\n    super(...arguments)\n  }\n\n  render() {\n    return (\n      <View className='components-page'>\n        <Image\n          style='width: 300px;height: 100px;background: #fff;'\n          src='nerv_logo.png'\n        />\n        <Image\n          style='width: 300px;height: 100px;background: #fff;'\n          src='https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67'\n        />\n      </View>\n    )\n  }\n}\n"))),(0,a.kt)(l.Z,{value:"Vue",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-html"}),'<template>\n  <view class="components-page">\n    <image\n      style="width: 300px;height: 100px;background: #fff;"\n      src="nerv_logo.png"\n    />\n    <image\n      style="width: 300px;height: 100px;background: #fff;"\n      src="https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67"\n    />\n  </view>\n</template>\n')))),(0,a.kt)("h2",i({},{id:"imageprops"}),"ImageProps"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",i({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",i({parentName:"tr"},{align:"center"}),"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",i({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,a.kt)("th",i({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"src"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u662f"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u56fe\u7247\u8d44\u6e90\u5730\u5740")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"mode"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"keyof Mode")),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},'"scaleToFill"')),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u56fe\u7247\u88c1\u526a\u3001\u7f29\u653e\u7684\u6a21\u5f0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"webp"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"false")),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u4e0d\u89e3\u6790 webP \u683c\u5f0f\uff0c\u53ea\u652f\u6301\u7f51\u7edc\u8d44\u6e90")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"svg"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"false")),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u4e0d\u89e3\u6790 svg \u683c\u5f0f\uff0csvg \u56fe\u7247\u53ea\u652f\u6301 aspectFit")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"lazyLoad"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"false")),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u56fe\u7247\u61d2\u52a0\u8f7d\u3002\u53ea\u9488\u5bf9 page \u4e0e scroll-view \u4e0b\u7684 image \u6709\u6548")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"showMenuByLongpress"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"false")),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u5f00\u542f\u957f\u6309\u56fe\u7247\u663e\u793a\u8bc6\u522b\u5c0f\u7a0b\u5e8f\u7801\u83dc\u5355")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"onError"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CommonEventFunction<onErrorEventDetail>")),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u5f53\u9519\u8bef\u53d1\u751f\u65f6\uff0c\u53d1\u5e03\u5230 AppService \u7684\u4e8b\u4ef6\u540d\uff0c\u4e8b\u4ef6\u5bf9\u8c61")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"onLoad"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CommonEventFunction<onLoadEventDetail>")),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u5f53\u56fe\u7247\u8f7d\u5165\u5b8c\u6bd5\u65f6\uff0c\u53d1\u5e03\u5230 AppService \u7684\u4e8b\u4ef6\u540d\uff0c\u4e8b\u4ef6\u5bf9\u8c61")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"imgProps"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"ImgHTMLAttributes<HTMLImageElement>")),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u4e3a img \u6807\u7b7e\u989d\u5916\u589e\u52a0\u7684\u5c5e\u6027")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"nativeProps"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Record<string, unknown>")),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u7528\u4e8e\u900f\u4f20 ",(0,a.kt)("inlineCode",{parentName:"td"},"WebComponents")," \u4e0a\u7684\u5c5e\u6027\u5230\u5185\u90e8 H5 \u6807\u7b7e\u4e0a")))),(0,a.kt)("h3",i({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:"center"}),"API"),(0,a.kt)("th",i({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",i({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",i({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",i({parentName:"tr"},{align:"center"}),"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",i({parentName:"tr"},{align:"center"}),"H5"),(0,a.kt)("th",i({parentName:"tr"},{align:"center"}),"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"ImageProps.src"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"ImageProps.mode"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f(\u90e8\u5206\u652f\u6301 scaleToFill, aspectFit, aspectFill, widthFix)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"ImageProps.webp"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"ImageProps.svg"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"ImageProps.lazyLoad"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"ImageProps.showMenuByLongpress"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"ImageProps.onError"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"ImageProps.onLoad"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"ImageProps.imgProps"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"ImageProps.nativeProps"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}))))),(0,a.kt)("h3",i({},{id:"mode"}),"Mode"),(0,a.kt)("p",null,"mode \u7684\u5408\u6cd5\u503c"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",i({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"scaleToFill"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u7f29\u653e\u6a21\u5f0f\uff0c\u4e0d\u4fdd\u6301\u7eb5\u6a2a\u6bd4\u7f29\u653e\u56fe\u7247\uff0c\u4f7f\u56fe\u7247\u7684\u5bbd\u9ad8\u5b8c\u5168\u62c9\u4f38\u81f3\u586b\u6ee1 image \u5143\u7d20")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"aspectFit"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u7f29\u653e\u6a21\u5f0f\uff0c\u4fdd\u6301\u7eb5\u6a2a\u6bd4\u7f29\u653e\u56fe\u7247\uff0c\u4f7f\u56fe\u7247\u7684\u957f\u8fb9\u80fd\u5b8c\u5168\u663e\u793a\u51fa\u6765\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u53ef\u4ee5\u5b8c\u6574\u5730\u5c06\u56fe\u7247\u663e\u793a\u51fa\u6765\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"aspectFill"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u7f29\u653e\u6a21\u5f0f\uff0c\u4fdd\u6301\u7eb5\u6a2a\u6bd4\u7f29\u653e\u56fe\u7247\uff0c\u53ea\u4fdd\u8bc1\u56fe\u7247\u7684\u77ed\u8fb9\u80fd\u5b8c\u5168\u663e\u793a\u51fa\u6765\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u56fe\u7247\u901a\u5e38\u53ea\u5728\u6c34\u5e73\u6216\u5782\u76f4\u65b9\u5411\u662f\u5b8c\u6574\u7684\uff0c\u53e6\u4e00\u4e2a\u65b9\u5411\u5c06\u4f1a\u53d1\u751f\u622a\u53d6\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"widthFix"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u7f29\u653e\u6a21\u5f0f\uff0c\u5bbd\u5ea6\u4e0d\u53d8\uff0c\u9ad8\u5ea6\u81ea\u52a8\u53d8\u5316\uff0c\u4fdd\u6301\u539f\u56fe\u5bbd\u9ad8\u6bd4\u4e0d\u53d8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"heightFix"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u7f29\u653e\u6a21\u5f0f\uff0c\u9ad8\u5ea6\u4e0d\u53d8\uff0c\u5bbd\u5ea6\u81ea\u52a8\u53d8\u5316\uff0c\u4fdd\u6301\u539f\u56fe\u5bbd\u9ad8\u6bd4\u4e0d\u53d8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"top"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u88c1\u526a\u6a21\u5f0f\uff0c\u4e0d\u7f29\u653e\u56fe\u7247\uff0c\u53ea\u663e\u793a\u56fe\u7247\u7684\u9876\u90e8\u533a\u57df")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"bottom"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u88c1\u526a\u6a21\u5f0f\uff0c\u4e0d\u7f29\u653e\u56fe\u7247\uff0c\u53ea\u663e\u793a\u56fe\u7247\u7684\u5e95\u90e8\u533a\u57df")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"center"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u88c1\u526a\u6a21\u5f0f\uff0c\u4e0d\u7f29\u653e\u56fe\u7247\uff0c\u53ea\u663e\u793a\u56fe\u7247\u7684\u4e2d\u95f4\u533a\u57df")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"left"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u88c1\u526a\u6a21\u5f0f\uff0c\u4e0d\u7f29\u653e\u56fe\u7247\uff0c\u53ea\u663e\u793a\u56fe\u7247\u7684\u5de6\u8fb9\u533a\u57df")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"right"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u88c1\u526a\u6a21\u5f0f\uff0c\u4e0d\u7f29\u653e\u56fe\u7247\uff0c\u53ea\u663e\u793a\u56fe\u7247\u7684\u53f3\u8fb9\u533a\u57df")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"top left"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u88c1\u526a\u6a21\u5f0f\uff0c\u4e0d\u7f29\u653e\u56fe\u7247\uff0c\u53ea\u663e\u793a\u56fe\u7247\u7684\u5de6\u4e0a\u8fb9\u533a\u57df")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"top right"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u88c1\u526a\u6a21\u5f0f\uff0c\u4e0d\u7f29\u653e\u56fe\u7247\uff0c\u53ea\u663e\u793a\u56fe\u7247\u7684\u53f3\u4e0a\u8fb9\u533a\u57df")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"bottom left"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u88c1\u526a\u6a21\u5f0f\uff0c\u4e0d\u7f29\u653e\u56fe\u7247\uff0c\u53ea\u663e\u793a\u56fe\u7247\u7684\u5de6\u4e0b\u8fb9\u533a\u57df")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"bottom right"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u88c1\u526a\u6a21\u5f0f\uff0c\u4e0d\u7f29\u653e\u56fe\u7247\uff0c\u53ea\u663e\u793a\u56fe\u7247\u7684\u53f3\u4e0b\u8fb9\u533a\u57df")))),(0,a.kt)("h3",i({},{id:"onerroreventdetail"}),"onErrorEventDetail"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",i({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",i({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"errMsg"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u9519\u8bef\u4fe1\u606f")))),(0,a.kt)("h3",i({},{id:"onloadeventdetail"}),"onLoadEventDetail"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",i({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",i({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"height"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"string or number"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u56fe\u7247\u9ad8\u5ea6")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"width"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"string or number"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u56fe\u7247\u5bbd\u5ea6")))))}k.isMDXComponent=!0},21349:function(t,e,n){e.Z=n.p+"assets/images/alipay-ee5545de747ce1ad6e17faec10358975.png"},30304:function(t,e,n){e.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},38309:function(t,e,n){e.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},92126:function(t,e,n){e.Z=n.p+"assets/images/swan-566f56d360909d0457073b67b8f48958.png"},89598:function(t,e,n){e.Z=n.p+"assets/images/tt-f4ec120e570f924e7ef763dcaf7fc69d.png"},98548:function(t,e,n){e.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);