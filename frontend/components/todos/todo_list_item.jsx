import React from 'react';

const TodoListItem = props => <li key={props.todo.id}>{props.todo.title}</li>;

export default TodoListItem;
