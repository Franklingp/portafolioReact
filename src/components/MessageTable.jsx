import React from "react";
import MUIDataTable from "mui-datatables";

//meterial ui icons and components
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

//redux
import { connect } from "react-redux";
import { deleteMessage } from "../redux/actions/contactActions";

//utils
import { formatDate } from "../utils/handleDate";

function MessageTable({ deleteMessage, messages }) {
	//handle delete comment
	const handleDeleteCommet = (id) => {
		const check = window.confirm(
			`Seguro que desea eliminar este mensaje permanentemente?`
		);
		if (check === true) {
			deleteMessage(id);
		}
	};

	//Table columns
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
			name: "email",
			label: "Email",
			options: {
				filter: true,
				sort: false,
			},
		},
		{
			name: "message",
			label: "Message",
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
			name: "_id",
			label: "Actions",
			options: {
				filter: false,
				sort: false,
				customBodyRender: (id) => (
					<IconButton
						color="primary"
						aria-label="upload picture"
						component="span"
						onClick={() => handleDeleteCommet(id)}
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
			title={"Comentarios"}
			data={messages}
			columns={columns}
			options={options}
		/>
	);
}

const mapStateToProps = (state) => ({
	messages: state.messages,
});

const mapDispatchToProps = {
	deleteMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageTable);
