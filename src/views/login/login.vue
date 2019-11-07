<template>
    <div class="loginContainer">
        dwvjhfi
        <div class="formContainer">
            <div class="formTitle">登录</div>
            <Input v-model="userName" type="text" label="用户名或Email"/>
            <Input v-model="password" type="password" label="密码"/>
            <a class="btnGreen">登录</a>
            <div class="splitLine"/>
            <a class="btnWhite">注册</a>
        </div>
    </div>
</template>
<script>
import Input from '../../components/Input/Input.vue'
export default {
    data(){
        return{
            userName:'',
            password:'',
        }
    },
    methods:{
        handleSubmit(){
            alert(this.lovingVue)
        }
    },
    components:{
        Input,
    }

}
</script>
<style lang="less" scoped>
@import url('./login.less');

</style>