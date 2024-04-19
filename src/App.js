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


//Firebase config
//Firebsase Analitics
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

//test databse
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'

const App = ({ getAll, isAuth }) => {

  useEffect(() => {

    //test
    getData();

    getAll();
  }, [getAll, getData])

  //test firebase data base:
  const getData = async () => {
    console.log('Iniciando texto');
    const firebaseApp = firebaseConfig;

    const db = getFirestore(firebaseApp);

    async function api(db) {
      const projectCollection = collection(db, 'projects');
      const projectsSnapshot = await getDocs(projectCollection);
      console.log("projectsSnapshot:");
      console.log(projectsSnapshot);
      const projectList = projectsSnapshot.docs.map(doc => doc.data());
      console.log("projectList:");
      console.log(projectList);
      return projectList;
    }

    api(db);

  }

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
