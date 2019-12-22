/* eslint-disable no-restricted-globals */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import './CountrySelection.css';

const CountrySelection = ({ dataAndMethods }) => {
  let options;
  const { supportedCountries, changeCurrency1, changeCurrency2 } = dataAndMethods;

  if (supportedCountries.length > 0) {
    options = supportedCountries[0].map((country) => (
      <option value={country.currencies[0]} key={country.alpha3Code}>{country.name}</option>
    ));
  }
  return (
    <div className="countrySelectionContainer">
      <select
        required
        className="countryDiv"
        onChange={() => changeCurrency1(event.target.value)}
      >
        <option value="">Select Country</option>
        {options}
      </select>
      <span />
      <select
        required
        className="countryDiv"
        onChange={() => changeCurrency2(event.target.value)}
      >
        <option value="">Select Country</option>
        {options}
      </select>
    </div>
  );
};

export default CountrySelection;
