const userState = {
  name: 'Raymond',
  age: 26,
};

// state and action are automatically passed by Redux
// here we assign state to the initialState in case no state is passed to the reducer
const userReducer = (state = userState, action) => {
  switch (action.type) {
    case 'SET_NAME':
      state = {
        ...state,
        name: action.payload,
      };
      break;
    case 'SET_AGE':
      state = {
        ...state,
        age: action.payload,
      };
      break;
    default:
      break;
  }
  return state;
};

export default userReducer;
