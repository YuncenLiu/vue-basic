import Vue from 'vue'
import App from './App.vue'

// 引入 ElementUI 全部组件库
// import ElementUI from 'element-ui'
// 引入 ElementUI 全部样式
// import 'element-ui/lib/theme-chalk/index.css'

// 局部引入，查看文档： https://element.eleme.cn/#/zh-CN/component/quickstart
import {Button,DatePicker} from "element-ui";

Vue.config.productionTip = false
// Vue.use(ElementUI)

Vue.component(Button.name,Button)
Vue.component(DatePicker.name,DatePicker)


new Vue({
  render: h => h(App),
}).$mount('#app')
