import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './About.css';
import colorArrow from '../assets/ArrowcolorArrow.png';
import menuDark from '../assets/VectorMenuDark.png';

export const About = () => {
    const [animation, setAnimation] = useState("contenido about animation-none");
    const skills = [
        "JavaScript",
        "React JS",
        "React Hooks",
        "Redux",
        "API rest"
    ]

    const handleAnimation = () => {
        setTimeout(() => {
            setAnimation("contenido about animation-show");
        }, 1);
    }
    handleAnimation();
    return (
        <section className={animation}>
            <section className="about-izq">
                <div className="left-block">
                    <h2 className="title-list text-black title-about">Top Skills </h2>
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
                        <Link className="link-readMore text-bold" to="/project">Proyectos</Link>
                        <img className="arrow-project" src={colorArrow} alt="arrow" />
                        <hr className="vector-about" />
                    </div>
                    <hr className="vector-about-division" />
                </div>
            </section>
            <section className="about-der text-regular">
                <h3 className="about-me">Sobre mi</h3>
                <p className="paragraph text-ligth">
                    Hola red, yo soy Franklin Pimentel y soy Desarrollador web FullStack.
                <br />
                Como FullStack Junior cuento conocimientos en Frond-end con React JS y Angular,
                junto a un buen manejo JavaScript como lenguaje de programación principal. Tambien manejo Backend con NodeJS
                y Express para las bases de datos con MongoDB.
                <br />
                La pagina que estas viendo actualmente esta construida con las tecnologias ya mencionadas
                desplegadas en Firebase el Frond-end y el Backend en Heroku
                </p>
                <Link className="link-readMore text-bold show-mobile" to="/project">
                    Proyectos <img src={menuDark} alt="menu" height="8" />
                </Link>
            </section>
        </section>
    )
}

export default About;
