import Vue from "vue";
import VueRouter from "vue-router";

import home from "./views/home/home.vue";
import login from './views/login/login.vue'
import about from './views/about/about.vue'
import register from './views/register/register.vue'
import diary from './views/diary/diary.vue'
import memo from './views/memo/memo.vue'
import index from './views/index/index.vue'
import Todo from './views/todo/todo.vue'


Vue.use(VueRouter);


const routes = [
    { path: '/', redirect: '/home' },
    { path: "/login", component: login },
    { path: '/register', component:register },
    { path:"/home", component: home, 
      redirect: '/index', 
      meta: {requireAuth: true},
      children:[
        { path:'/index', component:index ,meta: {requireAuth: true},},
        { path:'/diary', component:diary ,meta: {requireAuth: true}, }, // 日记
        { path:'/memo', component:memo ,meta: {requireAuth: true},},   // 备忘录
        { path:'/todo',  component:Todo ,meta: {requireAuth: true},}
      ] },
    { path:"/about", component: about, meta: {requireAuth: true}, },
]



var router =  new VueRouter({
  mode: 'history',
  // 不取hash路由格式
  routes
})


export default router;