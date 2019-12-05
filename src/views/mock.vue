<template>
    <div>
        <ul>
            <li v-for="item in data" v-bind:key="item.title">
                <img :src="item.photo"/>
                <a href="" >{{item.title}}</a>
            </li>
        </ul>
    </div>
</template>
<script>

export default {
      data() {
        return {
          data:[]
        }
      },
      mounted:function() {
        this.$axios.get('/api/data').then(res => {//get()中的参数要与mock.js文件中的Mock.mock()配置的路由保持一致
          this.data = res.data.data;
        //   console.log(res.data);//在console中看到数据
        }).catch(() => {
          alert('wrong');
        })
      },
      methods:{
          
      }
}
</script>