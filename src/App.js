import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAll } from './redux/actions/projectActions';

//components
import Header from './components/structural/Header';
import Footer from './components/structural/Footer';

//pages
import Home from './pages/Home';
import ProjectsList from './pages/ProjectsList';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

//dashboard
import Dashboard from './dashboard/Dashboard';
import Authentication from './dashboard/Authentication';
import DashboardProjects from './dashboard/DashboardProjects';
import DashboardProjectHandler from './dashboard/DashboardProjectHandler';

class App extends React.Component {

  componentDidMount(){
    this.props.getAll();
  }

  render(){
    return (
      <Router>
        <Header />
          <Switch>
            {/* Pubilc */}
            <Route path="/project/:id" component={ProjectDetail}/>
            <Route path="/project" component={ProjectsList}/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/contact" component={Contact}/>

            {/* dahboard */}
            <Route path="/dashboard/auth" component={Authentication}/>
            <Route path="/dashboard/projects" component={DashboardProjects}/>
            <Route path="/dashboard/handler" component={DashboardProjectHandler}/>
            <Route path="/dashboard" component={Dashboard}/>  
            <Route component={NotFound}/>
          </Switch>
        <Footer />
      </Router>
    );
  }
}

const mapDispatchToProps = {
  getAll
}

export default connect(null, mapDispatchToProps)(App);
