import { combineReducers, createStore } from 'redux';
import servicesReducer from './servicesReducer.js';
import imagesReducer from './imagesReducer.js';
import questionsReducer from './questionsReducer.js';
import feedbackReducer from "./feedbackReducer";

let reducers = combineReducers({
    servicesReducer: servicesReducer,
    imagesReducer: imagesReducer,
    questionsReducer: questionsReducer,
    feedbackReducer: feedbackReducer
})

let store = createStore(reducers);

export default store;