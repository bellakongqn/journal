<template>
  <div class="inputContainer">
      <p class="inputLabel">{{label}}</p>
      <input class="input" 
             :type="type"
             autocomplete='off'
             @change="$emit('input', $event.target.value)"
            >
      <p class="warningText" v-if="warning!==''">{{warning}}</p>
  </div>
</template>

<script>
export default {
  name: "Input",
  
  props: {
    type:String,
    label:String,
    warning:String||'',
  },
  methods: {
    handleOnChange($event) {
      this.$emit('change', $event.target.value)
    }
  }
};
</script>
<style lang="less" scoped>
@import url('./Input.less');
</style>