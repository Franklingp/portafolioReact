import { createAction } from 'redux-actions';
import { contactHttp } from '../../service/fetch';

//Actions to manage the messages
export const addNewMessageSuccess = createAction('NEW_MESSAGE');
export const addNewMessage = body => async (dispatch) => {
    try{
        const response = await contactHttp('POST', 'add', body);
        dispatch(addNewMessageSuccess(response));
    }
    catch(error){
        console.log(error);
        throw new Error('Ha ocurrido un error al intentar realizar la peticion');
    }
}

export const getAllMessageSuccess = createAction('GET_ALL_MESSAGES');
export const getAllMessage = () => async (dispatch) => {
    try{
        const response = await contactHttp('GET', 'get', null);
        dispatch(getAllMessageSuccess(response));
    }
    catch(error){
        console.log(error);
        throw new Error('Ha ocurrido un error al intentar realizar la peticion');
    }
}

export const changeReadSuccess = createAction("READ_MESSAGE");
export const changeRead = (id) => async (dispatch) => {
    try{
        const response = await contactHttp("GET", `get/${id}`, null);
        dispatch(changeReadSuccess(response));
    }
    catch(error){
        console.log(error);
        throw new Error('Ha ocurrido un error al intentar realizar la peticion');
    }
}

export const deleteMessageSuccess = createAction("DELETE_MESSAGE");
export const deleteMessage = (id) => async (dispatch) => {
    try{
        await contactHttp("DELETE", `remove/${id}`, null);
        dispatch(deleteMessageSuccess(id));
    }
    catch(error){
        console.log(error);
        throw new Error('Ha ocurrido un error al intentar realizar la peticion');
    }
}