<template>
    <div>
        <School ref="sch"/>
        <h1 v-text="msg" ref="title"></h1>
        <button @click="showDom">点我输出DOM元素</button>
    </div>
</template>
<script>
import School from './components/School.vue'
export default {
    name: 'App',
    components:{
        School
    },
    data(){
        return {
            msg:'1'
        }
    },
    methods: {
        showDom(){
            console.log(this.$refs.sch);
        }
    },
}
</script>
<style lang="">
    
</style>