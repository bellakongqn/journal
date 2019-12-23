<template>
  <li>
    <div>
      <input
        type="checkbox"
        :checked="todo.done"
        @change="toggleTodo(todo)">
       <label v-text="todo.text" @dblclick="editing = true"></label>
       <button @click="removeTodo(todo)">delete</button>
    </div>
    <input class="edit"
      v-show="editing"
      v-focus="editing"
      :value="todo.text"
      @keyup.enter="doneEdit"
      @keyup.esc="cancelEdit"
      @blur="doneEdit">
   
  </li>
</template>

<script>
import { mapActions } from 'vuex'
export default {
   name: 'Todo',
   props: ['todo'],
   data(){
       return{
           editing:false,
       }
   },
    // 属性值就是自定义指令的名字，后面写上方法，
   //    这里的nextTick的方法，官方的API上面也是有介绍，表示下次DOM更新结束后，
   //    即修改数组后会调用的回调方法，这里就是聚焦的意思，每次更新一个todo之后，
  //    会自动聚焦在input框上面。 
  //    在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。
//   * `Vue.nextTick(callback)`，当数据发生变化，更新后执行回调。
// * `Vue.$nextTick(callback)`，当dom发生变化，更新后执行的回调。
   directives: {
    focus (el, { value }, { context }) {
      if (value) {
        context.$nextTick(() => {
          el.focus()
        })
      }
    }
  },
   methods:{
       ...mapActions({
           'toggleTodo':'todo/toggleTodo',
           'removeTodo':'todo/removeTodo',
           'editTodo':'todo/editTodo',
       }),
       doneEdit (e) {
            const value = e.target.value.trim()
            const { todo } = this
            if (!value) {
                this.removeTodo(todo)
                } else if (this.editing) {
                    this.editTodo({
                    todo,
                    value
                    })
                    this.editing = false
                }
        },
        cancelEdit (e) {
            e.target.value = this.todo.text
            this.editing = false
        }

   }
}
</script>