<template>
  <main class="home">
    <div class="home-wrapper">
      <h1 class="header-text">Todo App</h1>
      <div class="input-wrapper">
        <!-- INPUT ELEMENT -->
        <TodoInput />

        <!-- FILTER -->
        <TodoFilter :filterOptions="filterOptions" @addFilters="selectedFilter($event)" />
      </div>

      <!-- CARDS -->
      <TodoCard :filter="filter" />

    </div>
  </main>
</template>

<script>
import TodoFilter from '../../components/todo-filter/index.vue'
import TodoCard from '../../components/todo-card/index.vue'
import TodoInput from '../../components/todo-input/index.vue'



export default {
  name: 'HomeView',
  components: {
    TodoInput,
    TodoCard,
    TodoFilter
  },
  data() {
    return {
      filter: 'all',
      filterOptions: ['all', 'completed', 'uncompleted'],
    }
  },

  methods: {

    selectedFilter: function (e) {
      this.filter = e
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

