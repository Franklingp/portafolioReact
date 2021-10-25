import React, { useEffect } from 'react'
import { Switch, Route } from "react-router-dom";

//Redux
import { connect } from "react-redux";
import { getAllMessage } from '../redux/actions/contactActions';

//Components
import Dashboard from '../dashboard/Dashboard';
import DashboardProjects from '../dashboard/DashboardProjects';
import DashboardProjectHandler from '../dashboard/DashboardProjectHandler';
import AuthSignup from '../dashboard/Authentication/AuthSignup';

function Logged_in({ getAllMessage }) {

    //Get all the comments from the server
    const getComments = async () => {
        getAllMessage();
    }

    useEffect(() => {
        getComments()
    }, [])

    return (
        <Switch>
            <Route path="/sign-up" component={AuthSignup} />
            <Route path="/projects" component={DashboardProjects} />
            <Route path="/project/:id?" component={DashboardProjectHandler} />
            <Route component={Dashboard} />
        </Switch>
    )
}

const mapDispatchToProps = {
    getAllMessage
}

export default connect(null, mapDispatchToProps)(Logged_in)