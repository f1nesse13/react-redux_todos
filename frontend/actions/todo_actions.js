const RECEIVE_TODOS = 'RECEIVE_TODOS';
const RECEIVE_TODO = 'RECEIVE_TODO';

export const receiveTodos = array => ({
  type: RECEIVE_TODOS,
  todos: array
});

export const receiveTodo = todo => ({
  type: RECEIVE_TODO,
  todo
});

window.receiveTodo = receiveTodo;
