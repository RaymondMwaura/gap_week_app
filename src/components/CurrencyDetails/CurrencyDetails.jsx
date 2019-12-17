import React from 'react';
import './CurrencyDetails.css';

const CurrencyDetails = () => (
  <div className="currencyDetailsContainer">
    <div className="currencyDiv">
      <div className="currencyLabel">Currency</div>
      <div className="currencyName">USD</div>
    </div>
    <span />
    <div className="currencyDiv">
      <div className="currencyLabel">Currency</div>
      <div className="currencyName">KES</div>
    </div>
  </div>
);

export default CurrencyDetails;
