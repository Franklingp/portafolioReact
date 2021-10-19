import React from 'react';
import { connect } from 'react-redux';
import ProjectCard from '../components/ProjectCard';

//styles
import '../assets/styles/ProjectList.css';
import '../assets/styles/loader.css';

const ProjectList = ({ projects }) => {



    //validate project
    if (projects.length < 1) {
        return (
            <section className={"contenido"} style={{ backgroundColor: "#212529" }}>
                <div className="loader">Loading...</div>
            </section>
        )
    } else {
        return (
            <section className={"contenido"}>
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
                        projects.map((project, index) => (
                            <ProjectCard key={`${project._id}-${index}`} {...project} index={index} />
                        ))
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