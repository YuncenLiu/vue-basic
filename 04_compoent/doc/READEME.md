## Vue组件

1. 定义组件
    使用 `Vue.extend(option)`创建，其中 option 和 new Vue(opention) 时传入的那个 options 几乎一样，但也有区别
   1. el 不要写，最终所有组件都要经过 vm 管理，由 vm 中的el决定服务哪个容器
   2. data 必须写成函数，组件被复用时，数据存在引用关系
2. 注册组件
   1. 局部注册，靠 new Vue 的时候传入 `components` 选项 (用的多)
   2. 全局注册，靠 `Vue.component('组件名','组件')`
3. 编写组件标签
   `<xxx></xxx>`


### 关于组件名注意点

1. 关于组件名
   1. 一个单词组成
      1. 首写字母小写：school
      2. 首写字母大写：School
   2. 多个单词组成
      1. `kebab-case` 命名：my-school
      2. `CamelCase` 命名：MySchool（需要脚手架否则报错）
   3. 组件名尽可能回避 HTML 中已有的元素名称，例如 h2、H2 都不行
   4. 可以使用 name 配置项指定组件在开发者工具中呈现的名字（只是在开发者工具中）
2. 关于组件标签
   1. `<school></school>`
   2. `<school/>` 不用脚手架，会导致后面组件不被渲染
3. 一个简写方式
   ```
   const school = Vue.extend(options)
   ```
   可以简写为 `const school = options`

### VueCompoent

1. school 组件本质是一个名为 `VueComponent` 的构造函数，且不是程序员定义的，是 `Vue.extend` 生成的
2. 我们只需要写 `<school>` 或 `<school></school>` ，vue 解析时候会帮我们创建 school 组件的实例对象，即 vue 帮我们执行的 `new VueComponent(options)`。
3. 特别注意：每次调用 `Vue.extend` 返回的都是一个全新的 `VueComponent` !!!
4. 关于 this 指向：
   1. 组件配置中：`data` 函数、`methods` 函数、`watch`函数、`computed`中的函数，他们的this均是 `VueComponent`实例对象
   2. new Vue() 配置中：组件配置中：`data` 函数、`methods` 函数、`watch`函数、`computed`中的函数，他们的this均是 Vue实例对象
5. VueComponent 的实例对象，简称 `vc`(也可称之为：组件实例对象) Vue 实例对象，简称 `vm`