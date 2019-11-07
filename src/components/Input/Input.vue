<template>
  <div class="inputContainer">
      <p class="inputLabel">{{label}}</p>
      <input class="input" 
             :type="type"
             :value="value"
             @change="$emit('input', $event.target.value)">
  </div>
</template>

<script>
export default {
  name: "Input",
  // model: {
  //   prop: 'checked',
  //   event: 'change'
  // },
  props: {
    value: String,
    type:String,
    label:String,
  },
};
</script>
<style lang="less" scoped>
@import url('./Input.less');
</style>