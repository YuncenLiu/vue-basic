<template>
  <div>
    <h2 @click="showName">机构名称：{{ name }}</h2>
    <h2>混合数据:{{x}}</h2>
    <h2>地址：{{ address }}</h2>
  </div>
</template>
<script>
// import {mixin,datas} from '../mixin'
export default {
  name: "Edu",
  data() {
    return {
      name: "北京市教育局",
      address: "北京",
    };
  },
//   mixins:[mixin,datas]
};
</script>
<style lang=""></style>
