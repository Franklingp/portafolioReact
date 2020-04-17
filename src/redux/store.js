import { createStore, combineReducers, applyMiddleware } from 'redux';
import projectReducer from './reducers/projectReducer'; 
import thunk from 'redux-thunk';

//Here i combine all the reducers in only one
const reducers = combineReducers({
    projects: projectReducer
})

const store = createStore(reducers, {}, applyMiddleware(thunk));

export default store;