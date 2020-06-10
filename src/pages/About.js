import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './About.css';
import colorArrow from '../assets/ArrowcolorArrow.png';
import menuDark from '../assets/VectorMenuDark.png';

export const About = () => {
    const [animation, setAnimation] = useState("contenido about animation-none");

    const handleAnimation = () => {
        setTimeout( () => {
            setAnimation("contenido about animation-show");
        },1);
    }
    handleAnimation();
    return (
    <section className={animation}>
        <section className="about-izq">
            <div className="left-block">
                 <h2 className="title-list text-black title-about">FullStack </h2>

                <div>
                    <div className="circle"></div>
                    <span className="skill text-extra-ligth">React JS</span>
                </div>
                
                <div>
                    <div className="circle"></div>
                    <span className="skill text-extra-ligth">Angular Js</span>
                </div>
                <div>
                    <div className="circle"></div>
                    <span className="skill text-extra-ligth">Node JS</span>
                </div>
                <div>
                    <div className="circle"></div>
                    <span className="skill text-extra-ligth">Express</span>
                </div>
                <div>
                    <div className="circle"></div>
                    <span className="skill text-extra-ligth">MongoDB</span>
                </div>
            </div>
            <div className="rigth-block">
                <div>
                    <hr className="vector-about"/>
                    <Link className="link-readMore text-bold" to="/project">Proyectos</Link>
                    <img className="arrow-project" src={colorArrow} alt="arrow"/>
                    <hr className="vector-about"/>
                </div>
                <hr className="vector-about-division"/>
            </div>
        </section>
        <section className="about-der text-regular">
            <h3 className="about-me">Sobre mi</h3>
            <p className="paragraph text-ligth">
                Franklin Pimentel Desarrollador Junior FullStack.
                <br/>
                <br/>
                Como FullStack cuento con conocimientos en Frond-end con React JS y Angular y en 
                Backend manejo NodeJS junto con Express y por ultimo para la base de datos uso MongoDB.
                <br/>
                <br/>
                La pagina que estas viendo actualmente esta construida con las tecnologias ya mencionadas.
                Si quieres saber mas sobre los proyectos en los que he trabajado te invito a visitar la pagina de proyectos
                y mi repositorio de Github. 
                {/* Etiam non luctus enim, nec venenatis leo. Proin vitae odio quis lacus molestie rutrum. Aenean vitae lobortis erat. Ut fringilla nisl efficitur lorem blandit, eu finibus metus commodo. Aliquam a velit euismod, aliquet augue at, lacinia dui. Fusce lobortis nisi et velit ultrices vehicula. Aenean a felis nec odio rutrum aliquet. Duis convallis, orci sit amet fermentum vehicula, lorem magna posuere nibh, et molestie lacus eros eget dolor. Maecenas vulputate scelerisque est, eget blandit lacus vestibulum sit amet. Proin ac augue a ipsum venenatis mollis. Morbi scelerisque, est et bibendum sagittis, nisl arcu rutrum ipsum, ut ultricies augue mi vitae lorem. Praesent a sapien viverra, tincidunt erat vel, elementum mi. Donec ex justo, commodo eu leo nec, volutpat faucibus nibh. Aenean quis tristique ante. Maecenas dignissim velit ullamcorper tortor aliquam, vitae dictum odio egestas. Etiam sem ligula, hendrerit nec tortor at, consequat volutpat ipsum. */}
            </p>
            <Link className="link-readMore text-bold show-mobile" to="/project">
                Proyectos <img src={menuDark} alt="menu" height="8"/> 
            </Link>
        </section>
    </section>
    )
}

export default About;
