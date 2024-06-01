<template lang="">
    <div class="school">
        <h2>学习名称:{{name}}</h2>
        <h2>学校地址:{{address}}</h2>
    </div>
</template>
<script>
export default {
    name: 'school',
    data(){
        return {
            name:'北京大学',
            address:'北京'
        }
    }

}
</script>
<style>
    .school{
        background-color: orange;
    }
</style>