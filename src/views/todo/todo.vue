<template>
    <div>
        <input
            autofocus
            autocomplete="off"
            placeholder="What needs to be done?"
            @keyup.enter="addTodo">
        <section  v-show="todoList.length">
            <ul class="todo-list">
                <li v-for="(item,index) in todoList" :key="index">
                    <input type="checkbox" :value="item.done" @click="changeTodo(item)"/>
                    <span :class="{'done':item.done}">{{item.text}}</span>
                    <span @click="deleteItem(item)">X</span>
                </li>
            </ul>
        </section>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    computed:mapState({
        todoList: state => state.todo.todoList
    }),
    methods:{
        addTodo (e) {
            const text = e.target.value
            if (text.trim()) {
                this.$store.dispatch('todo/addTodo', text)
            }
            e.target.value = ''
        },
        changeTodo(item){
            this.$store.dispatch('todo/toggleTodo', item)
        },
        deleteItem(item){
            this.$store.dispatch('todo/removeTodo', item)
        }
    }
}
</script>
<style lang="less" scoped>
.done{
    text-decoration: line-through
}
</style>