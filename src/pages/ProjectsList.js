import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ProjectCard from '../components/ProjectCard';

//styles
import './ProjectList.css';
import './loader.css';

//hooks
import useAnimation from "../hooks/useAnimation";

const ProjectList = ({ projects }) => {
    const [animation] = useAnimation("contenido");
    // const [currentFrase, setCurrentFrase] = useState({
    //     frase: "Proyectos",
    //     count: 0,
    // });
    // const [bool, setBool] = useState(true);
    // const frases = [
    //     "Experiencias",
    //     "Talento",
    //     "Aprendizaje",
    //     "Conocimiento",
    //     "Proyectos"
    // ];

    // //handle frases
    // const handleFrase = () => {
    //     setBool(false)
    //     if (currentFrase.count + 1 < frases.length) {
    //         setCurrentFrase({
    //             frase: frases[currentFrase.count + 1],
    //             count: currentFrase.count + 1
    //         })
    //     } else {
    //         setCurrentFrase({
    //             frase: frases[0],
    //             count: 0
    //         })
    //     }
    //     setBool(true);

    //     // setTimeout(() => {
    //     //     if (currentFrase.count + 1 < frases.length) {
    //     //         setCurrentFrase({
    //     //             frase: frases[currentFrase.count + 1],
    //     //             count: currentFrase.count + 1
    //     //         })
    //     //     } else {
    //     //         setCurrentFrase({
    //     //             frase: frases[0],
    //     //             count: 0
    //     //         })
    //     //     }

    //     // }, 1000)
    // }

    // useEffect(() => {
    //     setTimeout(() => {
    //         handleFrase();
    //     }, 1500)
    // }, [handleFrase])

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
                    Portafolio
                    <br className="show-desktop" />
                    <span className={`subtitle-list show-desktop animate__animated animate__flipInX`}>Experiencias</span>
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