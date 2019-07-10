import React, { Component } from 'react';
import StepListContainer from '../steps/step_list_container';
class TodoDetailView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todo, removeTodo } = this.props;
    return (
      <ul>
        <li>{todo.body}</li>
        <button onClick={removeTodo.bind(this, todo)}>Delete</button>
        <StepListContainer todo_id={todo.id} />
      </ul>
    );
  }
}

export default TodoDetailView;
