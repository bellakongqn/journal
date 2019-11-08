const state ={
    isLogin:false,
    token: localStorage.getItem('token') || '',
}

const actions  = {
    
}

const mutations = {
    // 登录|登出
    loginIn(state){
        state.isLogin = true;
        localStorage.setItem('token', '摸鱼ing')
    },
    loginOut(state){
        state.isLogin = false;
        localStorage.removeItem('token')
    },
    
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