// 该文件用于创建 VueX 中最为核心的 store

// Cli 原因，会先扫描整个 main.js 的 import 语句，import 会先解析
import Vue from 'vue'
import Vuex from "vuex"

import countOptions from "@/store/count";
import personOptions from "@/store/person";

Vue.use(Vuex)



// 模块化
export default new Vuex.Store({
    modules:{
        countOptions,
        personOptions
    }
})
