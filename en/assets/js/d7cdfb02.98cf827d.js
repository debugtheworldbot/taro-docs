"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[94486],{79874:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(93106);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(t),d=o,m=f["".concat(u,".").concat(d)]||f[d]||p[d]||i;return t?r.createElement(m,a(a({ref:n},s),{},{components:t})):r.createElement(m,a({ref:n},s))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},28036:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return s}});t(93106);var r=t(79874);function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const a={title:"Compile Configuration"},c=void 0,u={unversionedId:"config",id:"version-3.x/config",title:"Compile Configuration",description:"The compile configuration is in the config directory in the project root directory and contains three files.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/config.md",sourceDirName:".",slug:"/config",permalink:"/taro-docs/en/docs/config",editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/config.md",tags:[],version:"3.x",frontMatter:{title:"Compile Configuration"},sidebar:"docs",previous:{title:"CLI Command",permalink:"/taro-docs/en/docs/cli"},next:{title:"Design and Dimension unit",permalink:"/taro-docs/en/docs/size"}},l={},s=[{value:"Default Configuration",id:"default-configuration",level:3}],p={toc:s};function f(e){var{components:n}=e,t=i(e,["components"]);return(0,r.kt)("wrapper",o({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The compile configuration is in the ",(0,r.kt)("inlineCode",{parentName:"p"},"config")," directory in the project root directory and contains three files."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"index.js")," Common configuration"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dev.js"),"  Development environment configuration"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"prod.js")," Production environment configuration")),(0,r.kt)("p",null,"Detailed compilation and configuration documentation: ",(0,r.kt)("a",o({parentName:"p"},{href:"./config-detail"}),"Compile configuration details")),(0,r.kt)("h3",o({},{id:"default-configuration"}),"Default Configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js",metastring:'title="config/index.js"',title:'"config/index.js"'}),"const config = {\n  projectName: 'Awesome Next',\n  date: '2020-6-2',\n  designWidth: 750,\n  deviceRatio: {\n    640: 2.34 / 2,\n    750: 1,\n    828: 1.81 / 2\n  },\n  sourceRoot: 'src',\n  outputRoot: 'dist',\n  plugins: [],\n  defineConstants: {},\n  copy: {\n    patterns: [\n    ],\n    options: {\n    }\n  },\n  // frameworks, react, nerv, vue, vue3, etc.\n  framework: 'react',\n  mini: {\n    postcss: {\n      autoprefixer: {\n        enable: true\n      },\n      url: {\n        enable: true,\n        config: {\n          limit: 10240\n        }\n      },\n      cssModules: {\n        enable: false, \n        config: {\n          namingPattern: 'module', // Conversion mode\n          generateScopedName: '[name]__[local]___[hash:base64:5]'\n        }\n      }\n    },\n    // Custom Webpack Configuration\n    webpackChain (chain, webpack) {}\n  },\n  // \n  h5: {\n    publicPath: '/',\n    staticDirectory: 'static',\n    postcss: {\n      autoprefixer: {\n        enable: true\n      },\n      cssModules: {\n        enable: false, \n        config: {\n          namingPattern: 'module', \n          generateScopedName: '[name]__[local]___[hash:base64:5]'\n        }\n      }\n    },\n    webpackChain (chain, webpack) {},\n    devServer: {}\n  }\n};\n\nmodule.exports = function(merge) {\n  if (process.env.NODE_ENV === 'development') {\n    return merge({}, config, require('./dev'));\n  }\n  return merge({}, config, require('./prod'));\n};\n")))}f.isMDXComponent=!0}}]);