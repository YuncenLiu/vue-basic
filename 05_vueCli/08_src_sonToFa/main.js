import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
    el:'#app',
    render: h => h(App),
    mounted(){
        // setTimeout(()=>{
            // this.$destroy()
            // console.log("关闭 Vue 实例");
        // },3000)
    }
})