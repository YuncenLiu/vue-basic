<template>
  <div>
    <h2>我是 About 内容</h2>
    <button @click="ping">全屏</button>
    <button @click="exitPing">退出全屏</button>
    <br>
  </div>
</template>

<script>
export default {
  name: "About",
  methods: {
    ping() {
      console.log('全屏')
      this.ele = document.documentElement;
      this.ele.requestFullscreen();
    },
    exitPing(){
      document.exitFullscreen();
      // this.ele.exitFullscreen();
    }
  },
  mounted() {
    // console.log('About mounted')
  },
  beforeDestroy() {
    // console.log('About will destroy')
  },
  beforeRouteEnter(to, from, next) {
    console.log('about beforeRouteEnter')
    next()
  },
  beforeRouteLeave(to, from, next) {
    console.log('about beforeRouteLeave')
    next()

  }
}
</script>

<style scoped>

</style>
