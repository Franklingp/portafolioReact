import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//animate library
import 'animate.css';

//Helmet meta headers
import HelmetProvider from "./components/HelmetProvider";

//Redux
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(

  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </Provider>
  </React.StrictMode>,

  document.getElementById('root')
);