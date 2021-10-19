import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

//components
import ProjectCard from '../components/ProjectCard';
import Loader from "../components/Loader";


//styles
import '../assets/styles/ProjectList.css';

const ProjectList = ({ projects }) => {

    //handle card styles
    const handleCard = (index) => {
        let aux = index
        if (index > 3) {
            aux = index % 4;
        }
        switch (aux) {
            case 0: return "card-yellow left-card";
            case 1: return "card-shadow rigth-card";
            case 2: return "card-ligth left-card";
            default: return "card-dark rigth-card"
        }
    }

    //validate project
    if (projects.length < 1) {
        return <Loader />
    } else {
        return (
            <section className={"contenido animate__animated animate__fadeIn"}>
                <div className='main-info'>
                    <h1 className='title-list font-black'>
                        Portafolio
                        <br className="show-desktop" />
                        <span className={`subtitle-list show-desktop`}>Experiencias</span>
                    </h1>
                    <p className="paragraph-list text-ligth">
                        Esta es una <span>selecion</span> de <br />
                        algunos de los <span>proyectos</span> en <br />
                        los que he trabajado<br />
                        anteriormente.
                    </p>
                </div>
                <section className='list-card'>
                    {
                        projects.map((project, index) => {
                            const classess = handleCard(index);
                            return (
                                <Link key={`${project._id}-${index}`} to={`/project/${project._id}`} className="projects-link">
                                    <ProjectCard {...project} classess={classess} />
                                </Link>
                            )
                        })
                    }
                </section>
            </section>
        );
    }

}

const mapStateToProps = state => ({
    projects: state.projects
});

export default connect(mapStateToProps)(ProjectList);