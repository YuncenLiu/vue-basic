import Vue from 'vue'
import App from './App.vue'

import {mixin,datas} from './mixin'
Vue.mixin(mixin)
Vue.mixin(datas)


Vue.config.productionTip = false

new Vue({
    el:'#app',
    render: h => h(App)
})