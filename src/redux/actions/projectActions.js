import { createAction } from 'redux-actions';
import { projectHttp } from '../../service/fetch';

//I define the actions of projects here
export const getAllSuccess = createAction("GET_ALL_SUCCESS");
export const getAll = () => async (dispatch) => {
    try {
        const response = await projectHttp("GET", 'get', null);
        dispatch(getAllSuccess(response));
    } catch (error) {
        console.log(error);
    }
}

export const deleteProjectSuccess = createAction('DELETE_AN_PROJECT');
export const deleteProject = (id) => async (dispatch) => {
    try {
        const confirm = window.confirm('Esta seguro que desea eliminar este proyecto?');
        if (confirm) {
            projectHttp('DELETE', `remove/${id}`, null);
            dispatch(deleteProjectSuccess(id));
        }
    }
    catch (error) {
        console.log(error);
    }
}

export const addNewProjectSuccess = createAction('CREATE_NEW_PROJECT');
export const addNewProject = (data) => async (dispatch) => {
    try {
        // let data = new FormData();
        // data.append('name', project.name);
        // data.append('image', project.image);
        // data.append('git', project.git);
        // data.append('url', project.url);
        // data.append('category', project.category);
        // data.append('description', project.description);
        const response = await projectHttp('POST', `add`, data);
        dispatch(addNewProjectSuccess(response));
    }
    catch (error) {
        console.log(error);
        alert("Hubo un error al intentar crear el nuevo proyecto.")
    }
}

export const updateProjectSuccess = createAction('UPDATE_PROJECT');
export const updateProject = (project) => async (dispatch) => {
    try {
        let data = new FormData();
        data.append('name', project.name);
        data.append('image', project.image);
        data.append('git', project.git);
        data.append('url', project.url);
        data.append('category', project.category);
        data.append('description', project.description);
        const response = await projectHttp('PUT', `update/${project._id}`, data);
        dispatch(updateProjectSuccess(response));
    }
    catch (error) {
        console.log(error);
    }
}