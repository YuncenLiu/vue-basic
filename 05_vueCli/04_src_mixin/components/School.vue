<template lang="">
  <div class="school">
    <h2 @click="showName">学习名称:{{ name }}</h2>
    <br/>
    当文件内 data 与混合 data 冲突时，以文件内 data 为主
    <h2>混合数据:{{x}}</h2>
    混合中的生命周期内执行优先级要高，就是混合内里的先执行
    <h2>学校人数:{{ count }}</h2>
  </div>
</template>
<script>
// import {mixin,datas} from '../mixin'
export default {
  name: "school",
  data() {
    return {
      name: "北京大学",
      count: 10000,
      x: 140
    };
  },
//   mixins:[mixin,datas],
  mounted(){
    console.log('mounted - 1');
  }
};
</script>
<style>
/* .school {
    background-color: darkgray;
} */
</style>
