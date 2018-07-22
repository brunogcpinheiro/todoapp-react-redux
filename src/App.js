import React from 'react';

import { Provider } from 'react-redux';

import './styles/global';

import store from './store';

import TodoList from './components/todolist';

const App = () => (
  <Provider store={store}>
    <TodoList />
  </Provider>
);

export default App;
