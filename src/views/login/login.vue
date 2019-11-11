<template>
    <div class="loginContainer" style="overflow: hidden">
        <div class="formContainer">
            <div class="formTitle">登录</div>
            <form>
                <Input v-model="userName" type="text" label="用户名或Email"/>
                <Input v-model="password" type="password" label="密码"/>
                <Button text="登录" size="small" @click="loginIn"/>
            </form>
            <div class="splitLine"/>
            <Button text="注册" @click="toRegister"/>
            
        </div>
    </div>
</template>
<script>

import Input from '../../components/Input/Input.vue'
import Button from '../../components/Button/Button.vue'
export default {
    data(){
        return{
            userName:'',
            password:'',
        }
    },
    methods:{
        toRegister(){   
            this.$router.push('/register')
        },
        loginIn(){
            this.$store.commit('login/loginIn')
            this.$router.push('/home')
        }
    },
    components:{
        Input,
        Button,
    }

}
</script>
<style lang="less" scoped>
@import url('./login.less');

</style>