// 该文件用于创建整个应用的路由器
import VueRouter from "vue-router"

import About from "@/pages/About"
import Home from "@/pages/Home"
import HomeMessage from "@/pages/HomeMessage"
import HomeNews from "@/pages/HomeNews"
import Detail from "@/pages/Detail"


// 创建并保留一个路由
export default new VueRouter({
    routes: [
        {
            name: 'about',
            path: '/about',
            component: About
        },
        {
            name: 'home',
            path: '/home',
            component: Home,
            children: [
                {
                    name: 'homeNews',
                    path: 'news',
                    component: HomeNews
                },
                {
                    name: 'homeMessage',
                    path: 'message',
                    component: HomeMessage,
                    children: [
                        {
                            name: 'homeMessageDetail',
                            path: 'detail/:id/:title',
                            component: Detail,
                            // 1、值为键值对，通过 props 传递给组件
                            // props:{a:1,b:'hello'}

                            // 2、值若为 ture，会把路由的 params 参数都会以 props 传递给组件
                            // 但是不理 query 参数
                            // props: true

                            // 3、函数写法
                            // props($router) {
                            //     return {id: $router.query.id, title: $router.query.title}
                            // }
                            // 连续结构赋值
                            props({query: {id, title}}) {
                                return {id, title}
                            }
                        }
                    ]
                }
            ]
        }
    ]
})
