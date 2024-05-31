<template>
  <div>
    <h2>机构名称：{{ name | mySlice}}</h2>
    <h2>地址：{{ address }}</h2>
    <input type="text" v-fbind:value="n">
    <br><br>
    <button @click="test">测试 plugins hello 方法</button>
  </div>
</template>
<script>
export default {
  name: "Edu",
  data() {
    return {
      name: "北京市教育局",
      address: "北京",
      n: 100
    };
  },
  methods:{
    test(){
      this.hello()
    }
  }
};
</script>
<style lang=""></style>
