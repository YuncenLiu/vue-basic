## VueX

专门在 vue 中实现集中式状态（数据）管理的一个 vue 插件，对 vue 应用中多个组件的共享状态进行集中式的管理和（读/写），也是一种组件式通信方式，且适用于任意组件间通信

Github 地址：[https://github.com/vuejs/vuex](https://github.com/vuejs/vuex)

### 什么时候使用？

1. 多个组件依赖于同一个状态
2. 来自不同组件的行为需要变更同一状态

### 搭建vuex环境

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


### 基本使用

1. 初始化数据，配置 `actions`、配置 `mutations`、操作 `stroe`

```js
// 该文件用于创建 VueX 中最为核心的 store

// Cli 原因，会先扫描整个 main.js 的 import 语句，import 会先解析
import Vue from 'vue'
import Vuex from "vuex";

Vue.use(Vuex)

// 准备 actions 用于响应组件中的动作
const actions = {
    increment(context, value) {
        context.dispatch('tmp', value)
        context.commit('Increment', value)
    },
    tmp(context, value) {
        console.log('我是复杂逻辑', value)
    }
}
// 准备 mutations 用于数据操作（state）
const mutations = {
    Increment(state, value) {
        // console.log('mutations Increment 被调用了',value)
        state.sum += value
    }
}
// 准备 state 用于存储数据
const state = {
    sum: 0
}
// 暴露、导出
export default new Vuex.Store({
    actions,
    mutations,
    state
})

```

2. 组件中读取 vuex 中数据： `$store.state.sum`

3. 组件中修改 vuex 中数据

```js
// 常规写法
this.$store.dispatch('increment',this.n)

// 也没问题，更便捷效率
this.$store.commit('increment',this.n)
```

若是没有网络或其他业务逻辑，组件可以越过 `actions` 不写 `dispatch` 直接写 `commit`


### getters的使用

1. 概念：当 state 中的数据需要经过加工后使用时，可以用 getters 加工
2. 在 store.js 中追加 getters 配置
```js
const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}

export default new Vuex.Store({
    ...
    getters
})
```
3. 组件中读取 $store.getters.bigSum


###  四个map方法使用

查看路径 `01_src_store4Fun`

#### 1. mapState方法
用于帮助我们映射 state 中的数据为计算属性

```js
export default {
    computed: {
    // 映射状态 借助 mapState 生成计算属性，读取 state 数据，对象写法
    /*...mapState({
      sum: 'sum',
      school: 'school',
      subject: 'subject'
    })*/
        
    // 借助 mapState 生成计算属性，读取 state 数据，数组写法
    ...mapState(['sum','school','subject'])
    }
}
```

#### 2. mapGetter方法
用于帮助我们映射 getters 中的计算属性
```js
export default {
    computed: {
    ...mapGetters(['bigSum'])
    }
}
```

#### 3. mapActions方法
生成与 actions 对话方法，包含 `$store.dispatch()` 的函数
```js
export default {
    computed: {...mapActions(['increment','decrement','incrementOdd','incrementWait']),
    }
}
```
#### 4. mapGetter方法
生成 mutations 对话，即包含 `$store.commit()` 的函数
```js
export default {
    computed: {
    ...mapMutations(['xxxxx'])
    }
}
```


### 模块化命名空间(简写和四大方法)

让代码更好维护,数据分类更明确

开启命名空间
```js
namespace: true
```

开启命名空间后,读取 state 数据
```js
this.$store.state.countOptions.sum

...mapState('countOptions',['sum','school'])
```

去读 getter 数据
```js
this.$store.getters['countOptions/bigSum']

...mapGetters('countOptions',['bigSum'])
```

调用 dispatch
```js
this.$store.dispatch('personOptions/addPersonServer',person)

...mapActions('countOptions',['increment'])
```

调用 commit
```js
this.$store.commit('personOptions/addPersonServer',person)

...mapMutations('personOptions',['AddPerson']),
```

