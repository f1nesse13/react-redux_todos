import React, { Component } from 'react';

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
      </ul>
    );
  }
}

export default TodoDetailView;
