import React from 'react';
import { connect } from 'react-redux';
import { projectHttp } from '../service/fetch';
import "./ProjectDetail.css";

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
        <section className="contenido">
            <div className="izq"></div>
            <div className="der-project">
                <div className='header'>
                    <h1 className='header-bold'>{project.name}</h1>
                    <p className='header-ligth'>Date(
                        <span style={{color: '#A68E52'}}> {project.date} </span>
                    );</p>
                </div>
                
                <div className='project-description'>
                    <p className="text-description text-ligth">{project.description}</p>
                    <span>{project.git}</span>
                    <br/>
                    <span>{project.url}</span>
                </div>
            </div>
        </section>
    );
}


const mapStateToProps = (state) => ({
    projects: state.projects 
});

export default connect(mapStateToProps)(ProjectDetail);