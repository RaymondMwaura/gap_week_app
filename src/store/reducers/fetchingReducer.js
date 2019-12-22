const fetchingState = {
  isFetching: true,
  isFetchingExchangeRate: false
};

const fetchingReducer = (state = fetchingState, action) => {
  switch (action.type) {
    case "IS_LOADING":
      return {
        ...state,
        isFetching: true
      };

    case "HAS_LOADED":
      return {
        ...state,
        isFetching: false
      };

    case "IS_LOADING_CURRENCIES":
      return {
        ...state,
        isFetchingExchangeRate: true
      };

    case "HAS_LOADED_CURRENCIES":
      return {
        ...state,
        isFetchingExchangeRate: false
      };

    default:
      break;
  }
  return state;
};

export default fetchingReducer;
