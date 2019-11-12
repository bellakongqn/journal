const state ={
    isLogin:false,
    token: localStorage.getItem('token') || '',
    showCard:false,
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