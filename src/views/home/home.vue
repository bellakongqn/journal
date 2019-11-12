<template>
    <div class="homeContainer"  style="overflow: hidden">
        <header class="headerContainer">
            <img  src="../../img/logo.jpg" class="logo" @click="toIndex"/>
            <div class="navContainer">
                <router-link to="/diary">Diary</router-link>
                <router-link to="/memo">Memo</router-link>
                <router-link to="/diary">Anniversary</router-link>
                <router-link to="/memo">War</router-link>
                <router-link to="/memo">Moive</router-link>
            </div>
            <div class="personalContainer">
                <img  src="../../img/avatar.png" class="avatar" @click="showCardDetail"/>
                <div class="test_triangle_border" v-show="showCard">
                    <div class="popup">
                        <span><em></em></span>
                        <h1>汪大屁，早上好🐖</h1>
                        <SplitLine class="splitLine"/>
                        <h2 @click="loginOut">退出登录</h2>
                    </div>
                </div>
            </div>
            
              
        </header>
        <body class="mainContainer">
            <router-view></router-view>
        </body>
    </div>
</template>
<script>
import SplitLine from '../../components/SplitLine/SplitLine.vue'
import { mapState ,mapMutations} from 'vuex'
export default {
    components:{
        SplitLine
    },
    // computed: {
    //     showCard() {
    //         return this.$store.state.login.showCard
    //     }
    // },
    computed:{
        ...mapState(
            {
            showCard:state=>state.login.showCard
        }),
        // ...mapGetters(
        //     {oddNumber:'count/oddNumber'}
        // )
    },
    methods:{
        ...mapMutations({
            showCardDetail:'login/showCardDetail',
        }),
        // ...mapActions(
        //     {add:'count/add'}
        // )
        loginOut(){
            this.$store.commit('login/loginOut')
            this.$router.push('/login')
        },
        toIndex(){
            this.$router.push('/index')
        },
        // showCardDetail(){
        //     this.$store.commit();
        // }
    }
}
</script>
<style lang="less" scoped>
@import url('./home.less');

</style>