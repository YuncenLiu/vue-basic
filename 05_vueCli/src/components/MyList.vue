<template>
  <ul class="todo-main">
      <transition-group appear name="todo">
        <MyItem
            v-for="todoObj in todos"
            :key="todoObj.id"
            :todo="todoObj"
        />
      </transition-group>
  </ul>
</template>
<script>
import MyItem from "./MyItem.vue";

export default {
  name: "MyList",
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

/* <transition name="hello"> */
.todo-enter-active {
  animation: title 0.2s;
}

.todo-leave-active {
  animation: title 0.2s reverse;
}

@keyframes title {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>
