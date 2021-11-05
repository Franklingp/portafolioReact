import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//This is bootstrap
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import 'bootstrap';

//animate library
import 'animate.css';

//Redux
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(

  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,

  document.getElementById('root')
);