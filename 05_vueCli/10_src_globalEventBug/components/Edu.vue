<template>
  <div class="demo">
    <h2>机构名称：{{ name }}</h2>
    <h2 class="xiang">地址：{{ address }}</h2>
    <ul>
      <li v-for="(s,index) in schools" :key="index">{{ s }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Edu",
  data() {
    return {
      name: "北京市教育局",
      address: "北京",
      level: 100,
      org: "机构",
      schools: []
    }
  },
  methods:{
   
  },
  mounted(){
    this.$bus.$on('hello',(data)=>{
      console.log('我是 Edu 组件,收到了数据',data)
      this.schools.push(data)
    })
  },
  beforeDestroy(){
    this.$bus.$off('hello')
  }
}
</script>
<style lang="less" scoped>
.demo {
  background-color: blanchedalmond;
  padding: 5px;
  margin: 20px;
}
</style>
