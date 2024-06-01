<template>
  <li>
    <label>
      <input type="checkBox" :checked="todo.done" @click="handlerCheck(todo.id)"/>
      <span v-show="!todo.isEdit">{{ todo.title }}</span>
      <input
          type="text"
          v-show="todo.isEdit"
          :value="todo.title"
          @blur="handleBluer(todo,$event)"
          ref="inputTitle"
      />
    </label>
    <button class="btn btn-danger" @click="deleteTodo(todo.id)">删除</button>
    <button class="btn btn-edit" v-show="!todo.isEdit" @click="updateTodo(todo)">编辑</button>
  </li>
</template>
<script>
import pubsub from "pubsub-js";

export default {
  name: "MyItem",
  props: ['todo'],
  data() {
    return {
      done: true,
    }
  },
  methods: {
    handlerCheck(id) {
      pubsub.publish('changeTodo', id)
    },
    updateTodo(todo) {
      console.log('修改todo')
      this.todo.isEdit = !this.todo.isEdit

      // input 在隐藏状态下无法直接获取焦点
      /*setTimeout(() => {
        this.$refs.inputTitle.focus()
      }, 200)*/

      // 会在 dom 节点更新完成后执行
      this.$nextTick(function () {
        this.$refs.inputTitle.focus()
      })
    },
    deleteTodo(id) {
      if (confirm('确定删除嘛？')) {
        pubsub.publish('removeTodo', id)
      }
    },
    handleBluer(todo, e) {
      this.todo.isEdit = !this.todo.isEdit
      if (!e.target.value.trim()) return alert('输入不能为空')
      // 复制对象
      const todoObj = Object.assign({}, todo)
      todoObj.title = e.target.value
      pubsub.publish('updateTodoTitle', todoObj)

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
