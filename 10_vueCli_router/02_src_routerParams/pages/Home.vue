<template>
  <div>
    <h2>我是 Home 内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/news" >News</router-link>
        </li>
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/message" >Message</router-link>
        </li>
      </ul>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    // console.log('Home mounted')
  },
  beforeDestroy() {
    // console.log('Home will destroy')
  }
}
</script>

<style scoped>

</style>
