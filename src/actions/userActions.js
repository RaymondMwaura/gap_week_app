const setName = (name) => ({
  type: 'SET_NAME',
  payload: name,
});

const setAge = (age) => ({
  type: 'SET_AGE',
  payload: age,
});

export {
  setName,
  setAge,
};
