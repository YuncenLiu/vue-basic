<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color:pink;">Count组件求和为：{{sum}}</h3>
    <h3>列表中第一个人的名字:{{firstPersonName}}</h3>
    <input type="text" placeholder="请输入名字" v-model="name"  @keyup.enter="add">
    <button @click="add">添加</button>
    <ul>
      <li v-for="p in PersonList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
import {mapState,mapMutations} from 'vuex'

export default {
  name: "Person",
  data() {
    return {
      name: ''
    }
  },
  computed: {
    ...mapState('personOptions',['PersonList']),
    ...mapState('countOptions',['sum']),
    firstPersonName(){
      return this.$store.getters["personOptions/firstPersonName"]
    }
  },
  methods: {
    ...mapMutations('personOptions',['AddPerson']),
    add() {
      const personObj = {id: nanoid(), name: this.name}
      this.name = ''
      console.log(personObj)
      // this.AddPerson(personObj)


      this.$store.commit('personOptions/AddPerson',personObj)
    }
  }
}
</script>

<style scoped>

</style>
