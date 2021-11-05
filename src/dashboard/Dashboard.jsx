import React from "react";
import { Typography } from "@mui/material";

//styles
import "../assets/styles/Dashboard.css";

//components
import MessageTable from "../components/MessageTable";

const Dashboard = () => {
	return (
		<section className="container">
			<Typography align="center" variant="h2">
				Dashboard
			</Typography>
			<MessageTable />
		</section>
	);
};

export default Dashboard;
