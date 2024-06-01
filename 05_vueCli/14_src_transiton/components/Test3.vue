<template>
  <div style="height: 200px">
    <br><br>
    <button @click="isShow =! isShow">显示/隐藏</button>
    <transition-group
        appear
        name="animate__animated animate__bounce"
        enter-active-class="animate__swing"
        leave-active-class="animate__backOutDown"
    >
      <h1 v-show="isShow" key="1">你好啊！Test3-1</h1>
      <h1 v-show="isShow" key="2">你好啊！Test3-2</h1>
    </transition-group>
  </div>
</template>

<script>
// css 样式不需要 from
import 'animate.css'

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

</style>