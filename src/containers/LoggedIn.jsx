import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "../assets/styles/LoggedIn.css";

//Redux
import { connect } from "react-redux";
import { getAllMessage } from "../redux/actions/contactActions";

//Components
import Dashboard from "../dashboard/Dashboard";
import DashboardProjects from "../dashboard/DashboardProjects";
import DashboardProjectsHandler from "../dashboard/DashboardProjectsHandler";
import AuthSignup from "../dashboard/Authentication/AuthSignup";

function Logged_in({ getAllMessage }) {
	//Get all the comments from the server
	const getComments = async () => {
		getAllMessage();
	};

	useEffect(() => {
		getComments();
	}, []);

	return (
		<div className="LoggedIn-container">
			<Switch>
				<Route path="/admin/sign-up" component={AuthSignup} />
				<Route path="/admin/projects" component={DashboardProjects} />
				<Route
					path="/admin/project/:id?"
					component={DashboardProjectsHandler}
				/>
				<Route component={Dashboard} />
			</Switch>
		</div>
	);
}

const mapDispatchToProps = {
	getAllMessage,
};

export default connect(null, mapDispatchToProps)(Logged_in);
