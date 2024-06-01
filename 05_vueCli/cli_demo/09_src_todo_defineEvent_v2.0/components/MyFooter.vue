<template lang="">
  <div class="todo-footer" v-show="total">
    <label>
      <!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->
      <input type="checkbox" v-model="isAll"/>
    </label>
    <span>已完成 {{doneTotal}}</span> / 全部 {{todos.length}}
    <button class="btn btn-danger" @click="clearLocalStorage">清空LocalStorage</button>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>
<script>
export default {
  name: "MyFooter",
  props: ['todos'],
  methods: {
    checkAll(e) {
      this.$emit('checkAllTodo',e.target.checked)
    },
    clearAll(){
      this.$emit('removeAllTodo')
    },
    clearLocalStorage(){
      localStorage.clear()
    }
  },
  computed: {
    total() {
      return this.todos.length
    },
    doneTotal() {
      return this.todos.reduce((pre, current) => {
        return pre + (current.done ? 1 : 0)
      }, 0)
    },
    isAll:{
      get(){
        return this.total === this.doneTotal && this.total > 0
      },
      set(value){
        this.$emit('checkAllTodo',value)
      }
    }
  }
};
</script>
<style lang="less" scoped>
/* footer */
.todo-footer {
  height: 60%;
  line-height: 60px;
  padding-left: 0px;
  cursor: pointer;
}

.todo-footer label {
  display: inline-block;
  margin-left: 17px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 15px;
  margin-right: 20px;
}
</style>
