import { createStore, combineReducers } from 'redux';
import geolocation from './geolocation';
import categories from './categories';

const rootReducer = combineReducers({
    geolocation,
    categories,
});

export default createStore(rootReducer);
