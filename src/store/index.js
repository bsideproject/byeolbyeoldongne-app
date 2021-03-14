import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import geolocation from './geolocation';
import categories from './categories';
import search from './search';

const rootReducer = combineReducers({
    geolocation,
    categories,
    search,
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(ReduxThunk, logger))
);

export default store;
