import vue from 'vue'
import vueRouter from 'vue-router'
import VueRouter from 'vue-router'

const Carto=()=>import ('../views/carto/carto')
const Home=()=>import ('../views/home/home')
const Category=()=>import('../views/category/category')
const Profile=()=>import('../views/profile/profile')
const Details=()=>import('../views/details/details')
vue.use(vueRouter)
const routes=[
    {
        path:'/',
        redirect:"/home"
    },
    {
        path:'/home',
        component:Home
    },{
        path:'/carto',
        component:Carto
    },{
        path:'/category',
        component:Category
    },{
        path:'/profile',
        component:Profile
    },{
        path:'/details/:iid',
        component:Details
    }
]
const router=new VueRouter({
    routes,
    mode:'history'
})
export default router