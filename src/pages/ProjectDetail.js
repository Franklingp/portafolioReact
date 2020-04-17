import React from 'react';
import { connect } from 'react-redux';
import { projectHttp } from '../service/fetch';

const ProjectDetail = (props) => {
    const id = props.match.params.id;
    let project = props.projects.find(project => project._id === id);

    const getOneProjec = async (id) => {
        projectHttp("GET", 'get/'+id, null);
    }

    if(project === undefined){
        project = getOneProjec(id);
    }

    return(
        project &&
        <section>
            <h1>{project.name}</h1>
            <span>{project.date}</span>
            <p>{project.description}</p>
            <span>{project.git}</span>
            <span>{project.url}</span>
        </section>
    );
}

const mapStateToProps = (state) => ({
    projects: state.projects 
});

export default connect(mapStateToProps)(ProjectDetail);