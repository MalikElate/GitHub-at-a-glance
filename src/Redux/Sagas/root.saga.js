import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getAllCandidatesDetails(action){ 
  for (let user of action.payload) { 
    try {
      console.log(user)
      const response = yield axios.get(`https://api.github.com/users/${user}?access_token=913f20e25e454b699cbf7b4d5f3ae7fd516cafc4`);
          yield put({type: 'SET_CANDIDATES_DETAILS', payload: response.data})
          console.log(response.data);
      }
      catch (error) {
          console.log('error with test gif get request', error);
    }
  }
}
function* getAllCandidates(){
  try { 
    const response = yield axios.get('/students')
    yield put({type: 'SET_CANDIDATES', payload: response.data})
  } catch (error) { 
    console.log('error in getAllUsers reducer', error); 
  }
}


function* rootSaga() {
  yield takeEvery('GET_ALL_CANDIDATES', getAllCandidates);
  yield takeEvery('GET_ALL_CANDIDATES_DETAILS', getAllCandidatesDetails);
}

export default rootSaga;
