// src/redux/actions.js

export const addTodo = (text) => ({
    type: 'ADD_TODO',
    payload: {
      text,
      completed: false,
      id: new Date().getTime(), // You can use a unique ID library instead of `new Date().getTime()`.
    },
  });
  
  export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    payload: { id },
  });
  
  export const deleteTodo = (id) => ({
    type: 'DELETE_TODO',
    payload: { id },
  });
  