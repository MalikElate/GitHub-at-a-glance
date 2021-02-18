import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './components/App/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './Redux/Sagas/root.saga'; 
import rootReducer from './Redux/Reducers/root.reducer'; 

const sagaMiddleware = createSagaMiddleware();
const storeInstance = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware, logger),
);
            
sagaMiddleware.run(rootSaga);
            
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root')); 