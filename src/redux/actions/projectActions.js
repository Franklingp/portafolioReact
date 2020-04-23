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

export const addNewProjectSuccess = createAction('CREATE_NEW_PROJECT');
export const addNewProject = (project) => async (dispatch) => {
    try{
        const response = await projectHttp('POST', `add`, project);
        dispatch(addNewProjectSuccess(response));
    }
    catch(error){
        console.log(error);
    }
}

export const updateProjectSuccess = createAction('UPDATE_PROJECT');
export const updateProject = (project) => async (dispatch) => {
    try{
        await projectHttp('PUT', `update/${project._id}`, project);
        dispatch(updateProjectSuccess(project));
    }
    catch(error){
        console.log(error);
    }
}