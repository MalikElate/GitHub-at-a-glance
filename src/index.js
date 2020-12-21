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


ReactDOM.render(<App />, document.getElementById('root'));
