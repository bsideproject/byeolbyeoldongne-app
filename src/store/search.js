import { handleActions } from 'redux-actions';
import {
    createFailureState,
    createInitialState,
    createPendingState,
    createRequestThunk,
    createRequestThunkTypes,
    createSuccessState,
} from './helper/reduxThunkHelper';
import { fetchLocationList } from '../api/search';

// action types
const prefix = '@search';

const FETCH_LOCATION_LIST = createRequestThunkTypes(`${prefix}/FETCH_LOCATION_LIST`);

// actions
export const fetchLocationListAsync = (query) => {
    return createRequestThunk({
        actionType: FETCH_LOCATION_LIST.DEFAULT,
        request: fetchLocationList,
        params: query,
    });
};

// initial region: 강남 사거리
const initialState = {
    fetchLocationList: createInitialState(),
};

// reducer
export default handleActions(
    {
        [FETCH_LOCATION_LIST.PENDING]: (state) => ({
            ...state,
            fetchLocationList: createPendingState(),
        }),
        [FETCH_LOCATION_LIST.SUCCESS]: (state, action) => ({
            ...state,
            fetchLocationList: createSuccessState(action.payload.data),
        }),
        [FETCH_LOCATION_LIST.FAILURE]: (state, action) => ({
            ...state,
            fetchLocationList: createFailureState(action.payload),
        }),
    },
    initialState
);
