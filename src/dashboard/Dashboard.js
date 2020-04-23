import React from "react";
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {
    render(){
        return(
            <section style={{paddingTop: '48px', textAlign: 'center'}}>
                <h1>Dashboard</h1>
                <br/>
                <div>
                    <Link to="/dashboard/handler" className="btn btn-primary" style={{margin: '5px'}}>
                        Create new project
                    </Link>
                    <Link to="/dashboard/projects" className="btn btn-primary">
                        Project List
                    </Link>
                </div>
            </section>
        )
    }
}

export default Dashboard;