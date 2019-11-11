<template>
    <div class="homeContainer"  style="overflow: hidden">
        <header class="headerContainer">
            <img  src="../../img/logo.jpg" class="logo"/>
            <div class="navContainer">
                <router-link to="/diary">diary</router-link>
                <router-link to="/memo">memo</router-link>
                <router-link to="/diary">diary</router-link>
                <router-link to="/memo">memo</router-link>
            </div>
            <div class="personalContainer">
                <img  src="../../img/avatar.png" class="avatar"/>
                <!-- <span class="nickname">汪大屁</span> -->
            </div>
              
        </header>
        <body class="mainContainer">
            <router-view></router-view>
            
            
        </body>
        
        
        <!-- <Button text="退出" size="small" @click="loginOut"/> -->
    </div>
</template>
<script>
// import Button from '../../components/Button/Button.vue'
export default {
    components:{
        // Button,
    },
    methods:{
        loginOut(){
            this.$store.commit('login/loginOut')
            this.$router.push('/login')
        }
    }
}
</script>
<style lang="less" scoped>
@import url('./home.less');

</style>