import { handleActions } from 'redux-actions';

const projectReducer = handleActions({
    GET_ALL_SUCCESS: (state, action) => {
        return [...action.payload];
    }
}, [])

export default projectReducer;