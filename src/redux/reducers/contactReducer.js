
import { handleActions } from 'redux-actions';

const contactReducer = handleActions({
    NEW_MESSAGE: (state, {payload}) => {
        return [...state, payload];
    },
    GET_ALL_MESSAGES: (state, {payload}) => {
        return [...payload];
    },
    READ_MESSAGE: (state, {payload}) => {
        const newState = state.map(message => {
            if(message.id === payload.id){
                const newMessage = message;
                newMessage.read = !message.read;
                return newMessage;
            }else{
                return message;
            }
        });
        return [...newState];
    },
    DELETE_MESSAGE: (state, {payload}) => {
        const newState = state.filter(message => message.id !== payload);
        return [...newState];
    }
}, []);

export default contactReducer;