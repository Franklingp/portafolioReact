import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/About.css';

//Icons
import colorArrow from '../assets/ArrowcolorArrow.png';
import menuDark from '../assets/VectorMenuDark.png';

export const About = () => {
    const skills = [
        "JavaScript",
        "React JS",
        "React Hooks",
        "Redux",
        "API rest"
    ]

    return (
        <section className="contenido about animate__animated animate__fadeIn">
            <section className="about-izq">
                <div className="left-block">
                    <h2 className="title-list font-black title-about">Top Skills </h2>
                    {
                        skills.map(skill => (
                            <div key={skill} className="skill-item">
                                <div className="circle"></div>
                                <span className="skill text-extra-ligth">{skill}</span>
                            </div>
                        ))
                    }
                </div>
                <div className="rigth-block">
                    <div>
                        <hr className="vector-about" />
                        <div className="readMore-section">
                            <Link className="link-readMore text-bold" to="/project">Proyectos</Link>
                            <img className="arrow-project" src={colorArrow} alt="arrow" />
                        </div>
                        <hr className="vector-about" />
                    </div>
                    <hr className="vector-about-division" />
                </div>
            </section>
            <section className="about-der text-regular">
                <h3 className="about-me">Sobre mi</h3>
                <p className="paragraph text-ligth">
                    Hola red, yo soy <span>Franklin Pimentel Desarrollador web Front-end</span> enfocado en tecnologias al rededor de JavaScript.
                    Me defino por ser pro-activo, autodidacta, comprometido y por la pasion de resolver problemas programando dando las mejores soluciones
                    posibles.
                    Mis estudios empezaron en la carrera de <span>ciencias de computacion</span> de la universidad central de Venezuela, y aunque no pude concluir
                    la carrera segui mi camino de forma <span>autodidacta</span> y posteriormente en <span>Platzi</span>, una increible comunidad de apasionados por la tecnologia
                    y con un increible franse que los define y que he lleado a adopar.
                    <span>Nunca pares de aprender</span>.
                </p>
                <Link className="link-readMore text-bold show-mobile" to="/project">
                    Proyectos <img src={menuDark} alt="menu" height="8" />
                </Link>
            </section>
        </section>
    )
}

export default About;
