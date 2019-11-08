<template>
    <div>
        <a :class="size==='small'?'btnGreen':'btnWhite'">{{text}}</a>
    </div>
</template>
<script>
export default {
    name:'Button',
    props:{
        text:String,
        size:String,
    }
}
</script>
<style lang="less" scoped>
@import url('./Button.less');

</style>