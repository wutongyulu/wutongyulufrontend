import Vue from 'vue'
import VueRouter from 'vue-router'
const  Home  = () => import('../views/Home')
const  Login  = () => import('../views/Login')
const Registe = ()=>import('../views/Registe')
const BlogDocm = ()=>import('../views/BlogDocm')
const CreatedBlog = ()=>import('../views/CreatedBlog')


Vue.use(VueRouter)


const routes = [
    {
        //编写文档页面
        path:"/createdBlog",
        component:CreatedBlog,
        meta:{
            title:"createdBlog聚沙成塔嘛"
        }
    },
{
        //文档查看
    path:"/blogDocm",
    component:BlogDocm,
    meta:{
        title:"BlogDocm 这些你用的上吧！"
    }
},


    {
        //注册
        path:"/registe",
        component:Registe,
        meta:{
            title:"Registe-你要入伙?！"
        }

    },

    {
        // 登录 
        path:"/login",
        component:Login,
        meta:{
            title:"Login-登录！"
        }

    },
    {
        //首页
        path: "/home",
        component: Home,
        meta: {
            title: "梧桐与鹿"
        }
    },
    {
        path: '',
        redirect: '/home'
    }

]

const router = new VueRouter({
    mode: 'history',
    routes
})
router.beforeEach((to,from,next)=>{
    document.title=to.matched[0].meta.title
    next()
  })
export default router
