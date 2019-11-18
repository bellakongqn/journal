<template>
  <div class="cartContainer">
    <h2>Your Cart</h2>
    <p v-show="!products.length"><i>Please add some products to cart.</i></p>
    <div
      class="cartListItem"
      v-for="product in products"
      :key="product.id">
      <div :style="{backgroundImage: 'url('+product.src+')'}"  class="imgContainer"/>
      {{ product.title }} - {{ product.price | currency }} x {{ product.quantity }}
    </div>
    <p>Total: {{ total | currency }}</p>
    <p><button :disabled="!products.length" @click="checkout(products)">Checkout</button></p>
    <p v-show="checkoutStatus">Checkout {{ checkoutStatus }}.</p>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
    // 获取初始数据
  computed: {
    ...mapState({
      checkoutStatus: state => state.cart.checkoutStatus
    }),
    // 获取购物车内初始商品及初始价格
    ...mapGetters('cart', {
      products: 'cartProducts',
      total: 'cartTotalPrice'
    })
  },
  methods: {
    //   结算
    checkout (products) {
      this.$store.dispatch('cart/checkout', products)
    }
  }
}
</script>
<style lang="less" scoped>
@import url('./memo.less');
</style>