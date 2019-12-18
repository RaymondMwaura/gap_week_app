import React from 'react';
import './CountrySelection.css';

const CountrySelection = () => (
  <div className="countrySelectionContainer">
    <select className="countryDiv">
      <option>USA</option>
    </select>
    <span />
    <select className="countryDiv">
      <option>KEN</option>
    </select>
  </div>
);

export default CountrySelection;
