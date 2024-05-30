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
⚙️  Installing CLI plugins. This might take a while...


added 873 packages in 25s

98 packages are looking for funding
  run `npm fund` for details
🚀  Invoking generators...
📦  Installing additional dependencies...


added 88 packages in 5s

110 packages are looking for funding
  run `npm fund` for details
⚓  Running completion hooks...

📄  Generating README.md...

🎉  Successfully created project cli_demo.
👉  Get started with the following commands:

 $ cd cli_demo
 $ npm run serve
```

到这里项目就配置完了。