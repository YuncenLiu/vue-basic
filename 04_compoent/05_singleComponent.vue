<template lang="">
    <div class="demo">
        <h2>学校名称:{{schoolName}}</h2>
        <h2>学校地址:{{address}}</h2>
        <button @click="showName">点击提示学校名字</button>
    </div>
</template>
<script>
export default {
    name: 'school',
    data(){
        return{
            schoolName: '北京大学',
            address: '北京',
        }
    },
    methods:{
        showName(){
            alert(this.schoolName)
        }
    }
}
</script>
<style>
    .demo{
        background-color: orange;
    }
</style>