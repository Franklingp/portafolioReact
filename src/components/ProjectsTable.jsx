import React from "react";
import MUIDataTable from "mui-datatables";

//material ui and icons
import DeleteIcon from "@mui/icons-material/Delete";
import CloudIcon from "@mui/icons-material/Cloud";
import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton } from "@mui/material";

/* <th scope="col">Name</th>
<th scope="col">Category</th>
<th scope="col">Descrition</th>
<th scope="col">Url</th>
<th scope="col">Git</th>
<th scope="col">Date</th> */

function ProjectsTable({ data, handleDelete }) {
	//Datatable columns
	const columns = [
		{
			name: "name",
			label: "Name",
			options: {
				filter: true,
				sort: true,
			},
		},
		{
			name: "category",
			label: "Category",
			options: {
				filter: true,
				sort: false,
			},
		},
		{
			name: "description",
			label: "Description",
			options: {
				filter: true,
				sort: false,
			},
		},
		{
			name: "date",
			label: "Date",
			options: {
				filter: true,
				sort: false,
			},
		},
		{
			name: "url",
			label: "Url",
			options: {
				filter: true,
				sort: false,
				customBodyRender: (url) => (
					<a href={url}>
						<IconButton aria-label="Website" component="span">
							<CloudIcon />
						</IconButton>
					</a>
				),
			},
		},
		{
			name: "git",
			label: "Repository",
			options: {
				filter: true,
				sort: false,
				customBodyRender: (repository) => (
					<a href={repository}>
						<IconButton aria-label="Repository" component="span">
							<GitHubIcon />
						</IconButton>
					</a>
				),
			},
		},
		{
			name: "_id",
			label: "Actions",
			options: {
				filter: false,
				sort: false,
				customBodyRender: (id) => (
					<IconButton
						color="primary"
						aria-label="Delete project"
						component="span"
						onClick={() => handleDelete(id)}
					>
						<DeleteIcon color="secondary" />
					</IconButton>
				),
			},
		},
	];

	//Table options
	const options = {
		filterType: "checkbox",
		print: false,
		filter: false,
		download: false,
		confirmFilters: false,
		viewColumns: false,
		onChangePage: (currentPage) => {
			console.log(currentPage);
		},
	};

	return (
		<MUIDataTable
			title="Projects"
			columns={columns}
			options={options}
			data={data}
		/>
	);
}

export default ProjectsTable;
