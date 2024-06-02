<template>
  <div class="container">
    <Category title="美食" :listData="foods">
      <img src="https://i0.hdslb.com/bfs/archive/1ee8790f3491c4402b59fc67e9ea1018d55a994e.jpg" alt="">
    </Category>
    <Category title="游戏" :listData="games">
      <ul>
        <li v-for="(item,index) in games" :key="index">{{item}}</li>
      </ul>
    </Category>
    <Category title="电影" :listData="films">
      <video controls src="https://media.w3.org/2010/05/sintel/trailer.mp4"></video>
    </Category>
  </div>
</template>

<script>
import Category from "@/components/Category";
export default {
  name: 'App',
  components:{
    Category
  },
  data(){
    return{
      foods:['火锅','烧烤','小龙虾','牛排'],
      games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
      films:['《教父》','《拆弹专家》','《你好，李焕英》','《猫和老鼠》']
    }
  }
}
</script>

<style lang="css" scoped>
.container{
  display: flex;
  justify-content: space-around;
}
img {
  width: 100%;
}
video{
  width: 100%;
}
</style>
