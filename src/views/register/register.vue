<template>
    <div class="loginContainer" style="overflow: hidden">

        <div class="formContainer">
            <div class="formTitle">注册</div>
            <form>
                <Input v-model="userName" type="text" label="Email"/>
                <Input v-model="password" type="password" label="密码"/>
                <!-- 同步验证密码 -->
                <!-- <Input v-model="rePassword" type="password" label="确认密码" @focus="isBlured = true" /> -->
                <!-- <p v-if="isBlured && validatePassword()">{{validatePassword()}}</p> -->
                <Input v-model="rePassword" type="password" label="确认密码" warning="密码至少6位"/>
                <Button text="注册" size="small"/>
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
            userName:'',
            password:'',
            rePassword:'',
            isFocus: false
        }
    },
    watch: {
       
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
                    return '密码至少6位'
                } 
                return false
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