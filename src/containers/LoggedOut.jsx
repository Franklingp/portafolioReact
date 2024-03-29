import React from "react";
import { Switch, Route } from "react-router-dom";

//Components
import Home from "../pages/Home";
import ProjectsList from "../pages/ProjectsList";
import ProjectDetail from "../pages/ProjectDetail";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import AuthLogin from "../dashboard/Authentication/AuthLogin";

function Logged_in() {
	return (
		<Switch>
			<Route path="/project/:id" component={ProjectDetail} />
			<Route path="/projects" component={ProjectsList} />
			<Route path="/contact" component={Contact} />
			<Route path="/login" component={AuthLogin} />
			<Route exact path="/" component={Home} />
			<Route component={NotFound} />
		</Switch>
	);
}

export default Logged_in;
