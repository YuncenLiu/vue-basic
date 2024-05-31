<template lang="">
  <div class="demo">
    <h2>学习名称:{{ name }}</h2>
    <h2>学校人数:{{ count }}</h2>
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
  }
};
</script>
<style lang="less" scoped>
.demo {
    background-color: pink;
}
</style>
