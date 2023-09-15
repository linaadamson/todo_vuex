import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    todos: [],
  },
  getters: {},
  mutations: {
    addTodo: (state, todo) => {
      state.todos.push(todo);
    },
    deleteTodo: (state, todo) => {
      state.todos = state.todos.filter((item) => {
        return item.id !== todo.id;
      });
    },
    updateTodo: (state, todo) => {
      const todoIndex = state.todos.findIndex((item) => item.id === todo.id);
      state.todos[todoIndex].status =
        todo.status === "completed" ? "uncompleted" : "completed";
    },
  },
  actions: {
    // ADD TODO
    addTodo: async ({ commit }, payload) => {
      const todo = {
        id: uuidv4(),
        title: payload,
        status: "uncompleted",
      };
      try {
        const res = await axios.post(
          "https://jsonplaceholder.typicode.com/todos",
          todo
        );

        console.log(res);
        if (res) {
          commit("addTodo", todo);
          return res;
        }
      } catch (error) {
        console.log(error);
      }
    },

    // DELETE TODO
    deleteTodo: async ({ commit }, todo) => {
      try {
        const res = await axios.delete(
          "https://jsonplaceholder.typicode.com/todos/" + todo.id
        );

        console.log(res);
        if (res) {
          commit("deleteTodo", todo);
        }
      } catch (error) {
        console.log(error);
      }
    },

    // UPDATE TODO
    updateTodo: async ({ commit }, todo) => {
      try {
        const res = await axios.patch(
          "https://jsonplaceholder.typicode.com/todos/" + todo.id,
          {
            completed: todo.status === "completed" ? false : true,
          }
        );

        if (res) {
          commit("updateTodo", todo);
        }
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
