import axios from 'axios'

const state ={
    showCard:false,
    personalInformation:JSON.parse(sessionStorage.getItem('user'))|| {},
}

const actions  = {
    // 登录|登出
    loginIn(){
        axios.get('/api/login').then(res => {//get()中的参数要与mock.js文件中的Mock.mock()配置的路由保持一致
            this.commit('login/setLoginInState',res.data)
          }).catch(() => {
            alert('wrong');
          })
    },
}

const mutations = {
    setLoginInState(state,payload){
        sessionStorage.setItem('user', JSON.stringify(payload));
        state.personalInformation=payload;
    },
    loginOut(state){
        state.personalInformation={};
        sessionStorage.removeItem('user');
        this.commit('login/initCardDetail')
    },
    // 详情card展示
    showCardDetail(state){
        state.showCard = !state.showCard
    },
    // 初始化详情card 状态
    initCardDetail(){
        state.showCard = false
    }
}

const getters = {
    
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
  }