<template>
    <div class="loginContainer" style="overflow: hidden">

        <div class="formContainer">
            <div class="formTitle">注册</div>
            <form>
                <Input v-model="userName" type="text" label="Email"/>
                <Input v-model="password" type="password" label="密码"/>
                <Input v-model="rePassword" type="password" label="确认密码" @blur="isBlured = true"/>
                <p v-if="isBlured && validatePassword()">{{validatePassword()}}</p>
                <Button text="注册" size="small"/>
                <div class="splitLine"/>
                <Button text="登录" @click="toLogin"/>
            </form>
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
            isBlured: false
        }
    },
    watch: {
        password() {
            // eslint-disable-next-line no-console
            console.log('password is', this.password)
        }
    },
    methods:{
        handleSubmit(){
            
        },
        toLogin(){
            this.$router.push('/login')
        },
        validatePassword() {
            // 如果有错误，则返回错误信息
            // 若没有错误，则返回空字符串
            const rePassword = this.rePassword
            if (rePassword) {
                if (rePassword.length < 6) {
                    return '密码大于6'
                } else if (rePassword.length < 8) {
                    return '密码大于8'
                }
                return false
            } else {
                return '请输入密码'
            }
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