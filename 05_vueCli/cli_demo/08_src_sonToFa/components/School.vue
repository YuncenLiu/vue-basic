<template lang="">
  <div class="demo">
    <h2>学习名称:{{ name }}</h2>
    <h2>学校人数:{{ count }}</h2>
    <button @click="sendSchoolName">把名字传递给父组件</button>
  </div>
</template>
<script>
export default {
  name: "school",
  data() {
    return {
      name: "北京大学",
      count: 10000,
    };
  },
  props:['getSchoolName'],
  methods:{
    sendSchoolName(){
      this.getSchoolName(this.name)
    }
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
