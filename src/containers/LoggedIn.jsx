import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
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
			<Routes>
				<Route path="admin/sign-up" element={<AuthSignup/>} />
				<Route path="admin/projects" element={<DashboardProjects/>} />
				<Route path="admin/project/:id?" element={<DashboardProjectsHandler/>}/>
				<Route path="*" element={<Dashboard/>} />
			</Routes>
		</div>
	);
}

const mapDispatchToProps = {
	getAllMessage,
};

export default connect(null, mapDispatchToProps)(Logged_in);
