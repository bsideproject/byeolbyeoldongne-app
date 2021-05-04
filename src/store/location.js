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
import { round } from 'lodash';

// action types
const prefix = '@location';

const FETCH_TOWN = createRequestThunkTypes(`${prefix}/FETCH_TOWN`);
const SET_COORDS = `${prefix}/SET_COORDS`;

// actions
export const fetchTownAsync = (latitude, longitude) => {
    return createRequestThunk({
        actionType: FETCH_TOWN.DEFAULT,
        request: fetchLocationByPosition,
        params: {
            latitude: round(latitude, 7),
            longitude: round(longitude, 7),
        },
    });
};

export const setCoords = createAction(SET_COORDS, (latitude, longitude) => {
    return {
        latitude: round(latitude, 7),
        longitude: round(longitude, 7),
    };
});

// initial state
const initialState = {
    town: createInitialState(),
    coords: {
        latitude: 37.497952,
        longitude: 127.027638,
    },
};

// reducer
export default handleActions(
    {
        [FETCH_TOWN.PENDING]: (state) => ({
            ...state,
            town: createPendingState(),
        }),
        [FETCH_TOWN.SUCCESS]: (state, action) => {
            const renamed = renameKeys(action.payload.data, snakeToCamel);
            return {
                ...state,
                town: createSuccessState(renamed),
            };
        },
        [FETCH_TOWN.FAILURE]: (state, action) => ({
            ...state,
            town: createFailureState(action.payload),
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
