import React from "react";
import { Routes, Route } from "react-router-dom";

//Components
import Home from "../pages/Home";
import ProjectsList from "../pages/ProjectsList";
import ProjectDetail from "../pages/ProjectDetail";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import AuthLogin from "../dashboard/Authentication/AuthLogin";

function Logged_in() {
	return (
		<Routes>
			<Route path="/project/:id" element={<ProjectDetail/>} />
			<Route path="/projects" element={<ProjectsList/>} />
			<Route path="/contact" element={<Contact/>} />
			<Route path="/login" element={<AuthLogin/>} />
			<Route exact path="/" element={<Home/>} />
			<Route element={<NotFound/>} />
		</Routes>
	);
}

export default Logged_in;
