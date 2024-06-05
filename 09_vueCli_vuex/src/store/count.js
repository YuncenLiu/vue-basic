export default {
    namespaced:true,
    actions:{
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
    },
    mutations:{
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
        },
    },
    state:{
        sum: 0,
        school: '北京大学',
        subject: '计算机',
    },
    getters:{
        bigSum(state) {
            return state.sum * 10
        }
    }
}
