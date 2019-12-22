/* eslint-disable import/no-extraneous-dependencies */
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";

const initialState = {};

// eslint-disable-next-line prettier/prettier
const store = createStore(reducers, initialState, 
  composeWithDevTools(applyMiddleware(createLogger(), thunk))
);

export default store;
