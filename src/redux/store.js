import { createStore, combineReducers, applyMiddleware } from 'redux';
import projectReducer from './reducers/projectReducer';
import contactReducer from './reducers/contactReducer';
import authReducer from './reducers/authReducer';
import thunk from 'redux-thunk';

//Here i combine all the reducers in only one
const reducers = combineReducers({
    projects: projectReducer,
    messages: contactReducer,
    auth: authReducer
})

const store = createStore(reducers, {}, applyMiddleware(thunk));

export default store;