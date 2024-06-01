<template>
  <div>
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader @addTodo="addTodo" />
        <!-- <MyList :todos="todos" :changeTodo="changeTodo" :removeTodo="removeTodo" /> -->
        <MyList :todos="todos" />
        <MyFooter :todos="todos" @checkAllTodo="checkAllTodo" @removeAllTodo="removeAllTodo" />
      </div>
    </div>
  </div>
</template>
<script>
import pubsub from 'pubsub-js'
import MyHeader from "./components/MyHeader.vue";
import MyList from "./components/MyList.vue";
import MyFooter from "./components/MyFooter.vue";
export default {
  name: "App",
  data() {
    return {
      todos: JSON.parse(localStorage.getItem('todos')) || []
    }
  },
  methods: {
    addTodo(x) {
      console.log('我收到了数据', x);
      this.todos.unshift(x)
    },
    checkAllTodo(done) {
      this.todos.forEach(todo => todo.done = done)
    },
    removeAllTodo() {
      this.todos = this.todos.filter(todo => !todo.done)
    },
    updateTodo(msgName,t){
      console.log('修改 todo',t.id,t.title)
      this.todos.forEach(todo => {
        if(todo.id === t.id) todo.title = t.title
      })
    }
  },
  components: {
    MyHeader,
    MyList,
    MyFooter,
  },
  mounted() {
    console.log('往 localStorage 添加一份 Todos');
    const todos = [
      { id: '001', title: '抽烟🚬', done: true , isEdit:false},
      { id: '002', title: '喝酒🍺', done: false, isEdit:false },
      { id: '003', title: '烫头💇', done: false, isEdit:false },
    ]
    localStorage.setItem('todos', JSON.stringify(todos))

    this.changeTodoPubId = pubsub.subscribe('changeTodo', (msgName, id) => {
      console.log('改变状态', msgName, id);
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done
      })
    })

    this.removeTodoPubId = pubsub.subscribe('removeTodo', (msgName, id) => {
      console.log("删除这个todo", msgName, id);
      this.todos = this.todos.filter(todo => todo.id !== id)
    })

    this.updateTodoTitlePubId = pubsub.subscribe('updateTodoTitle', this.updateTodo)
  },
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem('todos', JSON.stringify(value))
      }
    }
  },
  beforeDestroy() {
    pubsub.unsubscribe(this.changeTodoPubId)
    pubsub.unsubscribe(this.removeTodoPubId)
    pubsub.unsubscribe(this.updateTodoTitlePubId)
  }
};
</script>
<style lang="less">
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  margin: 0 5px;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-edit {
  background-color: #49dad3;
  border: 1px solid #2fa1bd;
}

.btn-danger {
  background-color: #da4e49d1;
  border: 1px solid #bd362fca;
}

.btn-edit:hover {
  background-color: #49acda;
  border: 1px solid #2f5cbd;
}

.btn-danger:hover {
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
  margin-top: 40px;
  border: 1px solid #ddd;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border: 5px;
}
</style>
