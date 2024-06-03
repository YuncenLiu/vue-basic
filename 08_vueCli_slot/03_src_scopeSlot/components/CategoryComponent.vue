<template>
  <div class="category">
    <h3>{{ title }}</h3>
    <slot :games="games" :msg="msg">
      默认内容
    </slot>
  </div>
</template>

<script>
export default {
  name: "CategoryComponent.vue",
  props: ['title'],
  data() {
    return {
      games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
      msg: 'hello'
    }
  }
}
</script>

<style scoped>
.category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}

h3 {
  text-align: center;
  background-color: orange;
}


</style>
