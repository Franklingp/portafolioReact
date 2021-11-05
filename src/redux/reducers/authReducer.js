import { handleActions } from 'redux-actions';

const authReducer = handleActions({
    LOGING_USER: (state, { payload }) => {
        alert("Logging success");
        const newState = { isAuth: true, token: payload };
        return newState;
    },
    LOGOUT: (state, action) => {
        alert("Logout success");
        return { isAuth: false, token: '' }
    }
}, {
    isAuth: true, //TODO ojo aqui va false
    token: ''
});

export default authReducer;