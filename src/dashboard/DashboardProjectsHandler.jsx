import React, { useState, useEffect } from "react";
import { Grid, TextField, Button, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

//redux
import { connect } from "react-redux";
import { addNewProject, updateProject } from "../redux/actions/projectActions";

//styles
import "../assets/styles/DashboadProjectsHandler.css";

//Utilities
import {setID} from "../utils/idShuffle"
import { parseActionCodeURL } from "firebase/auth";

function DashboardProjectsHandler({
	projects,
	addNewProject,
	updateProject,
}) {
	const navigate = useNavigate();
	const params = useParams();
	const [isEdit, setIsEdit] = useState(false);
	const [form, setForm] = useState({
		name: "",
		category: "",
		description: "",
		images: "",
		url: "",
		git: "",
	});

	//check if is a new project or editing other already created
	const checkProject = () => {
		// if (match.params.id) {
		if (params.id) {
			setIsEdit(true);
			const project = projects.find(({ id }) => id === params.id);
			if (project) {
				setForm({ ...project });
			}
		} else {
			setIsEdit(false);
		}
	};

	//handle inptu change
	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	//handleSubmit
	const handleSubmit = (e) => {
		e.preventDefault();
		if (isEdit === true) {
			updateProject(form);
			navigate("/admin/projects");

		} else {
			const data = {
				...form, 
				id: setID(form.name),
				date: Date.now(),
				images: form.images == "" ? "https://i.imgur.com/lwWS7iY.jpeg" : form.images
			}
			addNewProject(data);
			navigate("/admin/projects");
		}
	};

	useEffect(() => {
		checkProject();
	}, []);

	return (
		<React.Fragment>
			<Typography align="center" variant="h2" margin={6}>
				Handle Project
			</Typography>
			<form onSubmit={handleSubmit} className="Handle-Projectf-form">
				<Grid
					container
					alignContent="center"
					justifyContent="center"
					spacing={3}
				>
					<Grid item xs={12} md={6}>
						<TextField
							label="Name"
							fullWidth={true}
							required
							value={form.name}
							onChange={handleChange}
							name="name"
							size="normal"
							variant="outlined"
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField
							label="Category"
							fullWidth={true}
							required
							value={form.category}
							onChange={handleChange}
							name="category"
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							label="Description"
							fullWidth={true}
							required
							value={form.description}
							onChange={handleChange}
							name="description"
						/>
					</Grid>
					<Grid item xs={12} md={4}>
						<TextField
							label="Image"
							fullWidth={true}
							value={form.images}
							onChange={handleChange}
							name="images"
						/>
					</Grid>
					<Grid item xs={12} md={4}>
						<TextField
							label="Repository"
							fullWidth={true}
							value={form.git}
							onChange={handleChange}
							name="git"
						/>
					</Grid>
					<Grid item xs={12} md={4}>
						<TextField
							label="Url"
							fullWidth={true}
							value={form.url}
							onChange={handleChange}
							name="url"
						/>
					</Grid>
					<Grid item xs={12} container alignContent="end">
						<Button type="submit" variant="outlined">
							Submit
						</Button>
					</Grid>
				</Grid>
			</form>
		</React.Fragment>
	);
}

const mapStateToProps = (state) => ({
	projects: state.projects,
});

const mapDispatchToProps = {
	addNewProject,
	updateProject,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DashboardProjectsHandler);
