// 该文件用于创建 VueX 中最为核心的 store

// Cli 原因，会先扫描整个 main.js 的 import 语句，import 会先解析
import Vue from 'vue'
import Vuex from "vuex";

Vue.use(Vuex)

// 准备 actions 用于响应组件中的动作
const actions = {
    increment(context, value) {
        context.dispatch('tmp', value)
        // console.log('actions increment 被调用了')
        context.commit('Increment', value)

    },
    decrement(context, value) {
        context.dispatch('tmp', value)
        context.commit('Decrement', value)
    },
    incrementOdd(context, value) {
        context.commit('IncrementOdd', value)

    },
    incrementWait(context, value) {
        context.commit('IncrementWait', value)
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
    },
    Decrement(state, value) {
        state.sum -= value
    },
    IncrementOdd(state, value) {
        if (state.sum % 2) {
            state.sum += value
        }
    },
    IncrementWait(state, value) {
        setTimeout(() => {
            state.sum += value
        }, 500)
    }
}
// 准备 state 用于存储数据
const state = {
    sum: 0,
    school: '北京大学',
    subject: '计算机'
}

const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}

// 暴露、导出
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})
