<template>
  <div>
    <h4>我是 HomeMessage 内容</h4>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!-- 调整路由并携带 query 参数，to 的字符串写法 -->
<!--        <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link>-->

        <router-link :to="{
          path: '/home/message/detail',
          query: {
            id: m.id,
            title: m.title
          }
        }">
          {{m.title}}
        </router-link>
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
  }
}
</script>

<style scoped>

</style>
