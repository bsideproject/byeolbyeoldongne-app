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

const FETCH_TOWN = createRequestThunkTypes(`${prefix}/FETCH_TOWN`);
const SET_COORDS = `${prefix}/SET_COORDS`;

// actions
export const fetchTownAsync = (latitude, longitude) => {
    return createRequestThunk({
        actionType: FETCH_TOWN.DEFAULT,
        request: fetchLocationByPosition,
        params: { latitude, longitude },
    });
};

export const setCoords = createAction(SET_COORDS, (latitude, longitude) => {
    return { latitude, longitude };
});

// initial state
const initialState = {
    town: createInitialState(),
    coords: {
        latitude: 37.4979521720737,
        longitude: 127.027638348418,
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
            return {
                ...state,
                town: createSuccessState(
                    renameKeys(action.payload.data, snakeToCamel)
                ),
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
