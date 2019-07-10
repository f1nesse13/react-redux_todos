import React, { Component } from 'react';

class TodoDetailView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todo } = this.props;
    return (
      <ul>
        <li>{todo.body}</li>
      </ul>
    );
  }
}

export default TodoDetailView;
