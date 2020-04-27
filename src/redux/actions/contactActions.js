import { createAction } from 'redux-actions';
import { contacttHttp } from '../../service/fetch';

export const addNewMessageSuccess = createAction('NEW_MESSAGE');
export const addNewMessage = body => async (dispatch) => {
    try{
        const response = await contacttHttp('POST', 'add', body);
        dispatch(addNewMessageSuccess(response));
    }
    catch(error){
        console.log(error);
        throw new Error('Ha ocurrido un error al intentar realizar la peticion');
    }
}