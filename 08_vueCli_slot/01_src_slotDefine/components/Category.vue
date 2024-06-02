<template>
  <div class="category">
    <h3>{{ title }}</h3>
    <!-- 定义插槽，等组件使用者进行填充,如果不填充按默认展示slot标签内容 -->
    <slot>

    </slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ['title']
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