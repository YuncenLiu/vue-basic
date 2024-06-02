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
export default {
  name: "SearchComponent",
  data(){
    return{
      keyWord: ''
    }
  },
  methods:{
    searchUsers(){
      console.log(this)
      this.$bus.$emit('updateListData',{users:[],isFirst:false,isLoading:true,errMsg:''})
      this.$http.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
          response =>{
            console.log('请求成功了')
            this.$bus.$emit('updateListData',{users:response.data.items,isLoading:false,errMsg:''})
          },
          error => {
            console.log('请求失败了',error.message)
            this.$bus.$emit('updateListData',{users:[],isLoading:false,errMsg:error.message})
          }
      )
    }
  }
}
</script>

<style scoped lang="less">

</style>