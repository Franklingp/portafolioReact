import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteProject } from '../redux/actions/projectActions';

const DashboardProjects = (props) => {

    return (
        <section className="container text-sm-center" 
        style={{paddingTop: '48px'}}>
            <h1>Dashboard Projects</h1>
            <br/>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Category</th>
                        <th scope="col">Descrition</th>
                        <th scope="col">Url</th>
                        <th scope="col">Git</th>
                        <th scope="col">Date</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.projects.map(project => (
                            <tr key={project._id}>
                                <th scope="col"><Link to={`/project/${project._id}`}>{project.name}</Link></th>
                                <th scope="col">{project.category}</th>
                                <th scope="col">{project.description}</th>
                                <th scope="col">{project.url}</th>
                                <th scope="col">{project.git}</th>
                                <th scope="col">{project.image}</th>
                                <th scope="col">
                                    <button type='button' 
                                    className="btn btn-danger"
                                    onClick={() => props.deleteProject(project._id)}>
                                        Elminar
                                    </button>
                                    <button type='button' 
                                    className="btn btn-warning">
                                        Editar
                                    </button>
                                </th>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </section>
    );
}

const mapStateToProps = (state) => ({
    projects: state.projects
});

const mapDispatchToProps = ({
    deleteProject
})

export default connect(mapStateToProps, mapDispatchToProps)(DashboardProjects);