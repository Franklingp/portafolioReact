import React, { useState } from "react";
import { Grid, TextField, Button, Typography } from "@mui/material";

function DashboardProjectsHandler() {
	const [form, setForm] = useState({
		name: "",
		category: "",
		desciption: "",
		image: "",
		url: "",
		git: "",
	});

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
		console.log(form);
	};

	return (
		<React.Fragment>
			<Typography align="center" variant="h2" margin={6}>
				Handle Project
			</Typography>
			<form onSubmit={handleSubmit}>
				<Grid
					container
					alignContent="center"
					justifyContent="center"
					spacing={3}
				>
					<Grid item xs={12} md={6}>
						<TextField
							label="test"
							variant="outlined"
							fullWidth={true}
							required
							value={form.name}
							onChange={handleChange}
							name="name"
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
							value={form.image}
							onChange={handleChange}
							name="image"
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

export default DashboardProjectsHandler;
