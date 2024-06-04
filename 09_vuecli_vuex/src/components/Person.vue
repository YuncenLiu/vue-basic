<template>
  <div>
    <h1>人员列表</h1>
    <input type="text" placeholder="请输入名字" v-model="name">
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
    ...mapState(['PersonList'])
  },
  methods: {
    ...mapMutations(['AddPerson']),
    add() {
      const personObj = {id: nanoid(), name: this.name}
      this.name = ''
      console.log(personObj)
      this.AddPerson(personObj)
    }
  }
}
</script>

<style scoped>

</style>
