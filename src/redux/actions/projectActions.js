import { createAction } from 'redux-actions';
import config from '../../config';

const url = config.url+"/proyect/";

//I define the actions of projects here
export const getAllSuccess = createAction("GET_ALL_SUCCESS");
export const getAll = () => async (dispatch) => {
    try{
        const response = await fetch(`${url}/get`);
        const json = await response.json();
        dispatch(getAllSuccess(json.Proyect));
    }catch(error){
        console.log(error);
    }
}
