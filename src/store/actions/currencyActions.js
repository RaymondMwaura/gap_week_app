import axios from "axios";

const changeCurrency1 = currency => ({
  type: "CHANGE_DISPLAY_CURRENCY_1",
  payload: currency
});

const changeCurrency2 = currency => ({
  type: "CHANGE_DISPLAY_CURRENCY_2",
  payload: currency
});

const changeAmount = amount => ({
  type: "CHANGE_ENTERED_AMOUNT",
  payload: amount
});

const updateExchangeRate = currencies => {
  const API_KEY = "eabe466492msha89d2073718480bp1c2486jsn1ed4ab4d46bb";
  const from = currencies[0];
  const to = currencies[1];
  // eslint-disable-next-line max-len
  const EXCHANGE_RATE_URL = `https://currency-exchange.p.rapidapi.com/exchange?from=${from}&to=${to}`;
  return dispatch => {
    dispatch({
      type: "IS_LOADING_CURRENCIES"
    });
    axios
      .get(EXCHANGE_RATE_URL, {
        headers: {
          "X-RapidAPI-Key": API_KEY
        }
      })
      .then(res => {
        dispatch({
          type: "CHANGE_EXCHANGE_RATE",
          payload: res.data
        });
        dispatch({
          type: "COMPUTE_TOTAL"
        });
        dispatch({
          type: "HAS_LOADED_CURRENCIES"
        });
      });
  };
};

export { changeCurrency1, changeCurrency2, changeAmount, updateExchangeRate };
