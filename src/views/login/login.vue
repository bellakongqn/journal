<template>
    <div class="loginContainer" style="overflow: hidden">
        <div class="formContainer">
            <div class="formTitle">登录</div>
            <form>
                <p v-show="errText!==''" class="errText">
                    <img  src="../../img/warning.png" class="warningIcon"/>{{errText}}
                </p>
                <Input v-model="userName" type="text" label="用户名或Email"/>
                <Input v-model="password" type="password" label="密码"/>
                <Button text="登录" size="small" @click="loginIn"/>
            </form>
            <SplitLine />
            <Button text="注册" @click="toRegister"/>
            
        </div>
    </div>
</template>
<script>

import Input from '../../components/Input/Input.vue'
import Button from '../../components/Button/Button.vue'
import SplitLine from '../../components/SplitLine/SplitLine.vue'
export default {
    data(){
        return{
            userName:'',
            password:'',
            errText:'',
        }
    },
    methods:{
        toRegister(){   
            this.$router.push('/register')
        },
        loginIn(){
            if(this.userName===''){
                this.errText = "请输入用户名"
            }else if(this.password===""){
                this.errText = "请输入密码"
            }else{
                this.$store.dispatch('login/loginIn')
                this.$router.push('/home') 
            }
        }
    },
    components:{
        Input,
        Button,
        SplitLine,
    }

}
</script>
<style lang="less" scoped>
@import url('./login.less');

</style>