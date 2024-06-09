<template>
  <div>
    <h4>我是 HomeMessage 内容</h4>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!-- 调整路由并携带 query 参数，to 的字符串写法 -->
<!--        <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link>-->

<!--        Params参数 字符串写法后面为参数路由 Router配置需要写成： path: 'detail/:id/:title', -->
<!--        <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link>-->

<!--        使用name选择路由 -->
        <router-link :to="{
          // path: '/home/message/detail/123/123',
          name: 'homeMessageDetail',
          query: {
            id: m.id,
            title: m.title
          },

          // 需要注意的是，如果使用 params 参数，不允许使用 path，只能使用 name路由
          // params: {
          //   id: m.id,
          //   title: m.title
          // }
        }">
          {{m.title}}
        </router-link>
        <button @click="pushShow(m)">push查看</button>
        <button @click="replaceShow(m)">replace查看</button>
      </li>
    </ul>
    <hr>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "HomeMessage",
  data() {
    return {
      messageList: [
        {id: '001', title: '消息001'},
        {id: '002', title: '消息002'},
        {id: '003', title: '消息003'}
      ]
    }
  },
  methods:{
    pushShow(m){
      this.$router.push({
        name: 'homeMessageDetail',
        query:{
          id: m.id,
          title: m.title
        }
      })
    },
    replaceShow(m){
      this.$router.replace({
        name: 'homeMessageDetail',
        query:{
          id: m.id,
          title: m.title
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
