<template>
    <div class="loginContainer">
        dwvjhfi
        <div class="formContainer">
            <div class="formTitle">注册</div>
            <Input v-model="userName" type="text" label="Email"/>
            <Input v-model="password" type="password" label="密码"/>
            <Input v-model="rePassword" type="password" label="确认密码"/>
            <Button text="注册" size="small"/>
            <div class="splitLine"/>
            <Button text="登录" @click="toLogin"/>
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
            rePassword:'',
        }
    },
    methods:{
        handleSubmit(){
            
        },
        toLogin(){
            this.$router.push('/login')
        }
    },
    components:{
        Input,
        Button,
    }

}
</script>
<style lang="less" scoped>
@import url('./register.less');

</style>