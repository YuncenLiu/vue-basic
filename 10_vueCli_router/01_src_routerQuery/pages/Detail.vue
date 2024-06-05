<template>
  <ul>
    <li>消息编码：{{ $route.query.id }}</li>
    <li>消息标题：{{ $route.query.title }}</li>
  </ul>
</template>

<script>
export default {
  name: "Detail",
  mounted() {
    console.log(this.$route.query)
  }
}
</script>

<style scoped>

</style>
