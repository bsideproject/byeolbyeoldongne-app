import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import geolocation from './geolocation';
import search from './search';
import location from './location';
import review from './review';

const rootReducer = combineReducers({
    geolocation,
    search,
    location,
    review,
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(ReduxThunk, logger))
);

export default store;
