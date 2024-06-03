## VueX

专门在 vue 中实现集中式状态（数据）管理的一个 vue 插件，对 vue 应用中多个组件的共享状态进行集中式的管理和（读/写），也是一种组件式通信方式，且适用于任意组件间通信

Github 地址：[https://github.com/vuejs/vuex](https://github.com/vuejs/vuex)

### 什么时候使用？

1. 多个组件依赖于同一个状态
2. 来自不同组件的行为需要变更同一状态

### 搭建 vuex 环境

创建文件 `src/store/index.js`
```js
// 该文件用于创建 VueX 中最为核心的 store

// Cli 原因，会先扫描整个 main.js 的 import 语句，import 会先解析
import Vue from 'vue'
import Vuex from "vuex";

Vue.use(Vuex)

// 准备 actions 用于响应组件中的动作
const actions = {}
// 准备 mutations 用于数据操作（state）
const mutations = {}
// 准备 state 用于存储数据
const state = {}

// 暴露、导出
export default new Vuex.Store({
    actions,
    mutations,
    state
})
```

在 `main.js` 中创建 vm 时传入 `store` 的值

```js
import Vue from 'vue'
import App from './App.vue'
import store from "@/store";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')

```

