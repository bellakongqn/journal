import Vue from "vue";
import VueRouter from "vue-router";

import home from "./views/home/home.vue";
import login from './views/login/login.vue'
import about from './views/about/about.vue'
import register from './views/register/register.vue'
import diary from './views/diary/diary.vue'
import memo from './views/memo/memo.vue'


Vue.use(VueRouter);


const routes = [
    { path: '/', redirect: '/home' },
    { path: "/login", component: login },
    { path: '/register', component:register },
    { path:"/home", component: home, meta: { name: '主页' },
      children:[
        { path:'/diary', component:diary }, // 日记
        { path:'/memo', component:memo },   // 备忘录
      ] },
    { path:"/about", component: about, meta: { name: '关于'} },
]



var router =  new VueRouter({
  mode: 'history',
  // 不取hash路由格式
  routes
})


export default router;