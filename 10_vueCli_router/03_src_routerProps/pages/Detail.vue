<template>
  <ul>
<!--    <li>消息编码：{{ $route.query.id }}</li>-->
<!--    <li>消息标题：{{ $route.query.title }}</li>-->

<!--        <li>消息编码：{{ $route.params.id }}</li>-->
<!--        <li>消息标题：{{ $route.params.title }}</li>-->
<!--    <li>a:{{a}}</li>-->
<!--    <li>b:{{b}}</li>-->

    <li>消息编码：{{ id }}</li>
    <li>消息标题：{{ title }}</li>
  </ul>
</template>

<script>
export default {
  name: "Detail",
  // props:['a','b'],
  props: ['id','title'],
  mounted() {
    console.log(this.$route.query)
  }
}
</script>

<style scoped>

</style>
