import { createAction, handleActions } from 'redux-actions';

// action types
const prefix = '@user';

const SET_USER = `${prefix}/SET_USER`;

// actions
export const setUser = createAction(SET_USER, (user) => {
    return {
        user,
    };
});

// initial region: 강남 사거리
const initialState = {
    user: null,
};

// reducer
export default handleActions(
    {
        [SET_USER]: (state, action) => action.payload.user,
    },
    initialState
);
