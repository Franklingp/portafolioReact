import { handleActions } from 'redux-actions';

const projectReducer = handleActions({
    GET_ALL_SUCCESS: (state, action) => {
        return [...action.payload];
    },
    DELETE_AN_PROJECT: (state, action) => {
        const newState = state.filter(project => project._id !== action.payload);
        return [...newState];
    },
    CREATE_NEW_PROJECT: (state, action) => {
        const newState = [...state, action.payload];
        return [...newState];
    },
    UPDATE_PROJECT: (state, {payload}) => {
        const newState = state.filter(project => project._id !== payload._id);
        return [...newState, payload];
    }
}, [])

export default projectReducer;