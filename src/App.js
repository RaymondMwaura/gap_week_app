import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import CountriesPage from "./views/CountriesPage";
import NotFound from "./views/NotFoundPage";
import CurrencyConverterPage from "./views/CurrencyConverterPage";
import store from "./store";
import "./App.css";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={CurrencyConverterPage} />
            <Route path="/countries" exact component={CountriesPage} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}
