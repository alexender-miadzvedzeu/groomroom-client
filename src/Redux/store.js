import { combineReducers, createStore } from 'redux';
import servicesReducer from './servicesReducer.js';
import imagesReducer from './imagesReducer.js';
import questionsReducer from './questionsReducer.js';

let reducers = combineReducers({
    servicesReducer: servicesReducer,
    imagesReducer: imagesReducer,
    questionsReducer: questionsReducer
})

let store = createStore(reducers);

export default store;