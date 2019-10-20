import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import { ListsStore } from './store';
import { loadData } from './actions';
import './index.css';
import App from './App';

ListsStore.dispatch(loadData());

console.log(JSON.stringify(ListsStore));

window.store = () => ListsStore.getState();

ReactDOM.render(
  <Provider store={ListsStore}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
