import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import axios from 'axios'
import Router from 'vue-router'

// 解决 Uncaught (in promise)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

//把axios对象挂到Vue实例上面，使用axios的时候直接 this.$axios就可以了 
Vue.prototype.$axios = axios
require('./mock.js')



Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if (sessionStorage.getItem("user")!== null) { // 判断本地是否存在token
      next()
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    if(to.path==='/login'){ //如果是登录页面路径，就直接next()
      next();
    } else { //不然就跳转到登录
        next('/login');
    }
  }
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')


