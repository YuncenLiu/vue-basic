<template>
  <div style="height: 200px">
    <br><br>
    <button @click="isShow =! isShow">显示/隐藏</button>
    <transition-group name="hello" appear>
      <h1 v-show="isShow" key="1">你好啊！Test1-1</h1>
      <h1 v-show="isShow" key="2">你好啊！Test1-2</h1>
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
.hello-enter-active{
  animation: title 0.2s;
}

.hello-leave-active{
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