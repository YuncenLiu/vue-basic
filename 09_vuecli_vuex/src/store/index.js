// 该文件用于创建 VueX 中最为核心的 store

// Cli 原因，会先扫描整个 main.js 的 import 语句，import 会先解析
import Vue from 'vue'
import Vuex from "vuex";

Vue.use(Vuex)

// 准备 actions 用于响应组件中的动作
const actions = {
    increment(context,value){
        console.log('actions increment 被调用了')
        context.commit('increment',value)
    }
}
// 准备 mutations 用于数据操作（state）
const mutations = {}
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