<template lang="">
  <div class="demo">
    <h2>学习名称:{{ name }}</h2>
    <h2>学校人数:{{ count }}</h2>
    <button @click="sendSchoolName">传递 name 给 Edu</button>
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
  methods:{
    sendSchoolName(){
      this.$bus.$emit('hello',this.name)
    }
  },
  mounted(){
    // console.log('vue.protptype.x',this.x.$on)
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
