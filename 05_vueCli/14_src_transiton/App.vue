<template>
  <div>
    <Test/>
    <hr>
    <Test2/>
    <hr>
    <Test3/>
  </div>
</template>
<script>
import Test from './components/Test'
import Test2 from './components/Test2'
import Test3 from './components/Test3'

export default {
  name: "App",
  data() {
    return{

    }
  },
  components: {Test,Test2,Test3}
}
</script>
<style lang="less">

</style>
