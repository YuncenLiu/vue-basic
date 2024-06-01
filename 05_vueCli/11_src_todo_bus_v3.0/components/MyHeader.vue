<template lang="">
  <div class="todo-header">
    <input
      type="text"
      placeholder="输入任务名称，回车确认"
      @keyup.enter="add"
    />
  </div>
</template>
<script>
import { nanoid } from "nanoid";
export default {
  name: "MyHeader",

  // 适合多表单采用 data 方式，可以一并处理
  // data(){
  //   return{
  //     title:''
  //   }
  // },
  methods: {
    add(e) {
      if(e.target.value.trim().length < 1){
        alert ('输入不允许为空')
        return
      }
      // 包装对象
      const todoObj = { id: nanoid(), title: e.target.value.trim(), done: false };
      this.$emit('addTodo',todoObj)
      e.target.value = ''
    },
  },
};
</script>
<style lang="less" scoped>
/* header */
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
