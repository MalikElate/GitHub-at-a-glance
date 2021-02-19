import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getAllCandidatesDetails(action){ 
  try { 
    const response = yield axios.get(`https://api.github.com/users/${action.payload}?access_token=${process.env.REACT_APP_GitHubAPIKey}`);
    yield put({type: 'SET_CANDIDATES_DETAILS', payload: response.data })
    console.log('getAllCandidatesDetails: response.data', response.data, 'action.payload', action.payload);
  } catch (error) { 
    console.log('error in getAllCandidatesDetails', error);
  }
}

function* removeCandidatesDetails(action){ 
  try { 
    console.log(action.payload,'action.payload');
    yield axios.delete('/candidate', action.payload);
  } catch (error) { 
    console.log('error in getAllCandidatesDetails', error);
  }
}

function* getAllCandidates(){
  try { 
    const response = yield axios.get('/candidate'); 
    yield put({type: 'SET_CANDIDATES', payload: response.data}); 
  } catch (error) { 
    console.log('error in getAllUsers saga', error); 
  }
}

function* rootSaga() {
  yield takeEvery('GET_ALL_CANDIDATES', getAllCandidates);
  yield takeEvery('GET_ALL_CANDIDATES_DETAILS', getAllCandidatesDetails);            
  yield takeEvery('REMOVE_CANDIDATES_DETAILS', removeCandidatesDetails);            
}

export default rootSaga
