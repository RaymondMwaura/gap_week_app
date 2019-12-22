[![Build Status](https://travis-ci.org/RaymondMwaura/gap_week_app.svg?branch=develop)](https://travis-ci.org/RaymondMwaura/gap_week_app)
[![Maintainability](https://api.codeclimate.com/v1/badges/7202fabf0297377106b1/maintainability)](https://codeclimate.com/github/RaymondMwaura/gap_week_app/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/7202fabf0297377106b1/test_coverage)](https://codeclimate.com/github/RaymondMwaura/gap_week_app/test_coverage)

# Currency Converter

This App consumes the two APIs below to create a currency converter:

- [Currency Exchange](https://rapidapi.com/fyhao/api/currency-exchange)
- [REST Countries v1](https://rapidapi.com/apilayernet/api/rest-countries-v1)

## Getting Started

Clone this repo and install dependencies with `npm install`.

### Starting The Dev Server

Start the server by running

```BASH
npm start
```

This starter uses webpack-dev-server to spin up an Express server with Hot-Reloading capability. Changes to code in `.src` will cause pages to reload.

### Using the App

- Select the two countries you want to do the computation on
- Enter the amount of money based on the first currency (on the left) that you want to convert
- Click on the 'Convert' button to get the exchange rate as well as the converted total amount

### The Currency converter in action
![Image description](public/img/snapshot.png)