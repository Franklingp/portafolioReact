import { createAction } from 'redux-actions';
import { authHttp } from '../../service/fetch';

//Actions to manage the authentication
export const logingUserSuccess =  createAction("LOGING_USER");
export const logingUser = data => async (dispatch) => {
    try{
        const response = await authHttp("POST", 'singIn', data);
        if(response.status === 403 || response.status === 404){
            alert("Correo o contraseNa incorrectos");
        }else{
            dispatch(logingUserSuccess(response.json.token));
        }
    }
    catch(error){
        console.log(error);
        throw new Error("Has been a error when trying to login");
    }
}

export const logOut = createAction('LOGOUT');