import { createAction, handleActions } from 'redux-actions';
import {
    createFailureState,
    createInitialState,
    createPendingState,
    createRequestThunk,
    createRequestThunkTypes,
    createSuccessState,
} from './helper/reduxThunkHelper';
import { fetchLocationByPosition } from '../api/location';
import renameKeys from '../util/renameKeys';
import snakeToCamel from '../util/snakeToCamel';

// action types
const prefix = '@location';

const FETCH_LOCATION = createRequestThunkTypes(`${prefix}/FETCH_LOCATION`);
const SET_COORDS = `${prefix}/SET_COORDS`;

// actions
export const fetchLocationAsync = (latitude, longitude) => {
    return createRequestThunk({
        actionType: FETCH_LOCATION.DEFAULT,
        request: fetchLocationByPosition,
        params: { latitude, longitude },
    });
};

export const setCoords = createAction(SET_COORDS, (latitude, longitude) => {
    return { latitude, longitude };
});

// initial state
const initialState = {
    location: createInitialState(),
    coords: {
        latitude: 37.4979521720737,
        longitude: 127.027638348418,
    },
};

// reducer
export default handleActions(
    {
        [FETCH_LOCATION.PENDING]: (state) => ({
            ...state,
            location: createPendingState(),
        }),
        [FETCH_LOCATION.SUCCESS]: (state, action) => {
            const data = action.payload.data.map((obj) =>
                renameKeys(obj, snakeToCamel)
            );
            return {
                ...state,
                location: createSuccessState(data),
            };
        },
        [FETCH_LOCATION.FAILURE]: (state, action) => ({
            ...state,
            location: createFailureState(action.payload),
        }),

        [SET_COORDS]: (state, { payload }) => ({
            ...state,
            coords: {
                latitude: payload.latitude,
                longitude: payload.longitude,
            },
        }),
    },
    initialState
);
