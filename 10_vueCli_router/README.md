## vue-rote

vue 的一个插件库，专门用来实现 SPA 应用

### SPA理解

1. 单页面 Web 应用（Single page web application） SPA
2. 整个应用只有一个完整的页面
3. 点击页面中的导航连接，不会刷新页面，只会做页面的局部更新
4. 数据需要通过 ajax 请求获取


### 路由 

1. 什么是路由
   1. 一个路由就是一组映射关系 k-v
   2. key 为路径，value 可能是 function 或 component
2. 路由分类
   1. 后端路由
      1. 理解 value 是 function 用于处理客户端提交的请求
      2. 工作过程：服务器收到一个请求，根据请求路径找到匹配的函数来处理请求，返回相应数据
   2. 前端路由
      1. 理解 value 是 component，用于展示页面内容
      2. 工作过程：当浏览器的路径改变时，对应的组件就会显示