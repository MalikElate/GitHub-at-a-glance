import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* getAllUser(action){ 
  for (let user of action.payload) { 
      try {
          const response = yield axios.get(`https://api.github.com/users/${user.name}?access_token=913f20e25e454b699cbf7b4d5f3ae7fd516cafc4`);
              yield put({type: 'SAVE_DETAILS_GENRE', payload: response.data})
              console.log(response.data);
          }
          catch (error) {
              console.log('error with test gif get request', error);
          }
  }
}

function* rootSaga() {
  yield takeEvery('GET_ALL_USERS', getAllUser);
}

export default rootSaga;
