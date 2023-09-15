<template>
    <div>
        <div class="input-container">
            <input v-model="newTodo" type="text" placeholder="Create a new todo..." class="todo-input"
                @focus="error = ''" />
            <button class="add-btn" type="submit" @click="createTodo">
                <img src="../../assets/icons/addIcon.svg" alt="Apple store logo" />
            </button>
            <span class="error" v-if="error">{{ error }}</span>
        </div>

    </div>
</template>

<script>



export default {
    name: 'TodoInput',

    data() {
        return {
            newTodo: '',
            error: '',
        }
    },

    methods: {
        createTodo: function () {
            if (!this.newTodo.trim().length) {
                this.error = 'Please include a todo'
                return
            }

            this.$store.dispatch('addTodo', this.newTodo)
            this.newTodo = '';
            this.error = ''
        }
    },
    computed: {
        todos() {
            return this.$store.state.todos
        },
    }

}
</script>

<style lang="css" scoped>
@import './index.css';
</style>
