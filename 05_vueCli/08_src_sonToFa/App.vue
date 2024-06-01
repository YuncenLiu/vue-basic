<template>
  <div class="app">
    <h2>{{ msg }}</h2>
    <School :getSchoolName="getSchoolName" />
    <hr />
    <!-- 通过 v-on 实现子父传递 -->
    <!-- <Edu @getName.once="getName" /> -->

    <!-- 通过 mounted ref 实现子父传递，灵活性更高，可以等页面延时后再绑定子父通信事件  -->
    <Edu ref="getName" @click.native="show"/>
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
    getSchoolName(name) {
      // this.msg = this.msg + name
      console.log('App getSchoolName', name);
    },
    getName(name, ...parms) {
      // this.msg = this.msg + name
      console.log('App getName', name, parms);
    },
    show(){
      alert('studet 组件触发 show')
    }
  },
  mounted() {
    // 给子组件身上放一个回调函数
    // this.$refs.getName.$on('getName',this.getName)

    // 只触发一次
    // this.$refs.getName.$once('getName',this.getName)

    this.$refs.getName.$on('getName', function (name, ...params) {
      console.log('App getName', name, params);
      console.log('this',this.$el);
    })

    // this.$refs.getName.$on('getName', (name, ...params)=> {
    //   console.log('App getName', name, params);
    //   console.log('this',this.$el);
    // })
  }
};
</script>
<style lang="less" scoped>
.app {
  background: #ddd;
}
</style>
