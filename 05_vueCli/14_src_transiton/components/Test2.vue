<template>
  <div style="height: 200px">
    <br><br>
    <button @click="isShow =! isShow">显示/隐藏</button>
    <transition-group name="hello" appear>
      <h1 v-show="isShow" key="1">你好啊！Test2-1</h1>
      <h1 v-show="isShow" key="2">你好啊！Test2-2</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      isShow: true
    }
  }
}
</script>

<style class="lang" scoped>
h1 {
  background-color: orange;

}

/* <transition name="hello"> */
/* 进入起点 */ /* 离开终点 */
.hello-enter, .hello-leave-to {
  transform: translateX(-100%);
}

/* 进入终点 */ /* 离开起点 */
.hello-enter-to, .hello-leave {
  transform: translateX(0);
}

.hello-enter-active, .hello-leave-active {
  transition: 0.2s linear;
}
</style>