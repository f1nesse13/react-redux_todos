import React, { Component } from 'react';
import StepListContainer from '../steps/step_list_container';
class TodoDetailView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todo, removeTodo } = this.props;
    return (
      <div>
        <p>Notes: {todo.body}</p>
        <div>
          <StepListContainer todo_id={todo.id} />
        </div>
      </div>
    );
  }
}

export default TodoDetailView;
