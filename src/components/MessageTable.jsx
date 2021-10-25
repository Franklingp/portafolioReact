import React from "react";
import MUIDataTable from "mui-datatables";

//redux
import { connect } from "react-redux";
import { changeRead, deleteMessage } from "../redux/actions/contactActions";

// date: "2021-10-19T18:47:04.676Z"
// email: "fadsaf@djafkldsjf"
// message: "test\n"
// name: "dsd"
// read: false

function MessageTable({ changeRead, deleteMessage, messages }) {
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
			},
		},
		// {
		// 	name: "_id",
		// 	label: "Action",
		// 	options: {
		// 		filter: true,
		// 		sort: false,
		// 		customBodyRender: () => <div>test</div>,
		// 	},
		// },
	];

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
	changeRead,
	deleteMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageTable);
