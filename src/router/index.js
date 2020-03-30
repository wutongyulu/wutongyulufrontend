import Vue from 'vue'
import VueRouter from 'vue-router'
const  Home  = () => import('../views/Home')
const  Login  = () => import('../views/Login')
const Registe = ()=>import('../views/Registe')

Vue.use(VueRouter)


const routes = [

    {
        //注册
        path:"/registe",
        component:Registe,
        meta:{
            title:"Registe-快入伙吧！"
        }

    },

    {
        // 登录 
        path:"/login",
        component:Login,
        meta:{
            title:"Login-是登录呀！"
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
