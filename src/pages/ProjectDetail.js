import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';

//styles
import "../assets/styles/ProjectDetail.css";

//Icons
import url from '../assets/urlicon.png'
import github from '../assets/GithubIconDark.png'

//components
import Loader from "../components/Loader";

const ProjectDetail = ({ match, projects, history }) => {
    const [project, setProject] = useState(null);

    //get project from redux
    const getProject = useCallback(() => {
        const id = match.params.id;
        const currentProject = projects.find(project => project._id === id);
        if (!currentProject) {
            history.replace("/project");
        } else {
            setProject(currentProject);
        }
    }, [match.params.id, projects, history])

    useEffect(() => {
        getProject();
    }, [getProject])

    if (!project) {
        return <Loader />
    }

    return (
        <section className="contenido animate__animated animate__fadeIn">
            <div className="izq izq-project">
                <img src={project.images} className="img-project" alt="ProjectImage" />
            </div>
            <div className="der-project">
                <div className='header'>
                    <h1 className='header-bold'>{project.name}</h1>
                    <p className='project-header-date'>Date(
                        <span> {project.date} </span>
                    );</p>
                </div>

                <div className='project-description'>
                    <p className="text-description text-ligth">{project.description}</p>
                    <div className="icons-project">
                        {project.git &&
                            <a href={project.git} className="item-icon">
                                <img src={github} alt="logo" className="d-inline-block align-center logo" width="32" />
                            </a>}
                        {project.url &&
                            <a href={project.url} className="item-icon">
                                <img src={url} alt="logo" className="d-inline-block align-center logo" width="40" />
                            </a>}
                    </div>
                </div>
            </div>
        </section>
    );
}


const mapStateToProps = (state) => ({
    projects: state.projects
});

export default connect(mapStateToProps)(ProjectDetail);