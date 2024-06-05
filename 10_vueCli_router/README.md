## vue-rote

vue 的一个插件库，专门用来实现 SPA 应用

> 注意：
> 
> 2022年2月7日后， vue-router 默认版本为 4版本
> 
> Vue2 最高仅支持 vue-router@3 版本

### SPA理解

1. 单页面 Web 应用（Single page web application） SPA
2. 整个应用只有一个完整的页面
3. 点击页面中的导航连接，不会刷新页面，只会做页面的局部更新
4. 数据需要通过 ajax 请求获取


### 路由 

1. 什么是路由
   1. 一个路由就是一组映射关系 k-v
   2. key 为路径，value 可能是 function 或 component
2. 路由分类
   1. 后端路由
      1. 理解 value 是 function 用于处理客户端提交的请求
      2. 工作过程：服务器收到一个请求，根据请求路径找到匹配的函数来处理请求，返回相应数据
   2. 前端路由
      1. 理解 value 是 component，用于展示页面内容
      2. 工作过程：当浏览器的路径改变时，对应的组件就会显示

### 基本使用

1. 安装 `vue-router` 命令：`npm i vue-router@3`，注意 Vue2最高仅仅支持 3版本
2. 在 `main.js` 应用插件： `Vue.use(VueRouter)`
```js
import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import router from "@/router"

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

```
3. 编写 `router` 配置项
```js
// 该文件用于创建整个应用的路由器
import VueRouter from "vue-router"

import About from "@/components/About"
import Home from "@/components/Home"
// 创建并保留一个路由
export default new VueRouter({
    routes: [
        {
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home
        }
    ]
})
```
4. 实现切换 `active-class` 配置切换高亮
```html
<router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
<router-link class="list-group-item" active-class="active" to="/about">About</router-link>
```

5. 指定未知
```html
<router-view/>
```

几个注意的点

1. 路由组件通常存放在 `pages` 文件夹，一般组件通常存放在 `components` 文件夹
2. 通过切换，"隐藏" 了路由的组件，默认是被销毁的，需要的时候再去挂载
3. 每个组件都有自己的 `$route` 属性，里面存储着自己的路由信息
4. 整个应用只有一个 `router` ，可以通过 `$router` 属性获取到

### 多级路由

1. 使用 `children` 配置项， 子配置路径不需要添加 `/ `
```js
{
   path: '/home',
   component: Home,
   children:[
       {
           path: 'news',
           component: HomeNews
       },
       {
           path: 'message',
           component: HomeMessage,
       }
   ]
}
```
2. 跳转要写完整路径
```html
<router-link class="list-group-item" active-class="active" to="/home/news" >News</router-link>

<router-link class="list-group-item" active-class="active" to="/home/message" >Message</router-link>
```

### 路由的query参数

1. 传递参数
```html
<router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link>

<router-link :to="{
 path: '/home/message/detail',
 query: {
   id: m.id,
   title: m.title
 }
}">
 {{m.title}}
</router-link>
```
2. 接受参数: `this.$route.query`
