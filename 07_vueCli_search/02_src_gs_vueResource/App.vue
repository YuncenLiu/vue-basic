<template>
    <div class="container">
      <SearchComponent/>
      <ListComponent/>
    </div>
</template>

<script>
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
