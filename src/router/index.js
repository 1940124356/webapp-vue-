import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Home=()=>import('@/views/Home.vue')
const Find=()=>import('@/views/Find.vue')
const Cart=()=>import('@/views/Cart.vue')
const User=()=>import('@/views/User.vue')
const List=()=>import('@/views/List.vue')
const Detail=()=>import('@/views/Detail.vue')
const router = new VueRouter({
  routes:[
    {path:'/home',component:Home},
    {path:'/find',component:Find},
    {path:"/Cart",component:Cart},
    {path:'/User',component:User},
    {path:'/list',component:List},
    {path:'/detail/:id',component:Detail},
    {path:'*',redirect:'/home'}
  ]
})

export default router
