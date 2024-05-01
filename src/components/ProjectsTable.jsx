import React from "react";
import MUIDataTable from "mui-datatables";

//material ui and icons
import DeleteIcon from "@mui/icons-material/Delete";
import CloudIcon from "@mui/icons-material/Cloud";
import GitHubIcon from "@mui/icons-material/GitHub";
import EditIcon from "@mui/icons-material/Edit";
import {
	IconButton,
	Paper,
	ToggleButton,
	ToggleButtonGroup,
} from "@mui/material";

//utils
import { formatDate } from "../utils/handleDate";

function ProjectsTable({ data, handleDelete, handleEdit }) {
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
				customBodyRender: formatDate,
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
			name: "id",
			label: "Actions",
			options: {
				filter: false,
				sort: false,
				customBodyRender: (id) => (
					<React.Fragment>
						<IconButton
							color="primary"
							aria-label="Delete project"
							component="span"
							onClick={() => handleEdit(id)}
						>
							<EditIcon color="primary" />
						</IconButton>
						<IconButton
							color="primary"
							aria-label="Delete project"
							component="span"
							onClick={() => handleDelete(id)}
						>
							<DeleteIcon color="secondary" />
						</IconButton>
					</React.Fragment>
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
