<template>
    <ul v-if="filteredTodos.length" class="todo-container">
        <li v-for="todo in filteredTodos" :key="todo.id">
            <div class="todo" :class="{ cross: todo.status === 'completed' }">
                <p>{{ todo.title }}</p>

                <div class="btn-container">
                    <button class="complete" @click="updateTodoStatus(todo)">
                        <img src="../../assets/icons/completed.svg" alt="complete" />
                    </button>

                    <button class="delete" @click="deleteTodo(todo)">
                        <img src="../../assets/icons/delete.svg" alt="delete" />
                    </button>
                </div>
            </div>
        </li>
    </ul>
    <h3 v-else class="no-todos">Nothing to see here, either create a new todo or go to bed</h3>
</template>

<script>
export default {
    name: 'TodoCard',
    props: ['filter'],
    data() {
        return {

        }
    },
    methods: {
        deleteTodo: function (todo) {
            this.$store.dispatch('deleteTodo', todo)
        },

        updateTodoStatus: function (todo) {
            this.$store.dispatch('updateTodo', todo)

        }
    },
    computed: {
        todos() {
            return this.$store.state.todos
        },

        filteredTodos: function () {
            return this.todos.filter((item) => {
                if (this.filter === 'all') {
                    return item
                }
                else {
                    return item.status === this.filter;
                }

            });
        }
    }

}
</script>

<style lang="css" scoped>
@import './index.css';
</style>
