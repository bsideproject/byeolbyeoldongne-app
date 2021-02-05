import { createStore, combineReducers } from 'redux';
import geolocation from './geolocation';

const rootReducer = combineReducers({
    geolocation,
});

export default createStore(rootReducer);
