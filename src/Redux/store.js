import { combineReducers, createStore } from 'redux';
import servicesReducer from './servicesReducer.js';

let reducers = combineReducers({
    servicesReducer: servicesReducer
})

let store = createStore(reducers);

export default store;