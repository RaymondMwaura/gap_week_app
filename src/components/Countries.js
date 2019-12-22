/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from "react";
import { connect } from "react-redux";
import "./Countries.css";

function Countries(props) {
  const countries = props.countries.supportedCountries[0];
  // consider adding a loader function here to fetch the countries
  // if they are not loaded; consider changing the 'componentDidMount' fetch
  // methods to store actions/reducers that can be called from other modules
  if (countries === undefined || countries.length === 0) {
    return null;
  }
  const countryDetails = countries.map(country => (
    <div
      className="card border-dark mb-3"
      style={{ maxWidth: "18rem" }}
      key={country.alpha2Code}
    >
      <p className="card-header">
        <span className="labelSpan">Country name: </span>
        {country.name}
      </p>
      <div className="card-body text-dark">
        <p className="card-text">
          <span className="labelSpan">Country code: </span>
          {country.alpha2Code}
        </p>
        <p className="card-text">
          <span className="labelSpan">Capital city: </span>
          {country.capital}
        </p>
        <p className="card-text">
          <span className="labelSpan">Region: </span>
          {country.region}
        </p>
        <p className="card-text">
          <span className="labelSpan">Population: </span>
          {country.population.toLocaleString()}
        </p>
      </div>
    </div>
  ));
  return <div className="countriesContainer">{countryDetails}</div>;
}

const mapStateToProps = state => ({
  currencies: state.currencies,
  fetchingState: state.fetchingState,
  countries: state.countries
});

export default connect(mapStateToProps)(Countries);
