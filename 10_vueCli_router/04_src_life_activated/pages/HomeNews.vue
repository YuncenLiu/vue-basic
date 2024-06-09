<template>
  <div>
    <h4 :style="{opacity}">我是 HomeNews 内容</h4>
    <ul>
      <li>输入的内容可以被保留：<input type="text"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeNews",
  data(){
    return{
      opacity: 1
    }
  },
  beforeCreate() {
    console.log('HomeNews-beforeDestroy')
  },
  beforeDestroy() {
    console.log('HomeNews-beforeDestroy')
  },
  mounted() {
    console.log('HomeNews-mounted')
  },


  activated() {
    console.log('HomeNews-activated')
    this.timer = setInterval(()=>{
      console.log('HomeNews 透明度正在变化')
      this.opacity -= 0.01
      if(this.opacity <= 0) this.opacity = 1.25
    },16)
  },
  deactivated() {
    console.log('HomeNews-deactivated')
    clearInterval(this.timer)
  }
}
</script>

<style scoped>

</style>
