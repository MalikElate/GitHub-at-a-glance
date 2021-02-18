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
import rootSaga from './Redux/Sagas/imperator.saga'; 
import createSagaMiddleware from 'redux-saga';


const sagaMiddleware = createSagaMiddleware();


const storeInstance = createStore(
    combineReducers({
 
    }),
    // Add sagaMiddleware to our store
        applyMiddleware(sagaMiddleware, logger),
    );
            
            // Create sagaMiddleware
sagaMiddleware.run(rootSaga);
            
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root')); 