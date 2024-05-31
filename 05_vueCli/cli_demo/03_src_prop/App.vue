<template>
    <div>
        <School name="北京大学" address="南昌" :count="1"/>
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
    },
}
</script>
<style lang="">
    
</style>