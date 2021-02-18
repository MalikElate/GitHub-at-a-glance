const candidates = (state = [], action) => {
  switch (action.type) {
    case 'SET_IMPERATOR':
      return action.payload;
    default:
      return state;
  }
};

export default candidates;
