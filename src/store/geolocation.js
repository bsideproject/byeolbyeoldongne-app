import { createAction, handleActions } from 'redux-actions';

// action types
const prefix = '@geolocation';

const SET_CURRENT_GEOLOCATION = `${prefix}/SET_CURRENT_GEOLOCATION`;

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

// initial region: 강남 사거리
const initialState = {
    latitude: 37.498126,
    longitude: 127.059176,
};

// reducer
export default handleActions(
    {
        [SET_CURRENT_GEOLOCATION]: (state, action) => ({
            ...state,
            latitude: action.payload.latitude,
            longitude: action.payload.longitude,
        }),
    },
    initialState
);
