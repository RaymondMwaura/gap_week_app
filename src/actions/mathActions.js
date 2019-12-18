const addNumber = (number) => ({
  type: 'ADD',
  payload: number,
});

const subtractNumber = (number) => ({
  type: 'SUBTRACT',
  payload: number,
});

export {
  addNumber,
  subtractNumber,
};
