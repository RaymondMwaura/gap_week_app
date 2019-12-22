/* eslint-disable react/prop-types */
import React from 'react';
import './CurrencyDetails.css';

const CurrencyDetails = ({ data }) => (
  <div className="currencyDetailsContainer">
    <div className="currencyDiv">
      <div className="currencyLabel">Currency</div>
      <div className="currencyName">{data.currency1}</div>
    </div>
    <span />
    <div className="currencyDiv">
      <div className="currencyLabel">Currency</div>
      <div className="currencyName">{data.currency2}</div>
    </div>
  </div>
);

export default CurrencyDetails;
