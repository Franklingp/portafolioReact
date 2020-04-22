import { handleActions } from 'redux-actions';

const projectReducer = handleActions({
    GET_ALL_SUCCESS: (state, action) => {
        return [...action.payload];
    },
    DELETE_AN_PROJECT: (state, action) => {
        const newState = state.filter(project => project._id !== action.payload);
        return [...newState];
    }
}, [])

export default projectReducer;