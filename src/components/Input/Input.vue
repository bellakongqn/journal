<template>
  <div class="inputContainer">
      <p class="inputLabel">{{label}}</p>
      <input class="input" 
             :type="type"
             :value="value"
             @blur="$emit('blur')"
             @input="handleOnChange">
  </div>
</template>

<script>
export default {
  name: "Input",
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: String,
    type:String,
    label:String,
  },
  methods: {
    handleOnChange($event) {
      // eslint-disable-next-line no-console
      console.log('changed')
      this.$emit('change', $event.target.value)
    }
  }
};
</script>
<style lang="less" scoped>
@import url('./Input.less');
</style>