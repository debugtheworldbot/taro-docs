"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[47972],{79874:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(93106);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68199:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(93106);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a({children:e,hidden:t,className:n}){return r.createElement("div",o({role:"tabpanel"},{hidden:t,className:n}),e)}},93261:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(93106),o=n(69938),a=n(3132),i=n(26679),l="tabItem_JzMF";function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function c(e){var t,n;const{lazy:o,block:c,defaultValue:p,values:u,groupId:m,className:d}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=u?u:f.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),v=(0,a.lx)(h,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var b;const y=null===p?p:null!==(b=null!=p?p:null===(t=f.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==b?b:null===(n=f[0])||void 0===n?void 0:n.props.value;if(null!==y&&!h.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:w}=(0,a.UB)(),[k,O]=(0,r.useState)(y),x=[],{blockElementScrollPositionUntilNextRender:T}=(0,a.o5)();if(null!=m){const e=g[m];null!=e&&e!==k&&h.some((t=>t.value===e))&&O(e)}const j=e=>{const t=e.currentTarget,n=x.indexOf(t),r=h[n].value;r!==k&&(T(t),O(r),null!=m&&w(m,r))},N=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=x.indexOf(e.currentTarget)+1;t=x[n]||x[0];break}case"ArrowLeft":{const n=x.indexOf(e.currentTarget)-1;t=x[n]||x[x.length-1];break}}null==t||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},d)},h.map((({value:e,label:t,attributes:n})=>r.createElement("li",s({role:"tab",tabIndex:k===e?0:-1,"aria-selected":k===e,key:e,ref:e=>x.push(e),onKeyDown:N,onFocus:j,onClick:j},n,{className:(0,i.Z)("tabs__item",l,null==n?void 0:n.className,{"tabs__item--active":k===e})}),null!=t?t:e)))),o?(0,r.cloneElement)(f.filter((e=>e.props.value===k))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==k})))))}function p(e){const t=(0,o.Z)();return r.createElement(c,s({key:String(t)},e))}},3075:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});n(93106);var r=n(79874),o=n(93261),a=n(68199);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={title:"Description"},c=void 0,p={unversionedId:"components-desc",id:"components-desc",title:"Description",description:"Taro has customised its own component library specification using WeChat Mini-Program Components as a standard, combined with the JSX syntax specification.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components-desc.md",sourceDirName:".",slug:"/components-desc",permalink:"/taro-docs/en/docs/next/components-desc",editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/components-desc.md",tags:[],version:"current",frontMatter:{title:"Description"},sidebar:"components",next:{title:"CustomWrapper",permalink:"/taro-docs/en/docs/next/components/custom-wrapper"}},u={},m=[{value:"TIPS",id:"tips",level:2},{value:"Initial capitalisation and humpback naming",id:"initial-capitalisation-and-humpback-naming",level:3},{value:"The event names of components should all start with <code>on</code>",id:"the-event-names-of-components-should-all-start-with-on",level:3}],d={toc:m};function f(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)("wrapper",i({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Taro has customised its own component library specification using ",(0,r.kt)("a",i({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/component/"}),"WeChat Mini-Program Components")," as a standard, combined with the ",(0,r.kt)("inlineCode",{parentName:"p"},"JSX")," syntax specification."),(0,r.kt)("p",null,"Based on the above principles, on the WeChat Mini-Program side we can use all the mini program native components, while on the other side we have implemented the corresponding component libraries:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"H5: ",(0,r.kt)("inlineCode",{parentName:"li"},"@tarojs/components")),(0,r.kt)("li",{parentName:"ul"},"RN: ",(0,r.kt)("inlineCode",{parentName:"li"},"@tarojs/components-rn"))),(0,r.kt)("p",null,"When using React we need to reference components from the Taro standard component library @tarojs/components before we can use them, for example with ",(0,r.kt)("inlineCode",{parentName:"p"},"<View />"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<Text />")," components\uff0c whereas with Vue there is no need to bring them in."),(0,r.kt)(o.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,r.kt)(a.Z,{value:"React",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-jsx"}),"import React, { Component } from 'react'\nimport { View, Text } from '@tarojs/components'\n\nexport default class C extends Component {\n  render () {\n    return (\n      <View className='c'>\n        <Text>c component</Text>\n      </View>\n    )\n  }\n}\n"))),(0,r.kt)(a.Z,{value:"Vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-html"}),'<template>\n  <view class="c">\n    <text>c component</text>\n  </view>\n</template>\n')))),(0,r.kt)("h2",i({},{id:"tips"}),"TIPS"),(0,r.kt)("p",null,"The detailed documentation of the components lists the extent to which the components are supported on different sides, as well as basic usage examples. For some components that are not listed as examples and are marked as only supported on the mini program side, you can refer directly to the ",(0,r.kt)("a",i({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/component/"}),"Mini-Program Components Doc"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Taro's development specifications still need to be followed:")),(0,r.kt)("h3",i({},{id:"initial-capitalisation-and-humpback-naming"}),"Initial capitalisation and humpback naming"),(0,r.kt)("p",null,"For example, using the ",(0,r.kt)("inlineCode",{parentName:"p"},"Map")," component, which is not yet supported on the H5 side"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-jsx"}),"import React, { Component } from 'react'\nimport Taro from '@tarojs/taro'\nimport { Map } from '@tarojs/components'\n\nclass App extends Components {\n  onTap () {}\n  render () {\n    return (\n      <Map onClick={this.onTap} />\n    )\n  }\n}\n")),(0,r.kt)("h3",i({},{id:"the-event-names-of-components-should-all-start-with-on"}),"The event names of components should all start with ",(0,r.kt)("inlineCode",{parentName:"h3"},"on")),(0,r.kt)("p",null,"All uses of ",(0,r.kt)("inlineCode",{parentName:"p"},"bind")," in WeChat Mini-Program need to be converted to a form starting with ",(0,r.kt)("inlineCode",{parentName:"p"},"on"),"."))}f.isMDXComponent=!0}}]);