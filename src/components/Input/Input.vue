<template>
  <div class="inputContainer">
      <p class="inputLabel">{{label}}</p>
      <input class="input" 
             :type="type"
             autocomplete="off"
             @focus="$emit('focus')"
            >
  </div>
</template>

<script>
export default {
  name: "Input",
  
  props: {
    // value: String,
    type:String,
    label:String,
  },
  methods: {
    
  }
};
</script>
<style lang="less" scoped>
@import url('./Input.less');
</style>