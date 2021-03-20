import { createAction, handleActions } from 'redux-actions';

// action types
const prefix = '@geolocation';

const SET_CURRENT_GEOLOCATION = `${prefix}/SET_CURRENT_GEOLOCATION`;
const SET_CURRENT_COORDS = `${prefix}/SET_CURRENT_COORDS`;

// actions
export const setCurrentGeolocation = createAction(
    SET_CURRENT_GEOLOCATION,
    (latitude, longitude) => {
        return {
            latitude,
            longitude,
        };
    }
);

export const setCurrentCoords = createAction(
    SET_CURRENT_GEOLOCATION,
    (latitude, longitude) => {
        return {
            latitude,
            longitude,
        };
    }
);

// initial region: 강남 사거리
const initialState = {
    currentGeolocation: {
        latitude: 37.4979521720737,
        longitude: 127.027638348418,
    },
    currentCoords: {
        latitude: 37.4979521720737,
        longitude: 127.027638348418,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
    },
};

// reducer
export default handleActions(
    {
        [SET_CURRENT_GEOLOCATION]: (state, action) => ({
            ...state,
            currentGeolocation: {
                latitude: action.payload.latitude,
                longitude: action.payload.longitude,
            },
            currentCoords: {
                ...initialState.currentCoords,
                latitude: action.payload.latitude,
                longitude: action.payload.longitude,
            },
        }),
        [SET_CURRENT_COORDS]: (state, action) => ({
            ...state,
            currentCoords: {
                ...initialState.currentCoords,
                latitude: action.payload.latitude,
                longitude: action.payload.longitude,
            },
        }),
    },
    initialState
);
