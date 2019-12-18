/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import axios from 'axios';
import LoadSpinner from '../../components/Loader/MainLoader';
import Labels from '../../components/Labels/Labels';
import CountrySelection from '../../components/CountrySelection/CountrySelection';
import CurrencyDetails from '../../components/CurrencyDetails/CurrencyDetails';
import ExchangeValue from '../../components/ExchangeValue/ExchangeValue';
import loadSupportedCountries from '../../actions/countryActions';
import { loadingComplete } from '../../actions/fetchingActions';
import {
  updateExchangeRate, changeAmount, changeCurrency1, changeCurrency2,
} from '../../actions/currencyActions';

class App extends Component {
  async componentDidMount() {
    let result;
    const API_KEY = 'eabe466492msha89d2073718480bp1c2486jsn1ed4ab4d46bb';
    const SUPPORTED_CURRENCIES_URL = 'https://currency-exchange.p.rapidapi.com/listquotes';
    const ALL_COUNTRIES_URL = 'https://restcountries-v1.p.rapidapi.com/all';

    result = await axios.get(SUPPORTED_CURRENCIES_URL, {
      headers: {
        'X-RapidAPI-Key': API_KEY,
      },
    });

    const supportedCurrencies = result.data;

    result = await axios.get(ALL_COUNTRIES_URL, {
      headers: {
        'X-RapidAPI-Key': API_KEY,
      },
    });

    const allCountries = result.data;
    const supportedCountries = [];

    allCountries.forEach((country) => {
      if (supportedCurrencies.includes(country.currencies[0])) {
        supportedCountries.push(country);
      }
    });
    this.props.loadSupportedCountries(supportedCountries);
    this.props.loadingComplete();
  }

  render() {
    const { fetchingState } = this.props;
    if (fetchingState.isFetching === true) {
      return (
        <LoadSpinner />
      );
    }
    return (
      <div className="App">
        <h3 className="currencyConvertTitle">Currency Conversion</h3>
        <div>
          <Labels dataAndMethods={{
            updateExchangeRate: this.props.updateExchangeRate,
            currenciesToUse: [
              this.props.currencies.currentCurrency1,
              this.props.currencies.currentCurrency2,
            ],
          }}
          />
          <CountrySelection dataAndMethods={{
            supportedCountries: this.props.countries.supportedCountries,
            changeCurrency1: this.props.changeCurrency1,
            changeCurrency2: this.props.changeCurrency2,
          }}
          />
          <CurrencyDetails data={{
            currency1: this.props.currencies.currentCurrency1,
            currency2: this.props.currencies.currentCurrency2,
          }}
          />
          <ExchangeValue data={{
            currentExchangeRate: this.props.currencies.currentExchangeRate,
            amount: this.props.currencies.amount,
            total: this.props.currencies.total,
            changeAmount: this.props.changeAmount,
            fetchingState: this.props.fetchingState,
          }}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.currencies,
  fetchingState: state.fetchingState,
  countries: state.countries,
});

const mapDispatchToProps = (dispatch) => ({
  updateExchangeRate: (currencies) => {
    dispatch(updateExchangeRate(currencies));
  },
  changeAmount: (amount) => {
    dispatch(changeAmount(amount));
  },
  changeCurrency1: (currency) => {
    dispatch(changeCurrency1(currency));
  },
  changeCurrency2: (currency) => {
    dispatch(changeCurrency2(currency));
  },
  loadSupportedCountries: (countries) => {
    dispatch(loadSupportedCountries(countries));
  },
  loadingComplete: () => {
    dispatch(loadingComplete());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
