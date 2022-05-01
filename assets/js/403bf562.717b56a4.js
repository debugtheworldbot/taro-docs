"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[46701],{79874:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return s}});var a=n(93106);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(n),s=l,k=c["".concat(p,".").concat(s)]||c[s]||m[s]||r;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function s(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},68199:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(93106);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function r({children:e,hidden:t,className:n}){return a.createElement("div",l({role:"tabpanel"},{hidden:t,className:n}),e)}},93261:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(93106),l=n(69938),r=n(3132),o=n(26679),i="tabItem_JzMF";function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},p.apply(this,arguments)}function u(e){var t,n;const{lazy:l,block:u,defaultValue:d,values:m,groupId:c,className:s}=e,k=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=null!=m?m:k.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),b=(0,r.lx)(v,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var g;const N=null===d?d:null!==(g=null!=d?d:null===(t=k.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==g?g:null===(n=k[0])||void 0===n?void 0:n.props.value;if(null!==N&&!v.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:f}=(0,r.UB)(),[y,w]=(0,a.useState)(N),j=[],{blockElementScrollPositionUntilNextRender:C}=(0,r.o5)();if(null!=c){const e=h[c];null!=e&&e!==y&&v.some((t=>t.value===e))&&w(e)}const O=e=>{const t=e.currentTarget,n=j.indexOf(t),a=v[n].value;a!==y&&(C(t),w(a),null!=c&&f(c,a))},x=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=j.indexOf(e.currentTarget)+1;t=j[n]||j[0];break}case"ArrowLeft":{const n=j.indexOf(e.currentTarget)-1;t=j[n]||j[j.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":u},s)},v.map((({value:e,label:t,attributes:n})=>a.createElement("li",p({role:"tab",tabIndex:y===e?0:-1,"aria-selected":y===e,key:e,ref:e=>j.push(e),onKeyDown:x,onFocus:O,onClick:O},n,{className:(0,o.Z)("tabs__item",i,null==n?void 0:n.className,{"tabs__item--active":y===e})}),null!=t?t:e)))),l?(0,a.cloneElement)(k.filter((e=>e.props.value===y))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},k.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function d(e){const t=(0,l.Z)();return a.createElement(u,p({key:String(t)},e))}},23244:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return c}});n(93106);var a=n(79874),l=n(93261),r=n(68199);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}const p={title:"\u9875\u9762\u7ec4\u4ef6"},u=void 0,d={unversionedId:"vue-page",id:"version-3.x/vue-page",title:"\u9875\u9762\u7ec4\u4ef6",description:"\u6bcf\u4e00\u4e2a Taro \u5e94\u7528\u90fd\u81f3\u5c11\u5305\u62ec\u4e00\u4e2a\u9875\u9762\u7ec4\u4ef6\uff0c\u9875\u9762\u7ec4\u4ef6\u53ef\u4ee5\u901a\u8fc7 Taro \u8def\u7531\u8fdb\u884c\u8df3\u8f6c\uff0c\u4e5f\u53ef\u4ee5\u8bbf\u95ee\u5c0f\u7a0b\u5e8f\u9875\u9762\u7684\u751f\u547d\u5468\u671f\u3002",source:"@site/versioned_docs/version-3.x/vue-page.mdx",sourceDirName:".",slug:"/vue-page",permalink:"/taro-docs/docs/vue-page",editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/vue-page.mdx",tags:[],version:"3.x",frontMatter:{title:"\u9875\u9762\u7ec4\u4ef6"},sidebar:"docs",previous:{title:"\u5165\u53e3\u7ec4\u4ef6",permalink:"/taro-docs/docs/vue-entry"},next:{title:"Vue3",permalink:"/taro-docs/docs/vue3"}},m={},c=[{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b",level:2},{value:"\u9875\u9762\u7ec4\u4ef6\u914d\u7f6e",id:"\u9875\u9762\u7ec4\u4ef6\u914d\u7f6e",level:2},{value:"\u751f\u547d\u5468\u671f\u65b9\u6cd5",id:"\u751f\u547d\u5468\u671f\u65b9\u6cd5",level:2},{value:"onLoad (options)",id:"onload-options",level:3},{value:"onUnload ()",id:"onunload-",level:3},{value:"onReady ()",id:"onready-",level:3},{value:"\u5b50\u7ec4\u4ef6\u7684 onReady",id:"\u5b50\u7ec4\u4ef6\u7684-onready",level:4},{value:"onShow ()",id:"onshow-",level:3},{value:"\u5b50\u7ec4\u4ef6\u7684 onShow",id:"\u5b50\u7ec4\u4ef6\u7684-onshow",level:4},{value:"onHide ()",id:"onhide-",level:3},{value:"\u5b50\u7ec4\u4ef6\u7684 onHide",id:"\u5b50\u7ec4\u4ef6\u7684-onhide",level:4},{value:"onPullDownRefresh ()",id:"onpulldownrefresh-",level:3},{value:"onReachBottom ()",id:"onreachbottom-",level:3},{value:"onPageScroll (Object)",id:"onpagescroll-object",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:4},{value:"Object",id:"object",level:5},{value:"onAddToFavorites (Object)",id:"onaddtofavorites-object",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-1",level:4},{value:"Object",id:"object-1",level:5},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:4},{value:"onShareAppMessage (Object)",id:"onshareappmessage-object",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-2",level:4},{value:"Object",id:"object-2",level:5},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801-1",level:4},{value:"onShareTimeline ()",id:"onsharetimeline-",level:3},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",level:4},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801-2",level:4},{value:"onResize (Object)",id:"onresize-object",level:3},{value:"onTabItemTap (Object)",id:"ontabitemtap-object",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-3",level:4},{value:"Object",id:"object-3",level:5},{value:"onTitleClick ()",id:"ontitleclick-",level:3},{value:"onOptionMenuClick ()",id:"onoptionmenuclick-",level:3},{value:"onPopMenuClick ()",id:"onpopmenuclick-",level:3},{value:"onPullIntercept ()",id:"onpullintercept-",level:3}],s={toc:c};function k(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)("wrapper",o({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6bcf\u4e00\u4e2a Taro \u5e94\u7528\u90fd\u81f3\u5c11\u5305\u62ec\u4e00\u4e2a\u9875\u9762\u7ec4\u4ef6\uff0c\u9875\u9762\u7ec4\u4ef6\u53ef\u4ee5\u901a\u8fc7 Taro \u8def\u7531\u8fdb\u884c\u8df3\u8f6c\uff0c\u4e5f\u53ef\u4ee5\u8bbf\u95ee\u5c0f\u7a0b\u5e8f\u9875\u9762\u7684\u751f\u547d\u5468\u671f\u3002"),(0,a.kt)("p",null,"\u6bcf\u4e00\u4e2a\u9875\u9762\u7ec4\u4ef6\u5fc5\u987b\u662f\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},".vue")," \u6587\u4ef6\u3002"),(0,a.kt)("h2",o({},{id:"\u4ee3\u7801\u793a\u4f8b"}),"\u4ee3\u7801\u793a\u4f8b"),(0,a.kt)(l.Z,{defaultValue:"vue",values:[{label:"Vue2",value:"vue"},{label:"Vue3",value:"vue3"}],mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"vue",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-jsx",metastring:'title="page.vue"',title:'"page.vue"'}),"<template>\n  <view class=\"index\"></view>\n</template>\n\n<script>\nexport default {\n  name: 'Index',\n\n  // \u53ef\u4ee5\u4f7f\u7528\u6240\u6709\u7684 Vue \u751f\u547d\u5468\u671f\u65b9\u6cd5\n  mounted () {},\n\n  // onLoad\n  onLoad () {},\n\n  // onReady\n  onReady () {},\n\n  // \u5bf9\u5e94 onShow\n  onShow () {},\n\n  // \u5bf9\u5e94 onHide\n  onHide () {},\n\n  // \u5bf9\u5e94 onPullDownRefresh\n  onPullDownRefresh () {}\n}\n<\/script>\n\n<style>\n.index {}\n</style>\n"))),(0,a.kt)(r.Z,{value:"vue3",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-jsx",metastring:'title="page.vue"',title:'"page.vue"'}),"<template>\n  <view class=\"index\">\n    <text>{{ msg }}</text>\n  </view>\n</template>\n\n<script>\nimport { ref } from 'vue'\n\nexport default {\n  // \u53ef\u4ee5\u4f7f\u7528\u6240\u6709\u7684 Vue \u751f\u547d\u5468\u671f\u65b9\u6cd5\n  mounted () {},\n\n  // onLoad\n  onLoad () {},\n\n  // onReady\n  onReady () {},\n\n  // \u5bf9\u5e94 onShow\n  onShow () {},\n\n  // \u5bf9\u5e94 onHide\n  onHide () {},\n\n  // \u5bf9\u5e94 onPullDownRefresh\n  onPullDownRefresh () {},\n\n  setup () {\n    const msg = ref('Hello world')\n    return {\n      msg\n    }\n  }\n}\n<\/script>\n")))),(0,a.kt)("h2",o({},{id:"\u9875\u9762\u7ec4\u4ef6\u914d\u7f6e"}),"\u9875\u9762\u7ec4\u4ef6\u914d\u7f6e"),(0,a.kt)("p",null,"\u8bf7\u53c2\u8003 ",(0,a.kt)("a",o({parentName:"p"},{href:"./page-config"}),"\u9875\u9762\u914d\u7f6e")),(0,a.kt)("h2",o({},{id:"\u751f\u547d\u5468\u671f\u65b9\u6cd5"}),"\u751f\u547d\u5468\u671f\u65b9\u6cd5"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5728 Vue2 \u548c Vue3 \u4e2d\uff0cTaro \u989d\u5916\u6dfb\u52a0\u7684\u751f\u547d\u5468\u671f\u65b9\u6cd5\u7684\u5199\u6cd5\u4e00\u81f4")),(0,a.kt)("p",null,"\u9875\u9762\u7ec4\u4ef6\u9664\u4e86\u652f\u6301 Vue \u7684\u751f\u547d\u5468\u671f\u65b9\u6cd5\u5916\uff0c\u8fd8\u6839\u636e\u5c0f\u7a0b\u5e8f\u7684\u6807\u51c6\uff0c\u989d\u5916\u652f\u6301\u4ee5\u4e0b\u751f\u547d\u5468\u671f\uff1a"),(0,a.kt)("h3",o({},{id:"onload-options"}),"onLoad (options)"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5728\u5c0f\u7a0b\u5e8f\u73af\u5883\u4e2d\u5bf9\u5e94\u9875\u9762\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"onLoad"),"\u3002")),(0,a.kt)("p",null,"\u9875\u9762\u521b\u5efa\u65f6\u6267\u884c\u3002\u5728\u6b64\u751f\u547d\u5468\u671f\u4e2d\u901a\u8fc7\u8bbf\u95ee ",(0,a.kt)("inlineCode",{parentName:"p"},"options")," \u53c2\u6570\u6216\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"getCurrentInstance().router"),"\uff0c\u53ef\u4ee5\u8bbf\u95ee\u5230\u9875\u9762\u8def\u7531\u53c2\u6570\u3002"),(0,a.kt)("h3",o({},{id:"onunload-"}),"onUnload ()"),(0,a.kt)("div",o({},{className:"admonition admonition-info alert alert--info"}),(0,a.kt)("div",o({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",o({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",o({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,a.kt)("path",o({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),(0,a.kt)("div",o({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"Taro v3.4.7 \u5f00\u59cb\u652f\u6301\u3002"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5728\u5c0f\u7a0b\u5e8f\u73af\u5883\u4e2d\u5bf9\u5e94\u9875\u9762\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"onUnload"),"\u3002")),(0,a.kt)("p",null,"\u4e00\u822c\u60c5\u51b5\u4e0b\u5efa\u8bae\u4f7f\u7528 Vue \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"onUnmounted")," \u751f\u547d\u5468\u671f\u5904\u7406\u9875\u9762\u5378\u8f7d\u65f6\u7684\u903b\u8f91\u3002\u5f53\u67d0\u4e9b\u7279\u6b8a\u60c5\u51b5\u9700\u8981\u5728\u9875\u9762\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"onUnload")," \u7684\u540c\u4e00\u4e2a\u4e8b\u4ef6\u5faa\u73af\u4e2d\u5b9e\u73b0\u903b\u8f91\u65f6\u624d\u4f7f\u7528\u5b83\uff08\u5982\u5bf9\u5c0f\u7a0b\u5e8f\u7684\u751f\u547d\u5468\u671f\u6267\u884c\u987a\u5e8f\u6709\u5f3a\u4f9d\u8d56\u5173\u7cfb\u65f6\uff09\u3002"),(0,a.kt)("h3",o({},{id:"onready-"}),"onReady ()"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5728\u5c0f\u7a0b\u5e8f\u73af\u5883\u4e2d\u5bf9\u5e94\u9875\u9762\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"onReady"),"\u3002")),(0,a.kt)("p",null,"\u9875\u9762\u9996\u6b21\u6e32\u67d3\u5b8c\u6bd5\u65f6\u6267\u884c\u3002\u4ece\u6b64\u751f\u547d\u5468\u671f\u5f00\u59cb\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"createCanvasContext")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"createSelectorQuery")," \u7b49 API \u8bbf\u95ee\u5c0f\u7a0b\u5e8f\u6e32\u67d3\u5c42\u7684 DOM \u8282\u70b9\u3002"),(0,a.kt)("h4",o({},{id:"\u5b50\u7ec4\u4ef6\u7684-onready"}),"\u5b50\u7ec4\u4ef6\u7684 onReady"),(0,a.kt)("p",null,"\u53ea\u5728\u9875\u9762\u7ec4\u4ef6\u624d\u4f1a\u89e6\u53d1 ",(0,a.kt)("inlineCode",{parentName:"p"},"onReady")," \u751f\u547d\u5468\u671f\u3002\u5b50\u7ec4\u4ef6\u53ef\u4ee5\u4f7f\u7528 Taro \u5185\u7f6e\u7684",(0,a.kt)("a",o({parentName:"p"},{href:"./apis/about/events"}),"\u6d88\u606f\u673a\u5236"),"\u76d1\u542c\u9875\u9762\u7ec4\u4ef6\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"onReady()")," \u751f\u547d\u5468\u671f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-html",metastring:'title="\u9875\u9762\u4e2d\u67d0\u4e2a\u5b50\u7ec4\u4ef6"',title:'"\u9875\u9762\u4e2d\u67d0\u4e2a\u5b50\u7ec4\u4ef6"'}),"<template>\n  <view id=\"only\" />\n</template>\n\n<script>\n  import Taro, { eventCenter, getCurrentInstance } from '@tarojs/taro'\n\n  export default {\n    mounted () {\n      eventCenter.once(getCurrentInstance().router.onReady, () => {\n        console.log('onReady')\n\n        // onReady \u89e6\u53d1\u540e\u624d\u80fd\u83b7\u53d6\u5c0f\u7a0b\u5e8f\u6e32\u67d3\u5c42\u7684\u8282\u70b9\n        Taro.createSelectorQuery().select('#only')\n          .boundingClientRect()\n          .exec(res => console.log('res: ', res))\n      })\n    }\n  }\n<\/script>\n")),(0,a.kt)("p",null,"\u4f46\u662f\u5f53\u5b50\u7ec4\u4ef6\u662f",(0,a.kt)("strong",{parentName:"p"},"\u6309\u9700\u52a0\u8f7d"),"\u7684\u65f6\u5019\uff0c\u9875\u9762 ",(0,a.kt)("inlineCode",{parentName:"p"},"onReady")," \u65e9\u5df2\u89e6\u53d1\u3002\u5982\u679c\u6b64\u6309\u9700\u52a0\u8f7d\u7684\u5b50\u7ec4\u4ef6\u9700\u8981\u83b7\u53d6\u5c0f\u7a0b\u5e8f\u6e32\u67d3\u5c42\u7684 DOM \u8282\u70b9\uff0c\u56e0\u4e3a\u9519\u8fc7\u4e86\u9875\u9762 ",(0,a.kt)("inlineCode",{parentName:"p"},"onReady"),"\uff0c\u53ea\u80fd\u5c1d\u8bd5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"Taro.nextTick")," \u6a21\u62df\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-html",metastring:'title="\u6309\u9700\u52a0\u8f7d\u7684\u5b50\u7ec4\u4ef6"',title:'"\u6309\u9700\u52a0\u8f7d\u7684\u5b50\u7ec4\u4ef6"'}),"<template>\n  <view id=\"only\" />\n</template>\n\n<script>\n  import Taro from '@tarojs/taro'\n\n  export default {\n    mounted () {\n      Taro.nextTick(() => {\n        // \u4f7f\u7528 Taro.nextTick \u6a21\u62df setData \u5df2\u7ed3\u675f\uff0c\u8282\u70b9\u5df2\u5b8c\u6210\u6e32\u67d3\n        Taro.createSelectorQuery().select('#only')\n          .boundingClientRect()\n          .exec(res => console.log('res: ', res))\n      })\n    }\n  }\n<\/script>\n")),(0,a.kt)("h3",o({},{id:"onshow-"}),"onShow ()"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5728\u5c0f\u7a0b\u5e8f\u73af\u5883\u4e2d\u5bf9\u5e94\u9875\u9762\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"onShow"),"\u3002")),(0,a.kt)("p",null,"\u9875\u9762\u663e\u793a/\u5207\u5165\u524d\u53f0\u65f6\u89e6\u53d1\u3002"),(0,a.kt)("h4",o({},{id:"\u5b50\u7ec4\u4ef6\u7684-onshow"}),"\u5b50\u7ec4\u4ef6\u7684 onShow"),(0,a.kt)("p",null,"\u53ea\u5728\u9875\u9762\u7ec4\u4ef6\u624d\u4f1a\u89e6\u53d1 ",(0,a.kt)("inlineCode",{parentName:"p"},"onShow")," \u751f\u547d\u5468\u671f\u3002\u5b50\u7ec4\u4ef6\u53ef\u4ee5\u4f7f\u7528 Taro \u5185\u7f6e\u7684",(0,a.kt)("a",o({parentName:"p"},{href:"./apis/about/events"}),"\u6d88\u606f\u673a\u5236"),"\u76d1\u542c\u9875\u9762\u7ec4\u4ef6\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"onShow()")," \u751f\u547d\u5468\u671f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-jsx",metastring:'title="\u9875\u9762\u4e2d\u67d0\u4e2a\u5b50\u7ec4\u4ef6"',title:'"\u9875\u9762\u4e2d\u67d0\u4e2a\u5b50\u7ec4\u4ef6"'}),"<script>\n  import { eventCenter, getCurrentInstance } from '@tarojs/taro'\n\n  export default {\n    mounted () {\n      eventCenter.once(getCurrentInstance().router.onShow, () => {\n        console.log('onShow')\n      })\n    }\n  }\n<\/script>\n")),(0,a.kt)("h3",o({},{id:"onhide-"}),"onHide ()"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5728\u5c0f\u7a0b\u5e8f\u73af\u5883\u4e2d\u5bf9\u5e94\u9875\u9762\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"onHide"),"\u3002")),(0,a.kt)("p",null,"\u9875\u9762\u9690\u85cf/\u5207\u5165\u540e\u53f0\u65f6\u89e6\u53d1\u3002"),(0,a.kt)("h4",o({},{id:"\u5b50\u7ec4\u4ef6\u7684-onhide"}),"\u5b50\u7ec4\u4ef6\u7684 onHide"),(0,a.kt)("p",null,"\u53ea\u5728\u9875\u9762\u7ec4\u4ef6\u624d\u4f1a\u89e6\u53d1 ",(0,a.kt)("inlineCode",{parentName:"p"},"onHide")," \u751f\u547d\u5468\u671f\u3002\u5b50\u7ec4\u4ef6\u53ef\u4ee5\u4f7f\u7528 Taro \u5185\u7f6e\u7684",(0,a.kt)("a",o({parentName:"p"},{href:"./apis/about/events"}),"\u6d88\u606f\u673a\u5236"),"\u76d1\u542c\u9875\u9762\u7ec4\u4ef6\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"onHide()")," \u751f\u547d\u5468\u671f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-jsx",metastring:'title="\u9875\u9762\u4e2d\u67d0\u4e2a\u5b50\u7ec4\u4ef6"',title:'"\u9875\u9762\u4e2d\u67d0\u4e2a\u5b50\u7ec4\u4ef6"'}),"<script>\n  import { eventCenter, getCurrentInstance } from '@tarojs/taro'\n\n  export default {\n    mounted () {\n      eventCenter.once(getCurrentInstance().router.onHide, () => {\n        console.log('onHide')\n      })\n    }\n  }\n<\/script>\n")),(0,a.kt)("h3",o({},{id:"onpulldownrefresh-"}),"onPullDownRefresh ()"),(0,a.kt)("p",null,"\u76d1\u542c\u7528\u6237\u4e0b\u62c9\u52a8\u4f5c\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9700\u8981\u5728\u5168\u5c40\u914d\u7f6e\u7684 window \u9009\u9879\u4e2d\u6216\u9875\u9762\u914d\u7f6e\u4e2d\u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"li"},"enablePullDownRefresh: true"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("a",o({parentName:"li"},{href:"/taro-docs/docs/apis/ui/pull-down-refresh/startPullDownRefresh"}),"Taro.startPullDownRefresh")," \u89e6\u53d1\u4e0b\u62c9\u5237\u65b0\uff0c\u8c03\u7528\u540e\u89e6\u53d1\u4e0b\u62c9\u5237\u65b0\u52a8\u753b\uff0c\u6548\u679c\u4e0e\u7528\u6237\u624b\u52a8\u4e0b\u62c9\u5237\u65b0\u4e00\u81f4\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5f53\u5904\u7406\u5b8c\u6570\u636e\u5237\u65b0\u540e\uff0c",(0,a.kt)("a",o({parentName:"li"},{href:"/taro-docs/docs/apis/ui/pull-down-refresh/stopPullDownRefresh"}),"Taro.stopPullDownRefresh")," \u53ef\u4ee5\u505c\u6b62\u5f53\u524d\u9875\u9762\u7684\u4e0b\u62c9\u5237\u65b0\u3002")),(0,a.kt)("h3",o({},{id:"onreachbottom-"}),"onReachBottom ()"),(0,a.kt)("p",null,"\u76d1\u542c\u7528\u6237\u4e0a\u62c9\u89e6\u5e95\u4e8b\u4ef6\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u5728\u5168\u5c40\u914d\u7f6e\u7684 window \u9009\u9879\u4e2d\u6216\u9875\u9762\u914d\u7f6e\u4e2d\u8bbe\u7f6e\u89e6\u53d1\u8ddd\u79bb ",(0,a.kt)("inlineCode",{parentName:"li"},"onReachBottomDistance"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5728\u89e6\u53d1\u8ddd\u79bb\u5185\u6ed1\u52a8\u671f\u95f4\uff0c\u672c\u4e8b\u4ef6\u53ea\u4f1a\u88ab\u89e6\u53d1\u4e00\u6b21")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u9700\u8981 ",(0,a.kt)("inlineCode",{parentName:"p"},"enablePullDownRefresh")," \u914d\u7f6e")),(0,a.kt)("h3",o({},{id:"onpagescroll-object"}),"onPageScroll (Object)"),(0,a.kt)("p",null,"\u76d1\u542c\u7528\u6237\u6ed1\u52a8\u9875\u9762\u4e8b\u4ef6\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u9700\u8981 ",(0,a.kt)("inlineCode",{parentName:"p"},"enablePullDownRefresh")," \u914d\u7f6e")),(0,a.kt)("h4",o({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,a.kt)("h5",o({},{id:"object"}),"Object"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"scrollTop"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u9875\u9762\u5728\u5782\u76f4\u65b9\u5411\u5df2\u6eda\u52a8\u7684\u8ddd\u79bb\uff08\u5355\u4f4dpx\uff09")))),(0,a.kt)("h3",o({},{id:"onaddtofavorites-object"}),"onAddToFavorites (Object)"),(0,a.kt)("p",null,"\u76d1\u542c\u7528\u6237\u70b9\u51fb\u53f3\u4e0a\u89d2\u83dc\u5355\u201c\u6536\u85cf\u201d\u6309\u94ae\u7684\u884c\u4e3a\uff0c\u5e76\u81ea\u5b9a\u4e49\u6536\u85cf\u5185\u5bb9\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Taro 3.0.3 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002\n\u53ea\u6709\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u652f\u6301\uff0c\u672c\u63a5\u53e3\u4e3a Beta \u7248\u672c\uff0c\u5b89\u5353 7.0.15 \u7248\u672c\u8d77\u652f\u6301\uff0c\u6682\u53ea\u5728\u5b89\u5353\u5e73\u53f0\u652f\u6301\u3002")),(0,a.kt)("h4",o({},{id:"\u53c2\u6570-1"}),"\u53c2\u6570"),(0,a.kt)("h5",o({},{id:"object-1"}),"Object"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"webviewUrl"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u9875\u9762\u4e2d\u5305\u542bweb-view\u7ec4\u4ef6\u65f6\uff0c\u8fd4\u56de\u5f53\u524dweb-view\u7684url")))),(0,a.kt)("p",null,"\u6b64\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\u9700\u8981 return \u4e00\u4e2a Object\uff0c\u7528\u4e8e\u81ea\u5b9a\u4e49\u6536\u85cf\u5185\u5bb9\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u5b57\u6bb5"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u8bf4\u660e"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u503c"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"title"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u81ea\u5b9a\u4e49\u6807\u9898"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u9875\u9762\u6807\u9898\u6216\u8d26\u53f7\u540d\u79f0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"imageUrl"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u81ea\u5b9a\u4e49\u56fe\u7247\uff0c\u663e\u793a\u56fe\u7247\u957f\u5bbd\u6bd4\u4e3a 1\uff1a1"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u9875\u9762\u622a\u56fe")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"query"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u81ea\u5b9a\u4e49query\u5b57\u6bb5"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u5f53\u524d\u9875\u9762\u7684query")))),(0,a.kt)("h4",o({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-jsx",metastring:'title="page.vue"',title:'"page.vue"'}),"<script>\n  export default {\n    onAddToFavorites (res) {\n      // webview \u9875\u9762\u8fd4\u56de webviewUrl\n      console.log('WebviewUrl: ', res?.webviewUrl)\n      return {\n        title: '\u81ea\u5b9a\u4e49\u6807\u9898',\n        imageUrl: 'https://demo.png',\n        query: 'name=xxx&age=xxx',\n      }\n    }\n  }\n<\/script>\n")),(0,a.kt)("h3",o({},{id:"onshareappmessage-object"}),"onShareAppMessage (Object)"),(0,a.kt)("p",null,"\u76d1\u542c\u7528\u6237\u70b9\u51fb\u9875\u9762\u5185\u8f6c\u53d1\u6309\u94ae\uff08Button \u7ec4\u4ef6 openType='share'\uff09\u6216\u53f3\u4e0a\u89d2\u83dc\u5355\u201c\u8f6c\u53d1\u201d\u6309\u94ae\u7684\u884c\u4e3a\uff0c\u5e76\u81ea\u5b9a\u4e49\u8f6c\u53d1\u5185\u5bb9\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a"),"\u53ea\u6709\u5b9a\u4e49\u4e86\u6b64\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\uff0c\u53f3\u4e0a\u89d2\u83dc\u5355\u624d\u4f1a\u663e\u793a\u201c\u8f6c\u53d1\u201d\u6309\u94ae\u3002\u5bf9\u4e8e\u67d0\u4e9b\u7279\u6b8a\u5199\u6cd5\uff0c\u5982\u679c\u5b9a\u4e49\u4e86\u6b64\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\u540e\u201c\u8f6c\u53d1\u201d\u6309\u94ae\u8fd8\u662f\u4e0d\u53ef\u70b9\u51fb\uff0c\u8bf7\u5728\u8be5\u9875\u9762\u914d\u7f6e\u4e2d\u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"enableShareAppMessage: true"),"\u3002"),(0,a.kt)("h4",o({},{id:"\u53c2\u6570-2"}),"\u53c2\u6570"),(0,a.kt)("h5",o({},{id:"object-2"}),"Object"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"from"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u8f6c\u53d1\u4e8b\u4ef6\u6765\u6e90\u3002",(0,a.kt)("br",null),"button\uff1a\u9875\u9762\u5185\u8f6c\u53d1\u6309\u94ae\uff1b",(0,a.kt)("br",null),"menu\uff1a\u53f3\u4e0a\u89d2\u8f6c\u53d1\u83dc\u5355")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"target"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Object"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u5982\u679c ",(0,a.kt)("inlineCode",{parentName:"td"},"from")," \u503c\u662f ",(0,a.kt)("inlineCode",{parentName:"td"},"button"),"\uff0c\u5219 ",(0,a.kt)("inlineCode",{parentName:"td"},"target")," \u662f\u89e6\u53d1\u8fd9\u6b21\u8f6c\u53d1\u4e8b\u4ef6\u7684 ",(0,a.kt)("inlineCode",{parentName:"td"},"button"),"\uff0c\u5426\u5219\u4e3a ",(0,a.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"webViewUrl"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u9875\u9762\u4e2d\u5305\u542b ",(0,a.kt)("inlineCode",{parentName:"td"},"WebView")," \u7ec4\u4ef6\u65f6\uff0c\u8fd4\u56de\u5f53\u524d ",(0,a.kt)("inlineCode",{parentName:"td"},"WebView")," \u7684url")))),(0,a.kt)("p",null,"\u6b64\u4e8b\u4ef6\u9700\u8981 return \u4e00\u4e2a Object\uff0c\u7528\u4e8e\u81ea\u5b9a\u4e49\u8f6c\u53d1\u5185\u5bb9\uff0c\u8fd4\u56de\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,a.kt)("p",null,"\u81ea\u5b9a\u4e49\u8f6c\u53d1\u5185\u5bb9"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u5b57\u6bb5"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"title"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u8f6c\u53d1\u6807\u9898"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u5f53\u524d\u5c0f\u7a0b\u5e8f\u540d\u79f0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"path"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u8f6c\u53d1\u8def\u5f84"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u5f53\u524d\u9875\u9762 path \uff0c\u5fc5\u987b\u662f\u4ee5 / \u5f00\u5934\u7684\u5b8c\u6574\u8def\u5f84")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"imageUrl"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u81ea\u5b9a\u4e49\u56fe\u7247\u8def\u5f84\uff0c\u53ef\u4ee5\u662f\u672c\u5730\u6587\u4ef6\u8def\u5f84\u3001\u4ee3\u7801\u5305\u6587\u4ef6\u8def\u5f84\u6216\u8005\u7f51\u7edc\u56fe\u7247\u8def\u5f84\u3002\u652f\u6301 PNG \u53ca JPG \u3002\u663e\u793a\u56fe\u7247\u957f\u5bbd\u6bd4\u662f 5:4"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u4f7f\u7528\u9ed8\u8ba4\u622a\u56fe")))),(0,a.kt)("h4",o({},{id:"\u793a\u4f8b\u4ee3\u7801-1"}),"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-jsx",metastring:'title="page.vue"',title:'"page.vue"'}),"<script>\n  export default {\n    onShareAppMessage (res) {\n      if (res.from === 'button') {\n        // \u6765\u81ea\u9875\u9762\u5185\u8f6c\u53d1\u6309\u94ae\n        console.log(res.target)\n      }\n      return {\n        title: '\u81ea\u5b9a\u4e49\u8f6c\u53d1\u6807\u9898',\n        path: '/page/user?id=123'\n      }\n    }\n  }\n<\/script>\n")),(0,a.kt)("h3",o({},{id:"onsharetimeline-"}),"onShareTimeline ()"),(0,a.kt)("p",null,"\u76d1\u542c\u53f3\u4e0a\u89d2\u83dc\u5355\u201c\u5206\u4eab\u5230\u670b\u53cb\u5708\u201d\u6309\u94ae\u7684\u884c\u4e3a\uff0c\u5e76\u81ea\u5b9a\u4e49\u5206\u4eab\u5185\u5bb9\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Taro 3.0.3 \u7248\u672c\u5f00\u59cb\u652f\u6301\n\u53ea\u6709\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u652f\u6301\uff0c\u57fa\u7840\u5e93 2.11.3 \u5f00\u59cb\u652f\u6301\uff0c\u672c\u63a5\u53e3\u4e3a Beta \u7248\u672c\uff0c\u6682\u53ea\u5728 Android \u5e73\u53f0\u652f\u6301")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a"),"\u53ea\u6709\u5b9a\u4e49\u4e86\u6b64\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\uff0c\u540c\u65f6\u76d1\u542c\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"onShareAppMessage"),"\uff0c\u53f3\u4e0a\u89d2\u83dc\u5355\u624d\u4f1a\u663e\u793a\u201c\u5206\u4eab\u5230\u670b\u53cb\u5708\u201d\u6309\u94ae\u3002\u5bf9\u4e8e\u67d0\u4e9b\u7279\u6b8a\u5199\u6cd5\uff0c\u5982\u679c\u5b9a\u4e49\u4e86\u6b64\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\u540e\u201c\u5206\u4eab\u5230\u670b\u53cb\u5708\u201d\u6309\u94ae\u8fd8\u662f\u4e0d\u53ef\u70b9\u51fb\uff0c\u8bf7\u5728\u8be5\u9875\u9762\u914d\u7f6e\u4e2d\u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"enableShareTimeline: true"),"\u3002"),(0,a.kt)("h4",o({},{id:"\u8fd4\u56de\u503c"}),"\u8fd4\u56de\u503c"),(0,a.kt)("p",null,"\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\u53ef\u4ee5\u8fd4\u56de\u4e00\u4e2a Object\uff0c\u7528\u4e8e\u81ea\u5b9a\u4e49\u5206\u4eab\u5185\u5bb9\uff0c\u4e0d\u652f\u6301\u81ea\u5b9a\u4e49\u9875\u9762\u8def\u5f84\uff0c\u8fd4\u56de\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u5b57\u6bb5"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u8bf4\u660e"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u503c"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"title"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u81ea\u5b9a\u4e49\u6807\u9898"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u5f53\u524d\u5c0f\u7a0b\u5e8f\u540d\u79f0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"query"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u81ea\u5b9a\u4e49\u9875\u9762\u8def\u5f84\u4e2d\u643a\u5e26\u7684\u53c2\u6570"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u5f53\u524d\u9875\u9762\u8def\u5f84\u643a\u5e26\u7684\u53c2\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"imageUrl"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u81ea\u5b9a\u4e49\u56fe\u7247\u8def\u5f84\uff0c\u53ef\u4ee5\u662f\u672c\u5730\u6587\u4ef6\u6216\u8005\u7f51\u7edc\u56fe\u7247\u3002\u652f\u6301 PNG \u53ca JPG\uff0c\u663e\u793a\u56fe\u7247\u957f\u5bbd\u6bd4\u662f 1:1\u3002"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u4f7f\u7528\u5c0f\u7a0b\u5e8f Logo")))),(0,a.kt)("h4",o({},{id:"\u793a\u4f8b\u4ee3\u7801-2"}),"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-jsx",metastring:'title="page.vue"',title:'"page.vue"'}),"<script>\n  export default {\n    onShareAppMessage () {},\n    onShareTimeline () {\n      console.log('onShareTimeline')\n      return {}\n    }\n  }\n<\/script>\n")),(0,a.kt)("h3",o({},{id:"onresize-object"}),"onResize (Object)"),(0,a.kt)("p",null,"\u5c0f\u7a0b\u5e8f\u5c4f\u5e55\u65cb\u8f6c\u65f6\u89e6\u53d1\u3002\u8be6\u89c1 ",(0,a.kt)("a",o({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/view/resizable.html#%E5%9C%A8%E6%89%8B%E6%9C%BA%E4%B8%8A%E5%90%AF%E7%94%A8%E5%B1%8F%E5%B9%95%E6%97%8B%E8%BD%AC%E6%94%AF%E6%8C%81"}),"\u54cd\u5e94\u663e\u793a\u533a\u57df\u53d8\u5316"),"\u3002"),(0,a.kt)("h3",o({},{id:"ontabitemtap-object"}),"onTabItemTap (Object)"),(0,a.kt)("p",null,"\u70b9\u51fb tab \u65f6\u89e6\u53d1\u3002"),(0,a.kt)("h4",o({},{id:"\u53c2\u6570-3"}),"\u53c2\u6570"),(0,a.kt)("h5",o({},{id:"object-3"}),"Object"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"index"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u88ab\u70b9\u51fb tabItem \u7684\u5e8f\u53f7\uff0c\u4ece 0 \u5f00\u59cb")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"pagePath"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u88ab\u70b9\u51fb tabItem \u7684\u9875\u9762\u8def\u5f84")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"text"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u88ab\u70b9\u51fb tabItem \u7684\u6309\u94ae\u6587\u5b57")))),(0,a.kt)("h3",o({},{id:"ontitleclick-"}),"onTitleClick ()"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u53ea\u6709\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u652f\u6301")),(0,a.kt)("p",null,"\u70b9\u51fb\u6807\u9898\u89e6\u53d1"),(0,a.kt)("h3",o({},{id:"onoptionmenuclick-"}),"onOptionMenuClick ()"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u53ea\u6709\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u652f\u6301")),(0,a.kt)("p",null,"\u70b9\u51fb\u5bfc\u822a\u680f\u989d\u5916\u56fe\u6807\u89e6\u53d1"),(0,a.kt)("h3",o({},{id:"onpopmenuclick-"}),"onPopMenuClick ()"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u53ea\u6709\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u652f\u6301")),(0,a.kt)("p",null,"\u6682\u65e0\u8bf4\u660e"),(0,a.kt)("h3",o({},{id:"onpullintercept-"}),"onPullIntercept ()"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u53ea\u6709\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u652f\u6301")),(0,a.kt)("p",null,"\u4e0b\u62c9\u622a\u65ad\u65f6\u89e6\u53d1"))}k.isMDXComponent=!0}}]);