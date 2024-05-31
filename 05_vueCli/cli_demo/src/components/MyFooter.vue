<template lang="">
  <div class="todo-footer">
    <label>
      <input type="checkbox" />
    </label>
    <span>已完成0</span> / 全部 2
    <button class="btn btn-danger">清除已完成任务</button>
  </div>
</template>
<script>
export default {
  name: "MyFooter",
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
