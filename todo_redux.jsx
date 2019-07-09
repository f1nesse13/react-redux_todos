import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './frontend/store/store';
import rootReducer from './frontend/reducers/rootReducer';
import Root from './frontend/components/root';

document.addEventListener('DOMContentLoaded', () => {
  const content = document.getElementById('content');
  ReactDOM.render(<Root store={createStore} />, content);
});
