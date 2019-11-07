import Vue from "vue";
import VueRouter from "vue-router";

import home from "./views/home/home.vue";
import login from './views/login/login.vue'
import about from './views/about/about.vue'



Vue.use(VueRouter);



const routes = [
    { path: '/', redirect: '/home' },
    { path: "/login", component: login },
    { path:"/home", component: home, meta: { name: '主页' } },
    { path:"/about", component: about, meta: { name: '关于'} }
]



var router =  new VueRouter({
    routes
})


router.beforeEach((to, from, next) => {
    let isLogin = false;
    if (!isLogin && to.path !== '/login') {
      next('/login');
    } else {
      next();
    }
})

export default router;