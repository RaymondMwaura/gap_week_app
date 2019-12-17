import React, { Component } from 'react';
import './App.css';
import FirstLabels from './components/FirstLabels/FirstLabels';
import CountrySelection from './components/CountrySelection/CountrySelection';
import CurrencyDetails from './components/CurrencyDetails/CurrencyDetails';
import ExchangeValue from './components/ExchangeValue/ExchangeValue';


// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div className="App">
        <h3 className="currencyConvertTitle">Currency Conversion</h3>
        <div>
          <FirstLabels />
          <CountrySelection />
          <CurrencyDetails />
          <ExchangeValue />
        </div>
      </div>
    );
  }
}

export default App;
