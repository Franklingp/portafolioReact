import React from "react";

//styles
import "../assets/styles/Dashboard.css"

//components
import MessageTable from "../components/MessageTable";
import DashboardComments from './DashboardComments';

const Dashboard = () => {

    return (
        <section className='container dashboard-content'>
            <h1>Dashboard</h1>
            <hr />
            <MessageTable />
        </section>
    )
}

export default Dashboard;