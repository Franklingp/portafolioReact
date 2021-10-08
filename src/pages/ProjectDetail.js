import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
// import { projectHttp } from '../service/fetch';
import "./ProjectDetail.css";
import url from '../assets/urlicon.png'
import github from '../assets/GithubIconDark.png'

//hooks
import useAnimation from "../hooks/useAnimation";


const ProjectDetail = ({ match, projects, history }) => {
    const [animation] = useAnimation("contenido");
    const [project, setProject] = useState(null);

    //get project from redux
    const getProject = useCallback(() => {
        const id = match.params.id;
        const currentProject = projects.find(project => project._id === id);
        if (!currentProject) {
            history.replace("/404");
        } else {
            setProject(currentProject);
        }
    }, [match.params.id, projects, history])

    useEffect(() => {
        getProject();
    }, [getProject])

    if (!project) {
        return <h1>Not found</h1>
    }

    return (
        project &&
        <section className={animation}>
            <div className="izq izq-project">
                <img src={project.images} className="img-project" alt="ProjectImage" />
            </div>
            <div className="der-project">
                <div className='header'>
                    <h1 className='header-bold'>{project.name}</h1>
                    <p className='header-ligth'>Date(
                        <span style={{ color: '#A68E52' }}> {project.date} </span>
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