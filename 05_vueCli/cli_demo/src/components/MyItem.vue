<template lang="">
  <li>
    <label>
      <input type="checkBox" :checked="todo.done" @click="handlerCheck(todo.id)"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" @click="deleteTodo(todo.id)">删除</button>
  </li>
</template>
<script>
export default {
  name: "MyItem",
  // props: ['todo', 'changeTodo','removeTodo'],
  props: ['todo'],
  data() {
    return {
      done: true
    }
  },
  methods: {
    handlerCheck(id) {
      // 通知 APP 组件将对应todo done值取反
      // this.changeTodo(id)
      this.$bus.$emit('changeTodo',id)
    },
    deleteTodo(id) {
      if(confirm('确定删除嘛？')){
        // this.removeTodo(id)
        this.$bus.$emit('removeTodo',id)
      }
    }
  }
};
</script>
<style lang="less" scoped>
/* item */
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label span {
  margin-left: 10px;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  contain: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover button {
  display: block;
}
</style>
