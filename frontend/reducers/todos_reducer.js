import { receiveTodo, receiveTodos } from '../actions/todo_actions';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  }
};

const todosReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case 'RECEIVE_TODO':
      const newTodo = { [action.todo.id]: action.todo };
      return Object.assign({}, state, newTodo);
    case 'RECEIVE_TODOS':
      let nextState = {};
      action.todos.forEach(todo => {
        nextState[todo.id] = todo;
      });
      return nextState;
    default:
      return state;
  }
};
window.todosReducer = todosReducer;
export default todosReducer;
