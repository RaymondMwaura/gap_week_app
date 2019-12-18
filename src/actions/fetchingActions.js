const displayIsLoading = () => ({
  type: 'IS_LOADING',
});

const loadingComplete = () => ({
  type: 'HAS_LOADED',
});

const displayIsLoadingCurrencies = () => ({
  type: 'IS_LOADING_CURRENCIES',
});

const loadingCompleteCurrencies = () => ({
  type: 'HAS_LOADED_CURRENCIES',
});

export {
  displayIsLoading,
  loadingComplete,
  displayIsLoadingCurrencies,
  loadingCompleteCurrencies,
};
