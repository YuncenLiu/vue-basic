<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="keyWord"/> &nbsp;
      <button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  name: "SearchComponent",
  data(){
    return{
      keyWord: ''
    }
  },
  methods:{
    searchUsers(){
      axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
          response =>{
            console.log('请求成功了')
            this.$bus.$emit('getUsers',response.data.items)
          },
          error => {
            console.log('请求失败了',error.message)
          }
      )
    }
  }
}
</script>

<style scoped lang="less">

</style>