<template>
  <div class="app">
    <h2>{{ msg }}</h2>
    <School/>
    <hr/>
    <Edu/>
  </div>
</template>
<script>
import School from "./components/School.vue";
import Edu from "./components/Edu.vue";
export default {
  name: "App",
  components: {
    School,
    Edu,
  },
  data() {
    return {
      msg: "吃饭🍚",
    };
  },
  methods: {
  
  },
  mounted() {
    
  }
};
</script>
<style lang="less" scoped>
.app {
  background: #ddd;
}
</style>
