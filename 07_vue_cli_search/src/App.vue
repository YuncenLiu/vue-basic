<template>
    <div class="container">
      <SearchComponent/>
      <ListComponent/>
    </div>
</template>

<script>
// VueCLi 会严格检查
// 下载地址: https://github.com/twbs/bootstrap/releases?q=3.3.5&expanded=true
// import './assets/bootstrap-3.3.5/css/bootstrap.css'

import SearchComponent from './components/SearchComponent'
import ListComponent from './components/ListComponent'

export default {
  name: 'App',
  components:{
    SearchComponent,ListComponent
  }
}
</script>

<style scoped lang="less">

</style>
