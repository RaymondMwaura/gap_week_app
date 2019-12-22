import { combineReducers } from "redux";
import currencyReducer from "./currencyReducer";
import countryReducer from "./countryReducer";
import fetchingReducer from "./fetchingReducer";

const reducers = combineReducers({
  currencies: currencyReducer,
  countries: countryReducer,
  fetchingState: fetchingReducer
});

export default reducers;
