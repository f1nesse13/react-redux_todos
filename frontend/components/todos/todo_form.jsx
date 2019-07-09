import React, { Component } from 'react';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { userInput: '' };
  }

  render() {
    return <p>Create a new todo</p>;
  }
}
