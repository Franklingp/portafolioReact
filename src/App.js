import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAll } from './redux/actions/projectActions';
import PropTypes from "prop-types";

//components
import Header from './components/Header';

//Containers
import LoggedIn from "./containers/LoggedIn";
import LoggedOut from "./containers/LoggedOut";

const App = ({ getAll, isAuth }) => {

  useEffect(() => {
    getAll()
  }, [getAll])

  return (
    <Router>
      <Header />
      {
        isAuth === true ?
          <LoggedIn />
          :
          <LoggedOut />
      }
    </Router>
  );
}

//PropTypes
App.propTypes = {
  getAll: PropTypes.func.isRequired,
  isAuth: PropTypes.bool.isRequired
}

//Redux
const mapStateToProps = state => ({
  isAuth: state.auth.isAuth
})

const mapDispatchToProps = {
  getAll
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
