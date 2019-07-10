import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';

const configureStore = (prevState = {}) => {
  const store = createStore(rootReducer, prevState);
  store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState());
  });
  return store;
};
export default configureStore;
