import React from "react";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

//Redux
import { connect } from "react-redux";
import { deleteProject } from "../redux/actions/projectActions";

//components
import ProjectsTable from "../components/ProjectsTable";

//styles
import "../assets/styles/DashboardProjects.css";

function DashboardProjects({ projects, deleteProject }) {
	const navigate = useNavigate();
	
	//handle delete projects from server
	const handleDelete = (id) => {
		const confirm = window.confirm(
			"Esta seguro de que desea borrar este proyecto?"
		);
		if (confirm === true) {
			deleteProject(id);
		}
	};

	//handle edit Projects
	const handleEdit = (id) => {
		navigate(`/admin/project/${id}`);
	};

	return (
		<div className="Dashboard-Projects">
			<Typography align="center" variant="h2" margin={4}>
				Projects
			</Typography>
			<ProjectsTable
				data={projects}
				handleEdit={handleEdit}
				handleDelete={handleDelete}
			/>
		</div>
	);
}

const mapStateToProps = (state) => ({
	projects: state.projects,
});

const mapDispatchToProps = {
	deleteProject,
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardProjects);
