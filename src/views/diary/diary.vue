<template>
    <div class="diaryContainer">
        <div class="diaryNav">
            
        </div>
        <div class="diaryDetaiil">
            <div
                class="diaryItem"
                v-for="product in products"
                :key="product.id">
                <div :style="{backgroundImage: 'url('+product.src+')'}"  class="imgContainer"/>
                <span>{{ product.title }}</span>
                <span>{{ product.price}}</span>
                <button
                    class="buyBtn"
                    :disabled="!product.inventory"
                    @click="addProductToCart(product)">
                    Add to cart
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState,mapActions} from 'vuex'
export default {
    components:{
    },
    computed: mapState({
    //   获取products中的所有产品all:[]
        products: state => state.products.all
    }),
    methods: mapActions('cart', [
        'addProductToCart'
    ]),
    created () {
        this.$store.dispatch('products/getAllProducts')
    }
}
</script>
<style lang="less" scoped>
@import url('./diary.less');
</style>