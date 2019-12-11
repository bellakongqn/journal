const state={
    todoList:[],
}

const actions ={
    addTodo({ commit },text) {
        commit('addTodo', {
          text,
          done: false,
          id:Number(Math.random().toString().substr(3,length) + Date.now()).toString(36)
        })
    },
    toggleTodo ({ commit }, todo) {
        //接口
        // return axios.get('api',todo).then(res=>{
        //     commit('toggleItem',res)
        // })
        commit('toggleItem', { todo, done: !todo.done })
    },
    removeTodo({ commit }, todo){
        commit('removeTodo', todo)
    },
}

const mutations ={
    addTodo (state, todo) {
        state.todoList.push(todo)
    },
    toggleItem (state, { todo, done }) {
        todo.done = done
    },
    removeTodo(state, todo){
        state.todoList.splice(state.todoList.indexOf(todo), 1)
    },
}

const getters ={

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}