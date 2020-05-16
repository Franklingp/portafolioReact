import React from "react";
import { Link } from 'react-router-dom';
import DashboardComments from './DashboardComments';

class Dashboard extends React.Component {
    render(){
        return(
            <section className='container' style={{paddingTop: '48px', textAlign: 'center'}}>
                <h1>Dashboard</h1>
                <br/>
                <div>
                    <Link to="/dashboard/handler" className="btn btn-primary">
                        Create new project
                    </Link>
                    <Link to="/dashboard/projects" className="btn btn-primary" style={{margin: '5px'}}>
                        Projects
                    </Link>
                    <Link to="/dashboard/signUp" className="btn btn-primary">
                        Register
                    </Link>
                </div>
                <br/>
                <hr/>
                <br/>
                <DashboardComments/>
            </section>
        )
    }
}

export default Dashboard;