import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// const vc = Vue.extend({})
// const d = new vc()
// Vue.prototype.x = d

new Vue({
    el:'#app',
    render: h => h(App),
    beforeCreate(){
        Vue.prototype.$bus = this
    }
})