<template>
  <div id="app">
    <header>
      <!-- <router-link to="/home">Home</router-link>
      <router-link to="/about">About</router-link> -->
    </header>
    <router-view></router-view>  
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
    
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
 font-family: "lucida sans unicode", lucida, helvetica, "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
}
</style>
