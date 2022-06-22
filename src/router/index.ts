import Vue from "vue";
import {createRouter,createWebHashHistory} from 'vue-router';
import Layout from "@/views/layout/index.vue"
const Home = {template:"<div>Home</div>"}
const About = {template:"<div>About</div>"}


const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path: '/login',
    name: 'Login',
    hidden: true,
    component:() => import ("@/views/login.vue"),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/System',
    name: 'System',
    hidden: true,
    component:() => import ("@/views/layout/index.vue"),
    children:[
      {
        path: '/home',
        name: 'item',
        hidden: true,
        component:() => import ("@/views/item/index.vue"),
      }
    ],
    meta: {
      title: 'home'
    }
  },
  {
    path: '/detail',
    name: 'detail',
    hidden: true,
    component:() => import ("@/views/layout1/index.vue"),
    meta: {
      title: 'detail'
    }
  },
]


 export default createRouter({
  history:createWebHashHistory(),
  routes,
})
