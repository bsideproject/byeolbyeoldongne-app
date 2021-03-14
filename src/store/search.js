import { createAction, handleActions } from 'redux-actions';
import {
    createFailureState,
    createInitialState,
    createPendingState,
    createRequestThunk,
    createRequestThunkTypes,
    createSuccessState,
} from './helper/reduxThunkHelper';
import { fetchLocationList } from '../api/search';
import renameKeys from '../util/renameKeys';
import snakeToCamel from '../util/snakeToCamel';
import { initialCurrentLocation } from './helper/initialStates';

// action types
const prefix = '@search';

const FETCH_LOCATION_LIST = createRequestThunkTypes(
    `${prefix}/FETCH_LOCATION_LIST`
);
const INITIALIZE_FETCH_LOCATION_LIST = `${prefix}/INITIALIZE_FETCH_LOCATION_LIST`;
const SET_CURRENT_LOCATION = `${prefix}/SET_CURRENT_LOCATION`;
const INITIALIZE_CURRENT_LOCATION = `${prefix}/INITIALIZE_CURRENT_LOCATION`;
const SET_CURRENT_SEARCH_TEXT = `${prefix}/SET_CURRENT_SEARCH_TEXT`;

// actions
export const fetchLocationListAsync = (query) => {
    return createRequestThunk({
        actionType: FETCH_LOCATION_LIST.DEFAULT,
        request: fetchLocationList,
        params: query,
    });
};
export const initializeFetchLocationList = createAction(
    INITIALIZE_FETCH_LOCATION_LIST
);

export const setCurrentLocation = createAction(
    SET_CURRENT_LOCATION,
    (payload) => {
        return {
            ...payload,
        };
    }
);

export const initializeCurrentLocation = createAction(
    INITIALIZE_CURRENT_LOCATION
);

export const setCurrentSearchText = createAction(
    SET_CURRENT_SEARCH_TEXT,
    (payload) => payload
);
// initial state
const initialState = {
    fetchLocationList: createInitialState([]),
    currentLocation: initialCurrentLocation,
    currentSearchText: '',
};

// reducer
export default handleActions(
    {
        [FETCH_LOCATION_LIST.PENDING]: (state) => ({
            ...state,
            fetchLocationList: createPendingState(),
        }),
        [FETCH_LOCATION_LIST.SUCCESS]: (state, action) => {
            const data = action.payload.data.map((obj) =>
                renameKeys(obj, snakeToCamel)
            );
            return {
                ...state,
                fetchLocationList: createSuccessState(data),
            };
        },
        [FETCH_LOCATION_LIST.FAILURE]: (state, action) => ({
            ...state,
            fetchLocationList: createFailureState(action.payload),
        }),
        [INITIALIZE_FETCH_LOCATION_LIST]: (state) => ({
            ...state,
            fetchLocationList: createInitialState([]),
        }),

        [SET_CURRENT_LOCATION]: (state, action) => ({
            ...state,
            currentLocation: {
                addressName: action.payload.addressName,
                placeId: action.payload.placeId,
                placeName: action.payload.placeName,
                roadAddress: action.payload.roadAddress,
                x: action.payload.x,
                y: action.payload.y,
            },
        }),
        [INITIALIZE_CURRENT_LOCATION]: (state) => ({
            ...state,
            currentLocation: initialCurrentLocation,
        }),

        [SET_CURRENT_SEARCH_TEXT]: (state, action) => ({
            ...state,
            currentSearchText: action.payload,
        }),
    },
    initialState
);
