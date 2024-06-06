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
            children:[
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
                        }
                    ]
                }
            ]
        }
    ]
})
