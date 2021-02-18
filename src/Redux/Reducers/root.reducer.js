import { combineReducers } from 'redux';

const candidates = (state = [], action) => {
  switch (action.type) {
    case 'SET_CANDIDATES':
      return action.payload;
    default:
      return state;
  }
};

const candidatesDetails = (state = [], action) => {
  switch (action.type) {
    case 'SET_CANDIDATES_DETAILS':
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({ 
  candidates, 
  candidatesDetails
})

export default rootReducer;