<template>
    <div>
        hOME
        <Button text="退出" size="small" @click="loginOut"/>
    </div>
</template>
<script>
import Button from '../../components/Button/Button.vue'
export default {
    components:{
        Button,
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

</style>