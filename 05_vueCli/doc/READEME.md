## VueCli

### 创建 Vue 2 babel,eslint 

1. 全局安装（仅第一次执行）
```
npm install -g @vue/cli
```
2. 切换到项目目录
进入 `/Users/xiang/xiang/study/front-end/vue-basic/05_vueCli`

```
vue create cli_demo
```

```
Vue CLI v5.0.8
Failed to check for updates
? Please pick a preset: (Use arrow keys)
❯ xiang ([Vue 3] babel) 
  Xiang-router-es ([Vue 3] babel, router, eslint) 
  xiang+route+noHis+ES ([Vue 3] dart-sass, babel, pwa, router, vuex, eslint) 
  Default ([Vue 3] babel, eslint) 
  Default ([Vue 2] babel, eslint) 
  Manually select features 
```

+ babel 处理 ES6 到 ES5 转化
+ eslint 做语法检查

这里我们选择 `Default ([Vue 2] babel, eslint) ` 将会在 `/05_vueCli` 目录下生成 `cli_demo` 文件夹

```
Vue CLI v5.0.8
Failed to check for updates
✨  Creating project in /Users/xiang/xiang/study/front-end/vue-basic/05_vueCli/cli_demo.
...
🎉  Successfully created project cli_demo.
👉  Get started with the following commands:

 $ cd cli_demo
 $ npm run serve
```

到这里项目就配置完了。


## 分析脚手架代码结构

```
cli_demo
.
├── README.md
├── babel.config.js
├── jsconfig.json
├── node_modules
├── package-lock.json
├── package.json
├── public
├── src
    ├── App.vue
    ├── assets
    │   └── logo.png
    ├── components
    │   └── HelloWorld.vue
    └── main.js
└── vue.config.js
```

+ `babel.config.js` babel的控制文件，处理ES6到ES5的转化规则
+ `package.json` NPM 项目包说明书
  + `lint` 对所有文件进行语法检查
+ `package-lock.json` 包版本控制文件
+ `src` 
  + `main.js` 整个项目的入口文件

## 关于不同版本的 Vue

1. Vue.js 与 vue.runtime.xxx.js 的区别
   1. vue.js 是完整版的 Vue, 包含: 核心功能：没有模版解析器
   2. vue.runtime.xxx.js 是运行版本的 vue，只包含核心，没有模版解析器

没有模版解析器，不能使用 template 配置项，需要使用 rander 函数接收到的 `createElement` 函数去指定具体内容

```
vue inspect > output.js
```
将 Vue 的默认配置文件输出到 `output.js`