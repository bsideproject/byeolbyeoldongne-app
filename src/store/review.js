import { handleActions } from 'redux-actions';
import {
    createFailureState,
    createInitialState,
    createPendingState,
    createRequestThunk,
    createRequestThunkTypes,
    createSuccessState,
} from './helper/reduxThunkHelper';
import { fetchReviews } from '../api/review';
import renameKeys from '../util/renameKeys';
import snakeToCamel from '../util/snakeToCamel';
import calAverageReviews from '../util/calAverageReviews';

// action types
const prefix = '@review';

const FETCH_REVIEWS = createRequestThunkTypes(`${prefix}/FETCH_REVIEWS`);

// actions
export const fetchReviewAsync = (placeId) => {
    return createRequestThunk({
        actionType: FETCH_REVIEWS.DEFAULT,
        request: fetchReviews,
        params: { placeId },
    });
};

// initial state
const initialState = {
    reviews: createInitialState(),
    averagePoint: 0,
};

// reducer
export default handleActions(
    {
        [FETCH_REVIEWS.PENDING]: (state) => ({
            ...state,
            reviews: createPendingState(),
        }),
        [FETCH_REVIEWS.SUCCESS]: (state, action) => {
            const renamed = renameKeys(action.payload.data, snakeToCamel);
            return {
                ...state,
                reviews: createSuccessState(action.payload.data),
                averagePoint: calAverageReviews(renamed),
            };
        },
        [FETCH_REVIEWS.FAILURE]: (state, action) => ({
            ...state,
            reviews: createFailureState(action.payload),
        }),
    },
    initialState
);
