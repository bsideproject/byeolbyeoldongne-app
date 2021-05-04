import { handleActions, createAction } from 'redux-actions';
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
import sortBy from 'lodash.sortby';

// action types
const prefix = '@review';

const FETCH_REVIEWS = createRequestThunkTypes(`${prefix}/FETCH_REVIEWS`);
const SORT_BY_RECENT_REVIEWS = createRequestThunkTypes(
    `${prefix}/SORT_BY_RECENT_REVIEWS`
);
const SORT_BY_POPULAR_REVIEWS = createRequestThunkTypes(
    `${prefix}/SORT_BY_POPULAR_REVIEWS`
);

// actions
export const fetchReviewAsync = (placeId) => {
    return createRequestThunk({
        actionType: FETCH_REVIEWS.DEFAULT,
        request: fetchReviews,
        params: { placeId },
    });
};

export const sortByRecentReviews = createAction(SORT_BY_RECENT_REVIEWS);
export const sortByPopularReviews = createAction(SORT_BY_POPULAR_REVIEWS);

// initial state
const initialState = {
    reviews: createInitialState(),
    averagePoint: 0,
};

/**
 * 임시 mock data
 */

const tempData = [
    {
        trafficPoint: 4,
        conveniencePoint: 5,
        noisePoint: 3,
        safetyPoint: 1,
        reviewMainContent: '짧은 글 테스트',
        nickname: '닉네임',
        createdAt: new Date('2020-01-31').toISOString(),
        reviewGoodContent: '짧은 좋은 컨텐츠',
        reviewBadContent: '짧은 나쁜 컨텐츠',
        roadAddress: '주소1',
        like: 10,
        comments: [
            {
                id: 0,
                text: '공감합니다.',
                like: 1,
                nickname: '홍길동',
                createdAt: new Date('2021-04-02').toISOString(),
                comments: [
                    {
                        id: 1,
                        text: 'ㅇㄱㄹㅇ',
                        like: 10,
                        nickname: '둘리',
                        createdAt: new Date('2021-04-03').toISOString(),
                    },
                    {
                        id: 2,
                        text: '맞아요 아침에 너무 시끄러움ㅠ',
                        like: 10,
                        nickname: '도우너',
                        createdAt: new Date('2021-04-04').toISOString(),
                    },
                ],
            },
        ],
    },
    {
        trafficPoint: 1,
        conveniencePoint: 3,
        noisePoint: 5,
        safetyPoint: 3,
        reviewMainContent: '긴 글 테스트',
        nickname: '닉네임1',
        createdAt: new Date('2021-04-01').toISOString(),
        reviewGoodContent:
            '최대한 길었을 때 어떻게 보여줄 지 알아보자... 최대한 길었을 때 어떻게 보여줄 지 알아보자... 최대한 길었을 때 어떻게 보여줄 지 알아보자... 최대한 길었을 때 어떻게 보여줄 지 알아보자... 최대한 길었을 때 어떻게 보여줄 지 알아보자... 최대한 길었을 때 어떻게 보여줄 지 알아보자...',
        reviewBadContent:
            '최대한 길었을 때 어떻게 보여줄 지 알아보자... 최대한 길었을 때 어떻게 보여줄 지 알아보자... 최대한 길었을 때 어떻게 보여줄 지 알아보자... 최대한 길었을 때 어떻게 보여줄 지 알아보자... 최대한 길었을 때 어떻게 보여줄 지 알아보자... 최대한 길었을 때 어떻게 보여줄 지 알아보자...',
        roadAddress: '주소2',
        like: 114,
    },
    {
        trafficPoint: 5,
        conveniencePoint: 5,
        noisePoint: 5,
        safetyPoint: 5,
        reviewMainContent: '중간 글 테스트',
        nickname: '닉네임2',
        createdAt: new Date('2021-04-12').toISOString(),
        reviewGoodContent:
            '짧은 좋은 컨텐츠짧은 좋은 컨텐츠짧은 좋은 컨텐츠짧은 좋은 컨텐츠짧은 좋은 컨텐츠',
        reviewBadContent:
            '짧은 좋은 컨텐츠짧은 좋은 컨텐츠짧은 좋은 컨텐츠짧은 좋은 컨텐츠짧은 좋은 컨텐츠',
        roadAddress: '주소3',
        like: 17,
        comments: [
            {
                id: 5,
                text: '공감합니다.',
                like: 1,
                nickname: '홍길동',
                createdAt: new Date('2021-04-02').toISOString(),
                comments: [
                    {
                        id: 6,
                        text: 'ㅇㄱㄹㅇ',
                        like: 10,
                        nickname: '둘리',
                        createdAt: new Date('2021-04-03').toISOString(),
                    },
                    {
                        id: 7,
                        text: '맞아요 아침에 너무 시끄러움ㅠ',
                        like: 10,
                        nickname: '도우너',
                        createdAt: new Date('2021-04-04').toISOString(),
                    },
                ],
            },
        ],
    },
    {
        trafficPoint: 1,
        conveniencePoint: 1,
        noisePoint: 1,
        safetyPoint: 1,
        reviewMainContent: '조금 긴 글 테스트',
        nickname: '닉네임3',
        createdAt: new Date('2020-11-30').toISOString(),
        reviewGoodContent:
            '짧은 좋은 컨텐츠 짧은 좋은 컨텐츠짧은 좋은 컨텐츠짧은 좋은 컨텐츠짧은 좋은 컨텐츠짧은 좋은 컨텐츠짧은 좋은 컨텐츠',
        reviewBadContent:
            '짧은 나쁜 컨텐츠 짧은 나쁜 컨텐츠짧은 나쁜 컨텐츠짧은 나쁜 컨텐츠짧은 나쁜 컨텐츠짧은 나쁜 컨텐츠짧은 나쁜 컨텐츠짧은 나쁜 컨텐츠짧은 나쁜 컨텐츠',
        roadAddress: '주소4',
        like: 1,
    },
];

// reducer
export default handleActions(
    {
        [FETCH_REVIEWS.PENDING]: (state) => ({
            ...state,
            reviews: createPendingState(),
            // reviews: createSuccessState(tempData),
        }),
        [FETCH_REVIEWS.SUCCESS]: (state, action) => {
            const reviews = action.payload.data.length
                ? action.payload.data
                : tempData;
            const renamed = renameKeys(reviews, snakeToCamel);
            const sorted = sortBy(
                renamed,
                (review) => review.createdAt
            ).reverse();
            return {
                ...state,
                reviews: createSuccessState(sorted),
                averagePoint: calAverageReviews(sorted),
            };
        },
        [FETCH_REVIEWS.FAILURE]: (state, action) => ({
            ...state,
            reviews: createSuccessState(
                sortBy(tempData, (review) => review.createdAt).reverse()
            ),
            // reviews: createFailureState(action.payload),
        }),
        [SORT_BY_RECENT_REVIEWS]: (state) => {
            const sorted = sortBy(
                state.reviews.data,
                (review) => review.createdAt
            ).reverse();
            return {
                ...state,
                reviews: createSuccessState(sorted),
            };
        },
        [SORT_BY_POPULAR_REVIEWS]: (state) => {
            const sorted = sortBy(
                state.reviews.data,
                ({ trafficPoint, conveniencePoint, noisePoint, safetyPoint }) =>
                    trafficPoint + conveniencePoint + noisePoint + safetyPoint
            ).reverse();
            return {
                ...state,
                reviews: createSuccessState(sorted),
            };
        },
    },
    initialState
);
