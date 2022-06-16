import Vue from "vue";
import {createRouter,createWebHashHistory} from 'vue-router';
import Login from "@/views/login.vue"
import Layout from "@/views/layout/index.vue"
const Home = {template:"<div>Home</div>"}
const About = {template:"<div>About</div>"}


const routes = [
  { path:"/",component:Home },
  {path:'',component:Home},
  {
    path: '/login',
    name: 'Login',
    hidden: true,
    component:Login,
    meta: {
      title: '登录'
    }
  },
  {
    path: '/System',
    name: 'System',
    hidden: true,
    component:Layout,
    meta: {
      title: '登录'
    }
  },
  { path:"/about",component:About},
]


 export default createRouter({
  history:createWebHashHistory(),
  routes,
})
