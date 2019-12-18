/* eslint-disable no-restricted-globals */
/* eslint-disable react/prop-types */
import React from 'react';
import './ExchangeValue.css';
import CurrencyLoader from '../Loader/CurrencyLoader';

const ExchangeValue = ({ data }) => {
  const {
    currentExchangeRate, amount, total, changeAmount, fetchingState,
  } = data;
  if (fetchingState.isFetchingExchangeRate === true) {
    return (
      <CurrencyLoader />
    );
  }
  return (
    <div className="exchangeValueContainer">
      <div className="amountLabel">Amount</div>
      <div>
        <input
          className="amountValue"
          type="number"
          step="any"
          value={amount}
          onChange={() => changeAmount(event.target.value)}
        />
      </div>
      <div className="exchangeValueLabel">Exchange Rate</div>
      <div className="exchangeValueTextDiv">
        <div className="exchangeRateValue">{currentExchangeRate}</div>
      </div>
      <div className="totalLabel">Total</div>
      <div className="totalTextDiv">
        <div className="totalValue">{total}</div>
      </div>
    </div>
  );
};

export default ExchangeValue;
