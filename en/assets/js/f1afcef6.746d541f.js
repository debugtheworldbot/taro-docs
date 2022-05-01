"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[9250],{79874:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(93106);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?i.createElement(h,l(l({ref:t},p),{},{components:n})):i.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var c=2;c<o;c++)l[c]=n[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68350:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return r},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});n(93106);var i=n(79874);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={title:"Plugin"},r=void 0,s={unversionedId:"plugin",id:"plugin",title:"Plugin",description:"Taro introduced a plugin mechanism to enable developers to write plugins to extend the functionality of Taro or to customize it for their own business.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/plugin.md",sourceDirName:".",slug:"/plugin",permalink:"/taro-docs/en/docs/next/plugin",editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/plugin.md",tags:[],version:"current",frontMatter:{title:"Plugin"},sidebar:"docs",previous:{title:"\u52a8\u6001 import",permalink:"/taro-docs/en/docs/next/dynamic-import"},next:{title:"Mini Program Performance Optimization Guide",permalink:"/taro-docs/en/docs/next/optimized"}},c={},p=[{value:"Official Plugin",id:"official-plugin",level:2},{value:"How to Add plugins",id:"how-to-add-plugins",level:2},{value:"plugins",id:"plugins",level:3},{value:"presets",id:"presets",level:3},{value:"How to write a plugin",id:"how-to-write-a-plugin",level:2},{value:"Typings",id:"typings",level:3},{value:"Main Functions",id:"main-functions",level:3},{value:"Command Line Extensions",id:"command-line-extensions",level:4},{value:"Compilation Process Extensions",id:"compilation-process-extensions",level:4},{value:"Compiler Platform Expansion",id:"compiler-platform-expansion",level:4},{value:"Plugin environment variables",id:"plugin-environment-variables",level:3},{value:"ctx.paths",id:"ctxpaths",level:4},{value:"ctx.runOpts",id:"ctxrunopts",level:4},{value:"ctx.helper",id:"ctxhelper",level:4},{value:"ctx.initialConfig",id:"ctxinitialconfig",level:4},{value:"ctx.plugins",id:"ctxplugins",level:4},{value:"Plugin Method",id:"plugin-method",level:3},{value:"ctx.register(hook: IHook)",id:"ctxregisterhook-ihook",level:4},{value:"ctx.registerMethod(arg: string | { name: string, fn?: Function }, fn?: Function)",id:"ctxregistermethodarg-string---name-string-fn-function--fn-function",level:4},{value:"Specify the callback function",id:"specify-the-callback-function",level:5},{value:"No callback function specified",id:"no-callback-function-specified",level:5},{value:"ctx.registerCommand(hook: ICommand)",id:"ctxregistercommandhook-icommand",level:4},{value:"ctx.registerPlatform(hook: IPlatform)",id:"ctxregisterplatformhook-iplatform",level:4},{value:"ctx.applyPlugins(args: string | { name: string, initialVal?: any, opts?: any })",id:"ctxapplypluginsargs-string---name-string-initialval-any-opts-any-",level:4},{value:"ctx.addPluginOptsSchema(schema: Function)",id:"ctxaddpluginoptsschemaschema-function",level:4},{value:"ctx.writeFileToDist({ filePath: string, content: string })",id:"ctxwritefiletodist-filepath-string-content-string-",level:4},{value:"ctx.generateFrameworkInfo({ platform: string })",id:"ctxgenerateframeworkinfo-platform-string-",level:4},{value:"ctx.generateProjectConfig({ srcConfigName: string, distConfigName: string })",id:"ctxgenerateprojectconfig-srcconfigname-string-distconfigname-string-",level:4}],u={toc:p};function d(e){var{components:t}=e,n=o(e,["components"]);return(0,i.kt)("wrapper",a({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Taro introduced a plugin mechanism to enable developers to write plugins to extend the functionality of Taro or to customize it for their own business."),(0,i.kt)("h2",a({},{id:"official-plugin"}),"Official Plugin"),(0,i.kt)("p",null,"Taro offers a number of official plugins"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",a({parentName:"li"},{href:"https://github.com/NervJS/taro-plugin-mock"}),"@tarojs/plugin-mock"),", A simple data mock plugin")),(0,i.kt)("h2",a({},{id:"how-to-add-plugins"}),"How to Add plugins"),(0,i.kt)("p",null,"You can bring in plugins from npm or locally, mainly through the ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"presets")," in ",(0,i.kt)("a",a({parentName:"p"},{href:"/taro-docs/en/docs/next/config-detail"}),"compile configuration")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"presets"),", using the following"),(0,i.kt)("h3",a({},{id:"plugins"}),"plugins"),(0,i.kt)("p",null,"Plugins are generally introduced in Taro via the ",(0,i.kt)("a",a({parentName:"p"},{href:"/taro-docs/en/docs/next/config-detail"}),"compile configuration")," with the ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins")," field."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins")," field takes the value of an array and is configured as follows."),(0,i.kt)("pre",null,(0,i.kt)("code",a({parentName:"pre"},{className:"language-js",metastring:'title="/config/index.js"',title:'"/config/index.js"'}),"const config = {\n  plugins: [\n    // Introducing the npm installed plugins\n    '@tarojs/plugin-mock', \n    // Introduce the npm installed plugin and pass in the plugin parameters\n    ['@tarojs/plugin-mock', {\n      mocks: {\n        '/api/user/1': {\n          name: 'judy',\n          desc: 'Mental guy'\n        }\n      }\n    }],\n    // The plugin is introduced from the local absolute path, and also if you need to pass in parameters as above\n    '/absulute/path/plugin/filename',\n  ]\n}\n")),(0,i.kt)("h3",a({},{id:"presets"}),"presets"),(0,i.kt)("p",null,"If you have a series of plugins that need to be configured, and they are usually combined to do a specific thing, then you can configure them via the ",(0,i.kt)("strong",{parentName:"p"},"plugin set")," ",(0,i.kt)("inlineCode",{parentName:"p"},"presets"),"."),(0,i.kt)("p",null,"Configure ",(0,i.kt)("a",a({parentName:"p"},{href:"/taro-docs/en/docs/next/config-detail"}),"compile configuration")," with the ",(0,i.kt)("inlineCode",{parentName:"p"},"presets")," field, as follows."),(0,i.kt)("pre",null,(0,i.kt)("code",a({parentName:"pre"},{className:"language-js",metastring:'title="/config/index.js"',title:'"/config/index.js"'}),"const config = {\n  presets: [\n    '@tarojs/preset-sth', \n    ['@tarojs/plugin-sth', {\n      arg0: 'xxx'\n    }],\n    '/absulute/path/preset/filename',\n  ]\n}\n")),(0,i.kt)("p",null,"After understanding how to introduce a plugin, let's learn how to write a plugin."),(0,i.kt)("h2",a({},{id:"how-to-write-a-plugin"}),"How to write a plugin"),(0,i.kt)("p",null,"A Taro plugin has a fixed code structure, usually consisting of a function, for example."),(0,i.kt)("pre",null,(0,i.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"export default (ctx, options) => {\n  // plugin main content\n  ctx.onBuildStart(() => {\n    console.log('compile start')\n  })\n  ctx.onBuildFinish(() => {\n    console.log('compile end')\n  })\n  ctx.onBuildComplete(() => {\n    console.log('Taro build complete')\n  })\n}\n")),(0,i.kt)("p",null,"The plugin function can accept two parameters."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ctx: information about the current running environment of the plug-in, including the plug-in related API, current running parameters, auxiliary methods, etc."),(0,i.kt)("li",{parentName:"ul"},"options: the parameters passed in for the plugin call")),(0,i.kt)("p",null,"In the body of the plugin code part can be written according to their own needs of the corresponding code, you can usually achieve the following functions."),(0,i.kt)("h3",a({},{id:"typings"}),"Typings"),(0,i.kt)("p",null,"It is recommended to use typescript to write the plugin so you get great smart tips, using the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"import { IPluginContext } from '@tarojs/service'\nexport default (ctx: IPluginContext, pluginOpts) => {\n  ctx.onBuildStart(() => {\n    console.log('complie start')\n  })\n}\n")),(0,i.kt)("h3",a({},{id:"main-functions"}),"Main Functions"),(0,i.kt)("h4",a({},{id:"command-line-extensions"}),"Command Line Extensions"),(0,i.kt)("p",null,"You can write plugins to extend the command line commands for Taro. In previous versions of Taro, the command line commands were fixed, and if you wanted to extend them, you had to modify the Taro source code directly, but now you can extend the Taro command line as much as you want with the plugin feature."),(0,i.kt)("p",null,"This functionality is mainly implemented through the ",(0,i.kt)("inlineCode",{parentName:"p"},"ctx.registerCommand")," API, for example, by adding an upload command to upload the compiled code to the server"),(0,i.kt)("pre",null,(0,i.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"export default (ctx) => {\n  ctx.registerCommand({\n    // Command Name\n    name: 'upload',\n    // The options information output when executing taro upload --help\n    optionsMap: {\n      '--remote': 'server address'\n    },\n    // Example of usage output when executing taro upload --help\n    synopsisList: [\n      'taro upload --remote xxx.xxx.xxx.xxx'\n    ],\n    async fn () {\n      const { remote } = ctx.runOpts\n      await uploadDist()\n    }\n  })\n}\n")),(0,i.kt)("p",null,"After configuring this plugin to the medium project, you can upload the compiled code to the target server with the ",(0,i.kt)("inlineCode",{parentName:"p"},"taro upload --remote xxx.xxx.xxx.xxx")," command."),(0,i.kt)("h4",a({},{id:"compilation-process-extensions"}),"Compilation Process Extensions"),(0,i.kt)("p",null,"You can also extend the code build process through plugins."),(0,i.kt)("p",null,"As mentioned earlier, there are ",(0,i.kt)("inlineCode",{parentName:"p"},"onBuildStart"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"onBuildFinish")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"onBuildComplete")," hooks for the build process to indicate the start, finish and complete of the build respectively, and there are more APIs to modify the build process as follows."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ctx.onBuildStart(() => void)"),", compile start, receive a callback function"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ctx.modifyWebpackChain(args: { chain: any }) => void)"),", In this hook, you can make the desired adjustments to the webpackChain, which is equivalent to configuring ",(0,i.kt)("a",a({parentName:"li"},{href:"/taro-docs/en/docs/next/config-detail#miniwebpackchain"}),(0,i.kt)("inlineCode",{parentName:"a"},"webpackChain"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ctx.modifyBuildAssets(args: { assets: any }) => void)"),", Modify the compiled result"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ctx.modifyBuildTempFileContent(args: { tempFiles: any }) => void)"),", Modify intermediate files during the compilation process, such as the configuration of an app or page"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ctx.onBuildFinish(() => void)"),", the compilation ends and a callback function is received. It is triggered after every Webpack compilation. So in watch mode, it will trigger this callback function on every detected file change, which implies there may be multiple calls to this callback function."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ctx.onBuildComplete(() => void)"),", build complete and a callback function is received. It is only triggered when the Taro build process is fully completed. So it differs from ",(0,i.kt)("inlineCode",{parentName:"li"},"onBuildFinish")," in that it is triggered only once.")),(0,i.kt)("h4",a({},{id:"compiler-platform-expansion"}),"Compiler Platform Expansion"),(0,i.kt)("p",null,"You can also extend the compilation platform with plugin functionality."),(0,i.kt)("p",null,"Use the API ",(0,i.kt)("inlineCode",{parentName:"p"},"ctx.registerPlatform"),", the platform support built into Taro is implemented through this API."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: This is an unfinished feature that relies on the code compiler ",(0,i.kt)("inlineCode",{parentName:"p"},"@tarojs/transform-wx")," to complete the transformation"),(0,i.kt)("h2",a({parentName:"blockquote"},{id:"api"}),"API")),(0,i.kt)("p",null,"With the above, we have a general idea of what features the Taro plugin can implement and can write a simple Taro plugin, but in order to be able to write more complex and standard plugins, we need to understand the specific API usage in the Taro plugin mechanism."),(0,i.kt)("h3",a({},{id:"plugin-environment-variables"}),"Plugin environment variables"),(0,i.kt)("h4",a({},{id:"ctxpaths"}),"ctx.paths"),(0,i.kt)("p",null,"Contains the paths associated with the currently executing command, all of which are as follows (not all commands will have all of the following paths):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ctx.paths.appPath"),", The directory where the current command is executed, or the current project path if it is a ",(0,i.kt)("inlineCode",{parentName:"li"},"build")," command"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ctx.paths.configPath"),", The current project configuration directory, or no path if the ",(0,i.kt)("inlineCode",{parentName:"li"},"init")," command"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ctx.paths.sourcePath"),", The current project source code path"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ctx.paths.outputPath"),", Current project output code path"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ctx.paths.nodeModulesPath"),",The path to the node_modules used by the current project")),(0,i.kt)("h4",a({},{id:"ctxrunopts"}),"ctx.runOpts"),(0,i.kt)("p",null,"Gets the parameters of the currently executed command, eg. for the command ",(0,i.kt)("inlineCode",{parentName:"p"},"taro upload --remote xxx.xxx.xxx"),", the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"ctx.runOpts"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",a({parentName:"pre"},{className:"language-js"}),"{\n  _: ['upload'],\n  options: {\n    remote: 'xxx.xxx.xxx.xxx'\n  },\n  isHelp: false\n}\n")),(0,i.kt)("h4",a({},{id:"ctxhelper"}),"ctx.helper"),(0,i.kt)("p",null,"A shortcut to the package ",(0,i.kt)("inlineCode",{parentName:"p"},"@tarojs/helper"),", including all its APIs."),(0,i.kt)("h4",a({},{id:"ctxinitialconfig"}),"ctx.initialConfig"),(0,i.kt)("p",null,"Get the project configuration."),(0,i.kt)("h4",a({},{id:"ctxplugins"}),"ctx.plugins"),(0,i.kt)("p",null,"Get all currently mounted plugins."),(0,i.kt)("h3",a({},{id:"plugin-method"}),"Plugin Method"),(0,i.kt)("p",null,"Taro's plugin architecture is based on ",(0,i.kt)("a",a({parentName:"p"},{href:"https://github.com/webpack/tapable"}),"Tapable"),"\u3002"),(0,i.kt)("h4",a({},{id:"ctxregisterhook-ihook"}),"ctx.register(hook: IHook)"),(0,i.kt)("p",null,"Register a hook that can be called by other plugins, receiving one parameter, the Hook object."),(0,i.kt)("p",null,"A Hook object is of the following type."),(0,i.kt)("pre",null,(0,i.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"interface IHook {\n  // Hook name, which will also be used as Hook identifier\n  name: string\n  // The plugin id of the Hook, you don't need to specify it, it will be recognized automatically when the Hook is mounted.\n  plugin: string\n  // Hook callback\n  fn: Function\n  before?: string\n  stage?: number\n}\n")),(0,i.kt)("p",null,"Hooks registered by ",(0,i.kt)("inlineCode",{parentName:"p"},"ctx.register")," need to be triggered by method ",(0,i.kt)("inlineCode",{parentName:"p"},"ctx.applyPlugins"),"."),(0,i.kt)("p",null,"We agree to distinguish Hook types according to the ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," of the incoming Hook object, which are mainly of the following three types: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Hook of event type, Hook name starts with ",(0,i.kt)("inlineCode",{parentName:"li"},"on"),", e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"onStart"),", this type of Hook only cares about triggering but not the value of Hook callback fn, Hook's callback fn receives a parameter ",(0,i.kt)("inlineCode",{parentName:"li"},"opts"),", which is the parameter passed in when triggering the hook"),(0,i.kt)("li",{parentName:"ul"},"Hook name starts with ",(0,i.kt)("inlineCode",{parentName:"li"},"modify"),", e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"modifyBuildAssets"),", this type of Hook will return the value after making a modification after triggering, Hook's callback fn receives two parameters ",(0,i.kt)("inlineCode",{parentName:"li"},"opts")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"arg"),", which are the parameters passed in when triggering the hook and the result of the previous callback respectively."),(0,i.kt)("li",{parentName:"ul"},"Add type Hook, Hook name starts with ",(0,i.kt)("inlineCode",{parentName:"li"},"add"),", such as ",(0,i.kt)("inlineCode",{parentName:"li"},"addConfig"),", this type Hook will combine the results of all callbacks into an array and finally return, Hook's callback fn receives two parameters ",(0,i.kt)("inlineCode",{parentName:"li"},"opts")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"arg"),", which are the parameters passed in when triggering the hook and the result of the last callback execution respectively.")),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," of the Hook object does not belong to the above three categories, then the Hook behaves like an event type Hook."),(0,i.kt)("p",null,"Hook callbacks can be asynchronous or synchronous, and a series of callbacks under the same Hook identifier will be organized as asynchronous serial tasks executed sequentially with the help of Tapable's AsyncSeriesWaterfallHook."),(0,i.kt)("h4",a({},{id:"ctxregistermethodarg-string---name-string-fn-function--fn-function"}),"ctx.registerMethod(arg: string | { name: string, fn?: Function }, fn?: Function)"),(0,i.kt)("p",null,"Mount a method on ",(0,i.kt)("inlineCode",{parentName:"p"},"ctx")," that can be called directly by other plugins."),(0,i.kt)("p",null,"Main call method:"),(0,i.kt)("pre",null,(0,i.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"ctx.registerMethod('methodName')\nctx.registerMethod('methodName', () => {\n  // callback\n})\nctx.registerMethod({\n  name: 'methodName'\n})\nctx.registerMethod({\n  name: 'methodName',\n  fn: () => {\n    // callback\n  }\n})\n")),(0,i.kt)("p",null,"where the method name must be specified, and there are two cases for callback functions."),(0,i.kt)("h5",a({},{id:"specify-the-callback-function"}),"Specify the callback function"),(0,i.kt)("p",null,"methodName",(0,i.kt)("inlineCode",{parentName:"p"},"will execute the callback function specified in"),"registerMethod` when it is called."),(0,i.kt)("h5",a({},{id:"no-callback-function-specified"}),"No callback function specified"),(0,i.kt)("p",null,"The specific hook callback to be executed is specified by ",(0,i.kt)("inlineCode",{parentName:"p"},"ctx.methodName"),", which can specify multiple callbacks to be executed, and will be executed in the order of the registered which will be executed in order of registration."),(0,i.kt)("p",null,"The built-in build process APIs such as ",(0,i.kt)("inlineCode",{parentName:"p"},"ctx.onBuildStart")," are registered in this way."),(0,i.kt)("h4",a({},{id:"ctxregistercommandhook-icommand"}),"ctx.registerCommand(hook: ICommand)"),(0,i.kt)("p",null,"Register a custom command:"),(0,i.kt)("pre",null,(0,i.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"interface ICommand {\n  // Command alias\n  alias?: string,\n    [key: string]: string\n  },\n  // Example usage information when executing taro <command> --help\n  synopsisList?: string[]\n}\n")),(0,i.kt)("p",null,"Usage : "),(0,i.kt)("pre",null,(0,i.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"ctx.registerCommand({\n  name: 'create',\n  fn () {\n    const {\n      type,\n      name,\n      description\n    } = ctx.runOpts\n    const { chalk } = ctx.helper\n    const { appPath } = ctx.paths\n    if (typeof name !== 'string') {\n      return console.log(chalk.red('Please enter the name of the page to be created'))\n    }\n    if (type === 'page') {\n      const Page = require('../../create/page').default\n      const page = new Page({\n        pageName: name,\n        projectDir: appPath,\n        description\n      })\n      page.create()\n    }\n  }\n})\n")),(0,i.kt)("h4",a({},{id:"ctxregisterplatformhook-iplatform"}),"ctx.registerPlatform(hook: IPlatform)"),(0,i.kt)("p",null,"Register a compilation platform."),(0,i.kt)("pre",null,(0,i.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"interface IFileType {\n  templ: string\n  style: string\n  script: string\n  config: string\n}\ninterface IPlatform extends IHook {\n  // Compiled file type\n  fileType: IFileType\n  // Name of the configuration parameter used at compile time\n  useConfigName: String\n}\n")),(0,i.kt)("p",null,"Usage : "),(0,i.kt)("pre",null,(0,i.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"ctx.registerPlatform({\n  name: 'alipay',\n  useConfigName: 'mini',\n  async fn ({ config }) {\n    const { appPath, nodeModulesPath, outputPath } = ctx.paths\n    const { npm, emptyDirectory } = ctx.helper\n    emptyDirectory(outputPath)\n    // prepare miniRunner param\n    const miniRunnerOpts = {\n      ...config,\n      nodeModulesPath,\n      buildAdapter: config.platform,\n      isBuildPlugin: false,\n      globalObject: 'my',\n      fileType: {\n        templ: '.awml',\n        style: '.acss',\n        config: '.json',\n        script: '.js'\n      },\n      isUseComponentBuildPage: false\n    }\n    ctx.modifyBuildTempFileContent(({ tempFiles }) => {\n      const replaceKeyMap = {\n        navigationBarTitleText: 'defaultTitle',\n        navigationBarBackgroundColor: 'titleBarColor',\n        enablePullDownRefresh: 'pullRefresh',\n        list: 'items',\n        text: 'name',\n        iconPath: 'icon',\n        selectedIconPath: 'activeIcon',\n        color: 'textColor'\n      }\n      Object.keys(tempFiles).forEach(key => {\n        const item = tempFiles[key]\n        if (item.config) {\n          recursiveReplaceObjectKeys(item.config, replaceKeyMap)\n        }\n      })\n    })\n    // build with webpack\n    const miniRunner = await npm.getNpmPkg('@tarojs/mini-runner', appPath)\n    await miniRunner(appPath, miniRunnerOpts)\n  }\n})\n")),(0,i.kt)("h4",a({},{id:"ctxapplypluginsargs-string---name-string-initialval-any-opts-any-"}),"ctx.applyPlugins(args: string | { name: string, initialVal?: any, opts?: any })"),(0,i.kt)("p",null,"Triggers the registered hooks."),(0,i.kt)("p",null,"The hook name passed in is the name specified by ",(0,i.kt)("inlineCode",{parentName:"p"},"ctx.register")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ctx.registerMethod"),"."),(0,i.kt)("p",null,"It is worth noting here that if it is a ",(0,i.kt)("strong",{parentName:"p"},"modify type")," and ",(0,i.kt)("strong",{parentName:"p"},"add type")," hook, it has the return result, otherwise don't care about its return result."),(0,i.kt)("p",null,"Usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"ctx.applyPlugins('onStart')\nconst assets = await ctx.applyPlugins({\n  name: 'modifyBuildAssets',\n  initialVal: assets,\n  opts: {\n    assets\n  }\n})\n")),(0,i.kt)("h4",a({},{id:"ctxaddpluginoptsschemaschema-function"}),"ctx.addPluginOptsSchema(schema: Function)"),(0,i.kt)("p",null,"Adds a checksum to the plugin input, accepting a function type parameter, the function input is a joi object, and the return value is a joi schema."),(0,i.kt)("p",null,"Usage :"),(0,i.kt)("pre",null,(0,i.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"ctx.addPluginOptsSchema(joi => {\n  return joi.object().keys({\n    mocks: joi.object().pattern(\n      joi.string(), joi.object()\n    ),\n    port: joi.number(),\n    host: joi.string()\n  })\n})\n")),(0,i.kt)("h4",a({},{id:"ctxwritefiletodist-filepath-string-content-string-"}),"ctx.writeFileToDist({ filePath: string, content: string })"),(0,i.kt)("p",null,"Writes a file to the compile result directory, with the following parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"filePath: the path where the file is placed in the compilation result directory"),(0,i.kt)("li",{parentName:"ul"},"content: the content of the file")),(0,i.kt)("h4",a({},{id:"ctxgenerateframeworkinfo-platform-string-"}),"ctx.generateFrameworkInfo({ platform: string })"),(0,i.kt)("p",null,"Generate the compilation information file .frameworkinfo, with the following parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"platform: Platform name")),(0,i.kt)("h4",a({},{id:"ctxgenerateprojectconfig-srcconfigname-string-distconfigname-string-"}),"ctx.generateProjectConfig({ srcConfigName: string, distConfigName: string })"),(0,i.kt)("p",null,"Generate the final project configuration based on the current project configuration with the following parameters."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"srcConfigName: the name of the configuration in the source code"),(0,i.kt)("li",{parentName:"ul"},"distConfigName:  the name of the final generated configuration")))}d.isMDXComponent=!0}}]);