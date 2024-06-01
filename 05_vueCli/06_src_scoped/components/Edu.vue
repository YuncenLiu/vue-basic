<template>
  <div class="demo">
    <h2>机构名称：{{ name }}</h2>
    <h2 class="xiang">地址：{{ address }}</h2>
  </div>
</template>
<script>
export default {
  name: "Edu",
  data() {
    return {
      name: "北京市教育局",
      address: "北京",
    }
  },
}
</script>
<style lang="less" scoped>
.demo {
  background-color: blanchedalmond;
  .xiang {
    font-size: 40px;
  }
}
</style>
