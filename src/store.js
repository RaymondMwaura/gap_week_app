import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { mathReducer, userReducer } from './reducers';

// only takes one parameter, a single or combined reducer
// uses key value mapping, shortened here using ES6
// {} => an empty object state
export default createStore(
  combineReducers({ math: mathReducer, user: userReducer }),
  {},
  applyMiddleware(createLogger(), thunk, promise),
);
