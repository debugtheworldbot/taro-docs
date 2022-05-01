"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[51041],{79874:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return v}});var r=t(93106);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(t),v=o,f=m["".concat(c,".").concat(v)]||m[v]||u[v]||a;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function v(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},15248:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});t(93106);var r=t(79874);function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const i={title:"Event mechanism"},s=void 0,c={unversionedId:"apis/about/events",id:"version-3.x/apis/about/events",title:"Event mechanism",description:"Taro provides Taro.Events to implement the event mechanism, which needs to be instantiated for use, as follows:",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/about/events.md",sourceDirName:"apis/about",slug:"/apis/about/events",permalink:"/taro-docs/en/docs/apis/about/events",editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/apis/about/events.md",tags:[],version:"3.x",frontMatter:{title:"Event mechanism"},sidebar:"API",previous:{title:"Operating environment",permalink:"/taro-docs/en/docs/apis/about/env"},next:{title:"General",permalink:"/taro-docs/en/docs/apis/General"}},l={},p=[],u={toc:p};function m(e){var{components:n}=e,t=a(e,["components"]);return(0,r.kt)("wrapper",o({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Taro provides ",(0,r.kt)("inlineCode",{parentName:"p"},"Taro.Events")," to implement the event mechanism, which needs to be instantiated for use, as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"import Taro, { Events } from '@tarojs/taro'\n\nconst events = new Events()\n\n// Listening for an event, accepting parameters\nevents.on('eventName', (arg) => {\n  // doSth\n})\n\n// Listening to the same event and binding multiple handlers at the same time\nevents.on('eventName', handler1)\nevents.on('eventName', handler2)\nevents.on('eventName', handler3)\n\n// Trigger an event, pass the reference\nevents.trigger('eventName', arg)\n\n// Trigger an event, pass in multiple parameters\nevents.trigger('eventName', arg1, arg2, ...)\n\n// Unlisten to an event\nevents.off('eventName')\n\n// Cancel a handler that listens to an event\nevents.off('eventName', handler1)\n\n// Unlisten to all events\nevents.off()\n")),(0,r.kt)("p",null,"Taro also implements the global message centre (",(0,r.kt)("inlineCode",{parentName:"p"},"Taro.eventCenter"),"), which is an instance of ",(0,r.kt)("inlineCode",{parentName:"p"},"Taro.Events"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nTaro.eventCenter.on\nTaro.eventCenter.trigger\nTaro.eventCenter.off\n")))}m.isMDXComponent=!0}}]);