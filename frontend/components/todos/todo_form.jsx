import React, { Component } from 'react';
import { uniqueId } from '../../../solution_1/frontend/util/id_generator';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '', body: '', done: false };
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = Object.assign({}, this.state, { id: uniqueId() });
    this.props.receiveTodo(todo);
    this.setState({ title: '', body: '' });
  }

  render() {
    return (
      <div className="form">
        <p>Create a new todo</p>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            Title
            <input
              type="text"
              className="todo-title"
              name="title"
              onChange={this.update('title')}
              value={this.state.title}
            />
          </label>
          <label>
            Body
            <textarea
              className="todo-body"
              value={this.state.body}
              name="body"
              onChange={this.update('body')}
              col="20"
              row="5"
            />
          </label>
          <button type="submit">Create Todo</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
