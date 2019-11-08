<template>
    <div>
        <a :class="size==='small'?'btnGreen':'btnWhite'" @click="callParent">{{text}}</a>
    </div>
</template>
<script>
export default {
    name:'Button',
    props:{
        text:String,
        size:String,
    },
    methods:{
        callParent(){
            this.$emit('click')
        }
    }
}
</script>
<style lang="less" scoped>
@import url('./Button.less');

</style>