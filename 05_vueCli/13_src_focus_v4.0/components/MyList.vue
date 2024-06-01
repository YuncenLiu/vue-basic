<template>
  <ul class="todo-main">
    <MyItem
        v-for="todoObj in todos"
        :key="todoObj.id"
        :todo="todoObj"
    />
    <!-- <MyItem
      v-for="todoObj in todos"
      :key="todoObj.id"
      :todo="todoObj"
      :changeTodo="changeTodo"
      :removeTodo="removeTodo"
    /> -->
  </ul>
</template>
<script>
import MyItem from "./MyItem.vue";

export default {
  name: "MyList",
  // props: ["todos",'changeTodo','removeTodo'],
  props: ["todos"],
  components: {
    MyItem,
  },
};
</script>
<style lang="less" scoped>
/* main */
.todo-main {
  margin: 10px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
