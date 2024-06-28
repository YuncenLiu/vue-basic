<template>
  <div class="demo">
    <h2>机构名称：{{ name }}</h2>
    <h2 class="xiang">地址：{{ address }}</h2>
    <!-- <button @click="sendEduName">把名字传递给父组件</button> -->
    <button @click="sendEduNameVon">把名字传递给父组件</button>
    <br><br>
    <button @click="unbind">解除绑定</button>
    <br><br>
    <button @click="diss">消除当前组件实例对象</button>
  </div>
</template>
<script>
export default {
  name: "Edu",
  data() {
    return {
      name: "北京市教育局",
      address: "北京",
      level: 100,
      org: "机构",
    }
  },
  // props: ['getSchoolName'],
  methods:{
    // sendEduName(){
    //   this.getSchoolName(this.name)
    // },
    sendEduNameVon(){
      // 触发父组件
      this.$emit('getName',this.name,this.address,this.level,this.org)
    },
    unbind(){
      console.log('解除绑定 getName');
      // 解绑单个事件
      // this.$off('getName')

      // 解绑多个方式
      // this.$off(['getName','xxx'])

      // 全部解绑
      this.$off()
    },
    diss(){
      // 销毁当前 Edu 组件实例
      this.$destroy()
      // 销毁后所有组件的实例的自定义事件都不奏效了
    }
  }
}
</script>
<style lang="less" scoped>
.demo {
  background-color: blanchedalmond;
  padding: 5px;
  margin: 20px;
}
</style>
