import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import TodoList from './components/TodoList';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
  	<Provider store={store}>
    	<TodoList />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
