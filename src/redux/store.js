import { createStore } from 'redux';

//Imports of actions
import projectActions from './actions/projectActions';

//Imports of reducers
import projectReducers from './reducers/projectReducers';

const store = createStore(projectReducers, null);

export default store;