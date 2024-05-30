<template lang="">
    <div class="school">
        <h2>学习名称:{{name}}</h2>
        <h2>学校地址:{{address}}</h2>
        <h2>学校人数:{{myCount}}</h2>

        尝试修改收到的数据
        <button @click="updateCount">修改人数</button>
    </div>
</template>
<script>
export default {
    name: 'school',
    data(){
        return{
            myCount: this.count
        }
    },
    // 简单接收
    // props:['name','address','count']

    // 接收的同时对数据进行类型限制
    // props:{
    //     name:String,
    //     address:String,
    //     count:Number
    // }

    // 补充对必要性的限制
    props: {
        name: {
            type: String,
            // 必传
            required: true,
        },
        address: {
            type: String,
            required: true
        },
        count:{
            type: Number,
            default: 1000
        }
    },
    methods:{
        updateCount(){
            this.myCount = this.myCount + 2
        }
    }
}
</script>
<style>
.school {
    background-color: darkgray;
}
</style>