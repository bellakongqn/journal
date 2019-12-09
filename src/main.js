import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import axios from 'axios'
//把axios对象挂到Vue实例上面，使用axios的时候直接 this.$axios就可以了 
Vue.prototype.$axios = axios
require('./mock.js')


Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    if (JSON.stringify(store.state.login.personalInformation) === '{}') {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')


