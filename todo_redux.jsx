import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './frontend/store/store';
import rootReducer from './frontend/reducers/rootReducer';

const Root = props => {
  return <h1>WORKING</h1>;
};

document.addEventListener('DOMContentLoaded', () => {
  const content = document.getElementById('content');
  ReactDOM.render(<Root />, content);
});

window.store = createStore;
