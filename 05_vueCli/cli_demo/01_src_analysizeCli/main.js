// 该文件是整个项目的入口文件
// 为ES6语法结构
// import Vue from 'vue/dist/vue.js'
import Vue from 'vue'
// 所有组件的父组件
import App from './App.vue'

// 关闭 Vue 的生产提示
Vue.config.productionTip = false

// 创建 Vue 实例对象
new Vue({
  // 将 App 组件放入容器中
  // render: h => h(App),

  render(createElement){
    return createElement('h1','你好呀，通过 createElement 创建')
  },

  render: h=>h(App)

  // template:`<h1>你好</h1>`
  // 您正在使用Vue的仅运行时构建，其中模板编译器不可用。要么将模板预编译为呈现函数，要么使用包含编译器的构建。
  // templates:{
  //   App,
  // }

}).$mount('#app')

// .$mount('#app') 类似 el:'#app'