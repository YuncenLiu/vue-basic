<template lang="">
    <div class="demo">
        <h2>姓名:{{name}}</h2>
        <h2>年龄:{{age}}</h2>
    </div>
</template>
<script>
export default {
    name: 'school',
    data(){
        return{
            name: '张三',
            age: 19,
        }
    }
}
</script>
<style>
    .demo{
        background-color: orange;
    }
</style>