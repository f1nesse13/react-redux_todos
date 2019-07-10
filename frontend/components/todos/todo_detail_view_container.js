import React from 'react';
import { connect } from 'react-redex';
import TodoDetailView from './todo_detail_view';


const mapDispatchToProps => state ({
  removeTodo: todo => dispatch(removeTodo(todo))
});

export default connect(null, mapDispatchToProps)(TodoDetailView)