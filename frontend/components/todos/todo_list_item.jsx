import React, { Component } from 'react';
import TodoDetailView from './todo_detail_view';

class TodoListItem extends Component {
  constructor(props) {
    super(props);
    this.state = { details: false };
  }

  updateTodo(e) {
    e.preventDefault();
    const toggleTodo = Object.assign({}, this.props.todo, { done: !this.props.todo.done });
    this.props.receiveTodo(toggleTodo);
  }

  showDetails(e) {
    this.setState({ details: !this.state.details });
  }

  render() {
    return (
      <li key={this.props.todo.id}>
        <h3 onClick={this.showDetails.bind(this)}>{this.props.todo.title}</h3>
        {this.state.details === true ? <TodoDetailView todo={this.props.todo} /> : ''}
        <button onClick={this.updateTodo.bind(this)}>
          {this.props.todo.done === true ? 'Undo' : 'Done'}
        </button>
      </li>
    );
  }
}

export default TodoListItem;
