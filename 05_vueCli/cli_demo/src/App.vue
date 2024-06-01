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
    // changeTodo(id) {
    //   console.log('改变状态', id);
    //   this.todos.forEach((todo) => {
    //     if (todo.id === id) todo.done = !todo.done
    //   })
    // },
    // removeTodo(id) {
    //   console.log("删除这个todo", id);
    //   this.todos = this.todos.filter(todo => todo.id !== id)
    // },
    checkAllTodo(done) {
      this.todos.forEach(todo => todo.done = done)
    },
    removeAllTodo() {
      this.todos = this.todos.filter(todo => !todo.done)
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
      { id: '001', title: '抽烟🚬', done: true },
      { id: '002', title: '喝酒🍺', done: false },
      { id: '003', title: '烫头💇', done: false },
    ]
    localStorage.setItem('todos', JSON.stringify(todos))

    this.$bus.$on('changeTodo', (id) => {
      console.log('改变状态', id);
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done
      })
    })

    this.$bus.$on('removeTodo', (id) => {
      console.log("删除这个todo", id);
      this.todos = this.todos.filter(todo => todo.id !== id)
    })
  },
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem('todos', JSON.stringify(value))
      }
    }
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
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  // box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
  //   0 1px 2px rgba(0, 0, 0, 0.05);
  background-color: #da4e49d1;
  border: 1px solid #bd362fca;
  border-radius: 4px;
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
