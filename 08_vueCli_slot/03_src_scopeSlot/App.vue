<template>
  <div class="container">

    <CategoryComponent title="游戏">
      <!--      必须使用 template 结构-->
      <template scope="demo">
        <ul>
          <li v-for="(item,index) in demo.games" :key="index">{{ item }}</li>
        </ul>
        <a  class="foot" href="http://liuyuncen.com">{{demo.msg}}</a>
      </template>
    </CategoryComponent>

    <CategoryComponent title="游戏">
      <!--      必须使用 template 结构-->
      <template scope="demo">
        <ol>
          <li v-for="(item,index) in demo.games" :key="index">{{ item }}</li>
        </ol>
      </template>
    </CategoryComponent>

    <CategoryComponent title="游戏">
      <!--      必须使用 template 结构-->
      <template scope="demo">
        <h4 v-for="(item,index) in demo.games" :key="index">{{ item }}</h4>
      </template>
    </CategoryComponent>
  </div>
</template>

<script>
import CategoryComponent from "@/components/CategoryComponent";

export default {
  name: 'App',
  components: {
    CategoryComponent
  }
}
</script>

<style lang="css" scoped>
.container, .foot , h4{
  display: flex;
  justify-content: space-around;
}

img {
  width: 100%;
}

video {
  width: 100%;
}

</style>
