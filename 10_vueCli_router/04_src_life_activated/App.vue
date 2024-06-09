<template>
  <div id="app">
    <div class="row">
      <Banner/>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- vue中借助 router-link 标签实现路由切换 -->

<!--          replace 让浏览器点击后无法回撤 -->
<!--          <router-link replace class="list-group-item" active-class="active" :to="{name:'home'}">Home</router-link>-->
<!--          <router-link replace class="list-group-item" active-class="active" to="/about">About</router-link>-->

          <router-link  class="list-group-item" active-class="active" :to="{name:'home'}">Home</router-link>
          <router-link  class="list-group-item" active-class="active" to="/about">About</router-link>

        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 指定组件的呈现位置 -->
            <router-view/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "@/components/Banner";

export default {
  name: 'App',
  components: {Banner},
}
</script>

<style>
</style>
