const state={
    todoList:[],
}

const actions ={
    addTodo ({ commit }, text) {
        commit('addTodo', {
          text,
          done: false
        })
    },
    toggleAll ({ state, commit }, done) {
        state.todoList.forEach((todo) => {
          commit('toggleAll', { todo, done })
        })
    },
    toggleTodo ({ commit }, todo) {
        commit('toggleAll', { todo, done: !todo.done })
    },
    removeTodo({ commit }, todo){
        commit('removeTodo', todo)
    },
    editTodo ({ commit }, { todo, value }) {
        commit('editTodo', { todo, text: value })
    },
    clearCompleted({ state , commit }){
        state.todoList.filter(todo => todo.done)
        .forEach(todo => {
            commit('removeTodo', todo)
        })
    }
}

const mutations ={
    addTodo (state, todo) {
        state.todoList.push(todo)
    },
    toggleAll (state, { todo, done }) {
        todo.done = done
    },
    removeTodo(state, todo){
        state.todoList.splice(state.todoList.indexOf(todo), 1)
    },
    editTodo(state, { todo , text}){
        todo.text = text
    }
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