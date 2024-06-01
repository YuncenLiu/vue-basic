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
import pubsub from 'pubsub-js'
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
    getName(msgName,data){
      console.log('hello 消息接收成功',this,msgName,data)
    }
  },
  mounted(){
    // this.pubId = pubsub.subscribe('hello',(msgName,data) => {
    //   console.log('hello 消息发布成功!',msgName,data)
    //   console.log('使用 => 箭头函数获取 this',this)
    // })

    pubsub.subscribe('hello',this.getName)
  },
  beforeDestroy(){
    // 取消订阅
    pubsub.unsubscribe(this.pubId)
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
