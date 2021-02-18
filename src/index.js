import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './components/App/App';
import axios from 'axios'; 
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import {takeEvery, put} from 'redux-saga/effects';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';


const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
    yield takeEvery('GET_ALL_USERS', getAllUser); 
}

const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_DISPLAYED_USERS':
            return action.payload;
            default:
                return state;
            }
}

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

const storeInstance = createStore(
    combineReducers({
        genres,
    }),
    // Add sagaMiddleware to our store
        applyMiddleware(sagaMiddleware, logger),
    );
            
            // Create sagaMiddleware
sagaMiddleware.run(rootSaga);
            
ReactDOM.render(<App />, document.getElementById('root'));