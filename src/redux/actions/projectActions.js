import { createAction } from 'redux-actions';
import { projectHttp } from '../../service/fetch';

//I define the actions of projects here
export const getAllSuccess = createAction("GET_ALL_SUCCESS");
export const getAll = () => async (dispatch) => {
    try {
        const response = await projectHttp("GET", null);
        dispatch(getAllSuccess(response));
    } catch (error) {
        console.log(error);
    }
}

export const deleteProjectSuccess = createAction('DELETE_AN_PROJECT');
export const deleteProject = (id) => async (dispatch) => {
    try {
        const response = await projectHttp('DELETE', id);
        dispatch(deleteProjectSuccess(response));
    }
    catch (error) {
        console.log(error);
    }
}

export const addNewProjectSuccess = createAction('CREATE_NEW_PROJECT');
export const addNewProject = (data) => async (dispatch) => {
    try {
        const response = await projectHttp('POST', data);
        dispatch(addNewProjectSuccess(response));
    }
    catch (error) {
        console.log(error);
        alert("Hubo un error al intentar crear el nuevo proyecto.")
    }
}

export const updateProjectSuccess = createAction('UPDATE_PROJECT');
export const updateProject = (data) => async (dispatch) => {
    try {
        const response = await projectHttp('POST', data);
        dispatch(updateProjectSuccess(response));
    }
    catch (error) {
        console.log(error);
    }
}