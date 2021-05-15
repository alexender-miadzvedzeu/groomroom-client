import { combineReducers, createStore } from 'redux';
import servicesReducer from './servicesReducer.js';
import imagesReducer from './imagesReducer.js';

let reducers = combineReducers({
    servicesReducer: servicesReducer,
    imagesReducer: imagesReducer
})

let store = createStore(reducers);

export default store;