import axios from "axios"

export default {
    namespaced:true,
    actions:{
        addPersonServer(context){
           // 做 axios 相关网络操作
        }
    },
    mutations:{
        AddPerson(state, value){
            state.PersonList.unshift(value)
        }
    },
    state:{
        PersonList:[
            {id:'001',name:'张三🐒'}
        ]
    },
    getters:{
        firstPersonName(state) {
            return state.PersonList[0].name
        }
    }
}
