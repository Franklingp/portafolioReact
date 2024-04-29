import { createAction } from 'redux-actions';
import { authHttp } from '../../service/fetch';

//Actions to manage the authentication
export const logOutSuccess = createAction('LOGOUT');
export const logOut = () => async (dispatch) => {
    const response = await authHttp("LOG-OUT", null);
    console.log(response);
    dispatch(logOutSuccess(response.accessToken));
}

export const logingUserSuccess = createAction("LOGING_USER");
export const logingUser = data => async (dispatch) => {
    const response = await authHttp("SIGN-IN", data);
    if (!response.accessToken) {
        return false;
    } else {
        dispatch(logingUserSuccess(response.accessToken));
        return true;
    }
}
