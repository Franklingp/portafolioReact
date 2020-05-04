import { createAction } from 'redux-actions';
import config from '../../config';
import { projectHttp, uploadFile } from '../../service/fetch';

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
        const confirm = window.confirm('Esta seguro que desea eliminar este proyecto?');
        if(confirm){
            projectHttp('DELETE', `remove/${id}`, null);
            dispatch(deleteProjectSuccess(id));
        }
    }
    catch(error){
        console.log(error);
    }
}

export const addNewProjectSuccess = createAction('CREATE_NEW_PROJECT');
export const addNewProject = (project) => async (dispatch) => {
    try{
        console.log(project);
        let response = null;
        if(project.image !== null){
            console.log(project.image);
            const img = project.image;
            project.image = null;
            response = await projectHttp('POST', `add`, project);
            response = await uploadFile(response._id, img);
        }
        else{
            response = await projectHttp('POST', `add`, project);
        }
        dispatch(addNewProjectSuccess(response));
    }
    catch(error){
        console.log(error);
    }
}

export const updateProjectSuccess = createAction('UPDATE_PROJECT');
export const updateProject = (project, changeImg) => async (dispatch) => {
    try{
        console.log(changeImg);
        if(changeImg === true){
            console.log("true");
            const img = project.image;
            project.image = null;
            await projectHttp('PUT', `update/${project._id}`, project);
            const response = await uploadFile(project._id, img);
            project.image = response.image;
        }else{
            console.log("false");
            await projectHttp('PUT', `update/${project._id}`, project);
        }
        dispatch(updateProjectSuccess(project));
    }
    catch(error){
        console.log(error);
    }
}