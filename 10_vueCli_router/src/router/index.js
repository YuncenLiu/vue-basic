// 该文件用于创建整个应用的路由器
import VueRouter from "vue-router"

import About from "@/pages/About"
import Home from "@/pages/Home"
import HomeMessage from "@/pages/HomeMessage"
import HomeNews from "@/pages/HomeNews"
import Detail from "@/pages/Detail"


// 创建并保留一个路由
// connect-history-api-fallback 解决 history 刷新问题
const router = new VueRouter({
    mode: 'history',
    // mode: 'hash',
    routes: [
        {
            name: 'about',
            path: '/about',
            component: About,
            meta:{title:'关于'}
        },
        {
            name: 'home',
            path: '/home',
            component: Home,
            meta:{title:'主页'},
            children: [
                {
                    name: 'homeNews',
                    path: 'news',
                    component: HomeNews,
                    meta:{isAuth:true,title:'新闻'},
                    // 独享路由,只有前置,没有后置
                    beforeEnter:(to,from,next) => {
                        console.log('独享路由 beforeEnter')
                        next();
                    }
                },
                {
                    name: 'homeMessage',
                    path: 'message',
                    component: HomeMessage,
                    meta:{isAuth:true,title:'信息'},
                    children: [
                        {
                            name: 'homeMessageDetail',
                            path: 'detail/:id/:title',
                            component: Detail,
                            meta:{isAuth:true,title:'详情'},
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

// 全局前置路由守卫，每次路由切换之前被调用
router.beforeEach((to,from, next) => {
    console.log('router-beforeEach')

    if (to.meta.isAuth){
        if(localStorage.getItem('darkyState')==='f' ){
            next()
        }else{
            alert('浏览器本地内存中 darkyState 值不是 f')
        }
    }else{
        next()
    }
})

// 后置路由守卫
router.afterEach((to,from) =>{
    document.title = to.meta.title || 'Hello Vue'
    console.log('router-afterEach')
})



export default router