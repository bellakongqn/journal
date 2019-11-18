import shop from '../api/shop'

const state = {
    items: [],
    checkoutStatus: null
}

// 通用方法
const getters = {
    // 购物车内商品 对于模块内部的 getter，根节点状态会作为第三个参数暴露出来：
    cartProducts: (state, getters, rootState) => {
      return state.items.map(({ id, quantity }) => {
        const product = rootState.products.all.find(product => product.id === id)
        return {
          title: product.title,
          price: product.price,
          quantity
        }
      })
    },
  
    // 购物车内商品价格
    cartTotalPrice: (state, getters) => {
      return getters.cartProducts.reduce((total, product) => {
        return total + product.price * product.quantity
      }, 0)
    }
  }


//   actions
  const actions = {
    checkout ({ commit, state }, products) {
      const savedCartItems = [...state.items]
      commit('setCheckoutStatus', null)
      // empty cart
      commit('setCartItems', { items: [] })
      shop.buyProducts(
        products,
        () => commit('setCheckoutStatus', 'successful'),
        () => {
          commit('setCheckoutStatus', 'failed')
          // rollback to the cart saved before sending the request
          commit('setCartItems', { items: savedCartItems })
        }
      )
    },
  
    // 添加商品进入购物车
    addProductToCart ({ state, commit }, product) {
        // 先将支付状态支置null
      commit('setCheckoutStatus', null)
    //   判断商品库存是否大于0
      if (product.inventory > 0) {
        //  找出购物车内与新增商品id相同的数据
        const cartItem = state.items.find(item => item.id === product.id)
        if (!cartItem) {
            // 新增一种未添加过的商品
          commit('pushProductToCart', { id: product.id })
        } else {
            // 添加过的商品，增加商品数量
          commit('incrementItemQuantity', cartItem)
        }
        // 从商品里移除一个商品数量 全局中提交action 增加root:true
        commit('products/decrementProductInventory', { id: product.id }, { root: true })
      }
    }
  }
  
// mutations
const mutations = {
    pushProductToCart (state, { id }) {
      state.items.push({
        id,
        quantity: 1
      })
    },
  
    incrementItemQuantity (state, { id }) {
      const cartItem = state.items.find(item => item.id === id)
      cartItem.quantity++
    },
  
    setCartItems (state, { items }) {
      state.items = items
    },
  
    setCheckoutStatus (state, status) {
      state.checkoutStatus = status
    }
  }
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }