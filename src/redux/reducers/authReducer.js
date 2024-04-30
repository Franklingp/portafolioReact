import { handleActions } from 'redux-actions';

const authReducer = handleActions({
    LOGING_USER: (state, { payload }) => {
        const newState = { isAuth: true, token: payload };
        return newState;
    },
    LOGOUT: (state, action) => {
        alert("Logout success");
        return { isAuth: false, token: '' }
    }
}, {
    isAuth: false,
    token: ''
});

export default authReducer;