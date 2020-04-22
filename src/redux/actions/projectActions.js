import { createAction } from 'redux-actions';
import config from '../../config';
import { projectHttp } from '../../service/fetch';

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

export const deleteProjectSuccess = createAction('DELETE_AN_PROJECT');
export const deleteProject = (id) => async (dispatch) => {
    try{
        projectHttp('DELETE', `remove/${id}`, null);
        dispatch(deleteProjectSuccess(id));
    }
    catch(error){
        console.log(error);
    }

}