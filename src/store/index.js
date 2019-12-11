import Vue from 'vue'
import Vuex from 'vuex'
import login from './login'
import products from './products'
import cart from './cart'
import todo from './todo'


Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    login,
    products,
    cart,
    todo
  }
})