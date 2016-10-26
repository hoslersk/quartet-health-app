import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import routes from './routes';
import { Router, browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise'
import rootReducer from './reducers';
// import { fetchItineraries } from './actions'

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

const store = createStore(rootReducer, applyMiddleware(ReduxPromise));

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
