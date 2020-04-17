import React from 'react';
import { connect } from 'react-redux';
import ProjectCard from '../components/ProjectCard';

class ProjectList extends React.Component {

    render(){
        return(
            <section>
                <h1>Trabajos</h1>
                <h2>Culminados</h2>
                <p>
                    Esta es una selecion de los mejores proyectos en
                    los que he trabajado anteriormente.
                </p>
                <section>
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