import Vue from "vue";
import VueRouter from "vue-router";

import home from "./views/home.vue";
import login from './views/login.vue'

Vue.use(VueRouter);

const routes = [
    { path: '/', redirect: '/home' },
    { path: "/login", component: login },
    { path:"/home", component: home }
]

var router =  new VueRouter({
    routes
})


router.beforeEach((to, from, next) => {
    let isLogin = false;
    if (!isLogin && to.path === '/home') {
      next('/login');
    } else {
      next();
    }
})

export default router;