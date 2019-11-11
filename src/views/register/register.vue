<template>
    <div class="loginContainer" style="overflow: hidden">

        <div class="formContainer">
            <div class="formTitle">注册</div>
            <form>
                <p v-show="errText!==''" class="errText">
                    <img  src="../../img/warning.png" class="warningIcon"/>{{errText}}
                </p>
                <Input v-model="email" type="text" label="Email"/>
                <Input v-model="password" type="password" label="密码" warning="密码至少6位"/>
                <!-- 同步验证密码 -->
                <!-- <Input v-model="rePassword" type="password" label="确认密码" @focus="isBlured = true" /> -->
                <!-- <p v-if="isBlured && validatePassword()">{{validatePassword()}}</p> -->
                <Input v-model="rePassword" type="password" label="确认密码"/>
                <Button text="注册" size="small" @click="toRegister" />
            </form>
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
            email:'',
            password:'',
            rePassword:'',
            errText:'',
        }
    },
    watch: {
       
    },
    methods:{
        toRegister(){
            const  regEmail = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
            if(this.email===''|| !regEmail.test(this.email)){
                this.errText = "邮箱格式不正确"
            }else if(this.password===''||this.password.length<6){
                this.errText = '请输入密码&密码至少6位'
            }else if(this.password!==this.rePassword){
                this.errText = '两次密码不一致,请确认'
            }else{
                this.$router.push('/login')
            }

        },
        toLogin(){
            this.$router.push('/login')
        },
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