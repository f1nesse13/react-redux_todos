import React from 'react';
import TodoListItem from './todo_list_item';
class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todos, receiveTodo } = this.props;

    const todoList = todos.map(todo => <TodoListItem todo={todo} />);
    return (
      <div>
        <TodoForm todos={todos} receiveTodo={receiveTodo} />
        <ul>{todoList}</ul>
      </div>
    );
  }
}

export default TodoList;
