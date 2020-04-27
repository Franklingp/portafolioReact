
import { handleActions } from 'redux-actions';

const contactReducer = handleActions({
    NEW_MESSAGE: (state, {payload}) => {
        return [...state, payload];
    }
}, []);

export default contactReducer;