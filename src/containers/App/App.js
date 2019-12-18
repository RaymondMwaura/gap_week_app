/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import FirstLabels from '../../components/FirstLabels/FirstLabels';
import CountrySelection from '../CountrySelection/CountrySelection';
import CurrencyDetails from '../../components/CurrencyDetails/CurrencyDetails';
import ExchangeValue from '../../components/ExchangeValue/ExchangeValue';
import { setName } from '../../actions/userActions';

const App = (props) => (
  <div className="App">
    <h3 className="currencyConvertTitle">Currency Conversion</h3>
    <div>
      <p>{props.user.name}</p>
      <FirstLabels />
      <CountrySelection />
      <CurrencyDetails />
      <ExchangeValue />
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  user: state.user,
  math: state.math,
});

const mapDispatchToProps = (dispatch) => ({
  setName: (name) => {
    dispatch(setName(name));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
