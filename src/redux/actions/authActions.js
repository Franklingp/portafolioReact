import { createAction } from 'redux-actions';
import { authHttp } from '../../service/fetch';

//Actions to manage the authentication
export const logingUserSuccess = createAction("LOGING_USER");
export const logingUser = data => async (dispatch) => {
    try {
        const response = await authHttp("SIGN-IN", data);
        console.log(response);
        if (!response.accessToken) {
            return false;
        } else {
            dispatch(logingUserSuccess(response.accessToken));
            return true;
        }
    }
    catch (error) {
        console.log(error.response);
        if (error.response.status === 403 || error.response.status === 404) {
            return false;
        } else {
            throw new Error("Has been a error when trying to login");
        }
    }
}

export const logOut = createAction('LOGOUT');