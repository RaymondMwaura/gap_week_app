import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { currencyReducer, countryReducer, fetchingReducer } from './reducers';

export default createStore(
  combineReducers({
    currencies: currencyReducer,
    countries: countryReducer,
    fetchingState: fetchingReducer,
  }),
  {},
  applyMiddleware(createLogger(), thunk),
);
