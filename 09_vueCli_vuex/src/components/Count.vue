<template>
  <div>
    <h1>当前求和为: {{ sum }}</h1>
<!--    <h4>当前求和乘10为: {{ bigSum }}</h4>-->
    <h2>学校:{{ school }}，学科:{{ subject }}</h2>
    <h3 style="color: pink">Person 组件的总人数:{{PersonList.length}}</h3>
    <select v-model.number="n" name="count" id="count">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>

    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'

export default {
  name: "Count",
  data() {
    return {
      // 当前数据总和
      // 用户选择数据
      n: 1
    }
  },
  computed: {
    // 映射状态 借助 mapState 生成计算属性，读取 state 数据，对象写法
    /*...mapState({
      sum: 'sum',
      school: 'school',
      subject: 'subject'
    })*/
    // 借助 mapState 生成计算属性，读取 state 数据，数组写法
    ...mapState('countOptions',['sum', 'school', 'subject']),
    ...mapState('personOptions',['PersonList']),
    ...mapGetters('countOptions',['bigSum'])
  },
  methods: {

    ...mapActions('countOptions',['increment','decrement','incrementOdd','incrementWait']),
  }
}
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>
