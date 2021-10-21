import React from 'react'
import { Switch, Route } from "react-router-dom";

//Components
import Dashboard from '../dashboard/Dashboard';
import DashboardProjects from '../dashboard/DashboardProjects';
import DashboardProjectHandler from '../dashboard/DashboardProjectHandler';
import AuthSignup from '../dashboard/Authentication/AuthSignup';

export default function Logged_in() {
    return (
        <Switch>
            <Route path="/sign-up" component={AuthSignup} />
            <Route path="/projects" component={DashboardProjects} />
            <Route path="/project/:id?" component={DashboardProjectHandler} />
            <Route component={Dashboard} />
        </Switch>
    )
}
