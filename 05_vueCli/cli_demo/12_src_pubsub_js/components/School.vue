<template lang="">
  <div class="demo">
    <h2>学习名称:{{ name }}</h2>
    <h2>学校人数:{{ count }}</h2>
    <button @click="sendSchoolName">传递 name 给 Edu</button>
  </div>
</template>
<script>
import pubsub from 'pubsub-js'
export default {
  name: "school",
  data() {
    return {
      name: "北京大学",
      count: 10000,
    };
  },
  methods:{
    sendSchoolName(){
      pubsub.publish('hello',this.name)
    }
  },
  mounted(){
  }
};
</script>
<style lang="less" scoped>
.demo {
    background-color: pink;
    padding: 5px;
    margin: 20px;
}
</style>
