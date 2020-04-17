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
import Dashboard from './pages/Dashboard'


class App extends React.Component {

  componentDidMount(){
    this.props.getAll();
  }

  render(){
    return (
      <Router>
        <Header />
          <Switch>
            <Route path="/project/:id" component={ProjectDetail}/>
            <Route path="/project" component={ProjectsList}/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/contact" component={Contact}/>
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
