import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getAllCandidatesDetails(action){ 
  try { 
    const response = yield axios.get(`https://api.github.com/users/${action.payload}?access_token=${process.env.REACT_APP_GitHubAPIKey}`);
    yield put({type: 'SET_CANDIDATES_DETAILS', payload: response.data })
  } catch (error) { 
    console.log('error in getAllCandidatesDetails', error);
  }
}

function* removeCandidatesDetails(action){ 
  try { 
    yield axios.delete(`/candidate/${action.payload}`);
    yield put({type: 'GET_ALL_CANDIDATES'}); 
  } catch (error) { 
    console.log('error in getAllCandidatesDetails', error);
  }
}

function* addCandidate(action){
  try { 
    console.log(action.payload.github_name)
    yield axios.post('/candidate', {github_name: action.payload.github_name}); 
    yield put({type: 'GET_ALL_CANDIDATES'}); 
  } catch (error) { 
    console.log('error in getAllUsers saga', error); 
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
  yield takeEvery('REMOVE_CANDIDATE', removeCandidatesDetails);            
  yield takeEvery('ADD_CANDIDATE', addCandidate);            
}

export default rootSaga
