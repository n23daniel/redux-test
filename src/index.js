import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './stylesheets/main.scss';

import TodoList from './javascripts/components/TodoList';
import store from './javascripts/store';

ReactDOM.render(
	<Provider store={store}>
		<TodoList />
	</Provider>,
  document.getElementById('root')
);
