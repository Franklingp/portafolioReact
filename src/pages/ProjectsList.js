import React from 'react';
import { connect } from 'react-redux';
import ProjectCard from '../components/ProjectCard';
import './ProjectList.css';

class ProjectList extends React.Component {

    render(){
        return(
            <section className="content">
                <div className='main-info'>
                    <h1 className='title-list'>
                        Trabajos
                        <br/>
                        <span className="subtitle-list">Culminados</span>
                    </h1>
                    <p className="paragraph-list">
                        Esta es una selecion de los mejores proyectos en
                        los que he trabajado anteriormente.
                    </p>
                </div>
                <section className='list-card'>
                    {
                        this.props.projects.map(project => {
                            return(
                               <ProjectCard key={project._id} {...project} />
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