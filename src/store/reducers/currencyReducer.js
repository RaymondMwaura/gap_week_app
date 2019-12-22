const currencyState = {
  currentCurrency1: "USD",
  currentCurrency2: "USD",
  currentExchangeRate: "",
  amount: "",
  total: ""
};

const currencyReducer = (state = currencyState, action) => {
  switch (action.type) {
    case "CHANGE_DISPLAY_CURRENCY_1":
      return {
        ...state,
        currentCurrency1: action.payload
      };
    case "CHANGE_DISPLAY_CURRENCY_2":
      return {
        ...state,
        currentCurrency2: action.payload
      };
    case "CHANGE_EXCHANGE_RATE":
      return {
        ...state,
        currentExchangeRate: action.payload
      };
    case "CHANGE_ENTERED_AMOUNT":
      return {
        ...state,
        amount: action.payload
      };
    case "COMPUTE_TOTAL":
      return {
        ...state,
        total: (state.currentExchangeRate * state.amount).toLocaleString()
      };
    default:
      break;
  }
  return state;
};

export default currencyReducer;
