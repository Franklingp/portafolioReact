import React, {useState} from 'react';
import { connect } from 'react-redux';
import { projectHttp } from '../service/fetch';
import "./ProjectDetail.css";
import url from '../assets/urlicon.png'
import github from '../assets/GithubIconDark.png'

const ProjectDetail = (props) => {
    const id = props.match.params.id;
    let project = props.projects.find(project => project._id === id);
    const [animation, setAnimation] = useState("contenido animation-none");

    const handleAnimation = () => {
        window.scrollTo(0, 0);
        setTimeout( () => {
            setAnimation("contenido animation-show");
        },1);
    }
    handleAnimation()
 
    const getOneProjec = async (id) => {
        projectHttp("GET", 'get/'+id, null);
    }

    if(project === undefined){
        project = getOneProjec(id);
    }

    return(
        project &&
        <section className={animation}>
            <div className="izq izq-project">
                <img src={project.images} className="img-project" alt="ProjectImage"/>
            </div>
            <div className="der-project">
                <div className='header'>
                    <h1 className='header-bold'>{project.name}</h1>
                    <p className='header-ligth'>Date(
                        <span style={{color: '#A68E52'}}> {project.date} </span>
                    );</p>
                </div>
                
                <div className='project-description'>
                    <p className="text-description text-ligth">{project.description}</p>
                    <div className="icons-project">
                        {project.git &&
                        <a href={project.git} className="item-icon">
                            <img src={github} alt="logo" className="d-inline-block align-center logo" width="32"/>
                        </a>}
                       {project.url &&
                       <a href={project.url} className="item-icon">
                            <img src={url} alt="logo" className="d-inline-block align-center logo" width="40"/>
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