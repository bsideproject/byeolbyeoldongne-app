import { createAction, handleActions } from 'redux-actions';

// action types
const prefix = '@categories';

const SET_CURRENT_CATEGORIES = `${prefix}/SET_CURRENT_CATEGORIES`;

// actions
export const setCurrentGeolocation = createAction(
    SET_CURRENT_CATEGORIES,
    (categories) => {
        return { categories };
    }
);

/**
 * initial categories => api로 전환
 */
const initialState = {
    currentCategories: [
        { name: 'cafe.png', label: '카세권' },
        { name: 'drugstore.png', label: '편세권' },
        { name: 'pt.png', label: '운세권' },
        { name: 'berger.png', label: '햄세권' },
        { name: 'hospital.png', label: '의세권' },
        { name: 'forest.png', label: '숲세권' },
        { name: 'mall.png', label: '몰세권' },
    ],
};

// reducer
export default handleActions(
    {
        [SET_CURRENT_CATEGORIES]: (state, action) => ({
            ...state,
            currentCategories: action.payload.categories,
        }),
    },
    initialState
);
