import React from 'react';
import { connect } from 'react-redux';
import ProjectCard from '../components/ProjectCard';

//styles
import './ProjectList.css';
import './loader.css';

//hooks
import useAnimation from "../hooks/useAnimation";

const ProjectList = ({ projects }) => {
    const [animation] = useAnimation("contenido");

    //validate project
    if (projects.length === 0) {
        return (
            <section className={animation} style={{ backgroundColor: "#212529" }}>
                <div className="loader">Loading...</div>
            </section>
        )
    }

    return (
        <section className={animation}>
            <div className='main-info'>
                <h1 className='title-list text-black'>
                    Trabajos
                    <br className="show-desktop" />
                    <span className="subtitle-list show-desktop">Culminados</span>
                </h1>
                <p className="paragraph-list text-ligth">
                    Esta es una <span className="ligth">selecion</span> de <br />
                    los mejores <span className="ligth">proyectos</span> en <br />
                    los que he trabajado<br />
                    anteriormente.
                </p>
            </div>
            <section className='list-card'>
                {
                    projects.map((project, index) => {
                        return (
                            <ProjectCard key={project._id} {...project} index={index} />
                        )
                    })
                }
            </section>
        </section>
    );

}

const mapStateToProps = state => ({
    projects: state.projects
});

export default connect(mapStateToProps)(ProjectList);