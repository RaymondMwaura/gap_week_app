const countryState = {
  supportedCountries: [],
};

const countryReducer = (state = countryState, action) => {
  switch (action.type) {
    case 'LOAD_SUPPORTED_COUNTRIES':
      return {
        ...state,
        supportedCountries: [...state.supportedCountries, action.payload],
      };
    default:
      break;
  }
  return state;
};

export default countryReducer;
