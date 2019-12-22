/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from "react";
import "./CurrencyDetails.css";

const CurrencyDetails = ({ props }) => (
  <div className="currencyDetailsContainer">
    <div className="currencyDiv">
      <div className="currencyLabel">Currency</div>
      <div className="currencyName">{props.currency1}</div>
    </div>
    <span />
    <div className="currencyDiv">
      <div className="currencyLabel">Currency</div>
      <div className="currencyName">{props.currency2}</div>
    </div>
  </div>
);

export default CurrencyDetails;
