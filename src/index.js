import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, browserHistory } from 'react-router';

import routes from './routes';
import reducers from './reducers';

const myStore = createStore(reducers, 
	compose(applyMiddleware(promise),));

ReactDOM.render(
  <Provider store={myStore}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));
