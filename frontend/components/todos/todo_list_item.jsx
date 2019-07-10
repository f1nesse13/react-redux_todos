import React, { Component } from 'react';

class TodoListItem extends Component {
  constructor(props) {
    super(props);
  }

  updateTodo(e) {
    e.preventDefault();
    const toggleTodo = Object.assign({}, this.props.todo, { done: !this.props.todo.done });
    this.props.receiveTodo(toggleTodo);
  }

  render() {
    return (
      <li key={this.props.todo.id}>
        {this.props.todo.title}
        <button onClick={this.props.removeTodo.bind(this, this.props.todo)}>Delete</button>
        <button onClick={this.updateTodo.bind(this)}>
          {this.props.todo.done === true ? 'Undo' : 'Done'}
        </button>
      </li>
    );
  }
}

export default TodoListItem;
