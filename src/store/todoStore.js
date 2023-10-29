import { create } from "zustand";

const useTodoStore = create((set) => ({
  todos: JSON.parse(localStorage.getItem("todos")) || [],
  count:
    JSON.parse(localStorage.getItem("todos"))?.filter((todo) => !todo.completed).length || 0,

  setTodos: (newTodos) =>
    set((state) => {
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return {
        todos: newTodos,
      };
    }),

  addTodo: (text) =>
    set((state) => {
      const newTodo = { text, completed: false, timestamp: Date.now() };
      const updatedTodos = [...state.todos, newTodo];
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return {
        todos: updatedTodos,
        count: updatedTodos.filter((todo) => !todo.completed).length,
      };
    }),

  changeTodoStatus: (timestamp) =>
    set((state) => {
      const updatedTodos = state.todos.map((todo) =>
        todo.timestamp === timestamp
          ? { ...todo, completed: !todo.completed }
          : todo
      );
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return {
        todos: updatedTodos,
        count: updatedTodos.filter((todo) => !todo.completed).length,
      };
    }),

  removeTodo: (timestamp) =>
    set((state) => {
      const updatedTodos = state.todos.filter(
        (todo) => todo.timestamp !== timestamp
      );
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return {
        todos: updatedTodos,
        count: updatedTodos.filter((todo) => !todo.completed).length,
      };
    }),

  removeAllCompleted: () =>
    set((state) => {
      const updatedTodos = state.todos.filter((todo) => !todo.completed);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return {
        todos: updatedTodos,
      };
    }),
}));

export default useTodoStore;
