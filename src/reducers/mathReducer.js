const mathState = {
  result: 1,
  lastValues: [],
};

// state and action are automatically passed by Redux
// here we assign state to the initialState in case no state is passed to the reducer
const mathReducer = (state = mathState, action) => {
  switch (action.type) {
    case 'ADD':
      // return Object.assign({}, state, { definitions: action.definitions });
      state = {
        ...state,
        result: state.result + action.payload,
        lastValues: [...state.lastValues, action.payload],
      };
      break;
    case 'SUBTRACT':
      state = {
        ...state,
        result: state.result - action.payload,
        lastValues: [...state.lastValues, action.payload],
      };
      break;
    default:
      break;
  }
  return state;
};

export default mathReducer;
