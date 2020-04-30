import React from 'react';
import { connect } from 'react-redux';
import ProjectCard from '../components/ProjectCard';
import './ProjectList.css';

class ProjectList extends React.Component {

    render(){
        return(
            <section className="contenido">
                <div className='main-info'>
                    <h1 className='title-list text-black'>
                        Trabajos
                        <br/>
                        <span className="subtitle-list">Culminados</span>
                    </h1>
                    <p className="paragraph-list text-ligth">
                        Esta es una <span className="ligth">selecion</span> de <br/>
                        los mejores <span className="ligth">proyectos</span> en <br/>
                        los que he trabajado<br/>
                        anteriormente.
                    </p>
                </div>
                <section className='list-card'>
                    {
                        this.props.projects.map((project, index) => {
                            return(
                               <ProjectCard key={project._id} {...project} index={index}/>
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