import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/About.css";

//Icons
import colorArrow from "../assets/ArrowcolorArrow.png";
import menuDark from "../assets/VectorMenuDark.png";

export const About = () => {
	const skills = ["JavaScript", "React JS", "Node JS", "Wordpress"];

	return (
		<section className="contenido about animate__animated animate__fadeIn">
			<section className="about-izq">
				<div className="left-block">
					<h2 className="title-about font-black">Habilidades clave </h2>
					{skills.map((skill) => (
						<div key={skill} className="skill-item">
							<div className="circle"></div>
							<span className="skill text-extra-ligth">{skill}</span>
						</div>
					))}
				</div>
				<div className="rigth-block">
					<div>
						<hr className="vector-about" />
						<div className="readMore-section">
							<Link className="link-readMore text-bold" to="/projects">
								Proyectos
							</Link>
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
					Soy un desarrollador web especializado en crear soluciones tecnológicas 
					eficientes y centradas en el usuario. Me enfoco en la simplicidad y la 
					legibilidad del código, adoptando prácticas de programación que garantizan la 
					mantenibilidad y escalabilidad a largo plazo. Disfruto enfrentando desafíos 
					técnicos y dividiéndolos en problemas manejables, lo que me permite desarrollar 
					soluciones modulares y acelerar el proceso de desarrollo. Me adapto a las necesidades 
					del equipo y del cliente, comprometiéndome a ofrecer soluciones de alta calidad 
					dentro del presupuesto y el tiempo acordados. Mi pasión por el desarrollo 
					web se refleja en mi propia página web, donde presento una variedad de proyectos 
					que demuestran mi experiencia y dedicación en cada aspecto del desarrollo web.
				</p>
				<Link className="link-readMore text-bold show-mobile" to="/projects">
					Proyectos <img src={menuDark} alt="menu" height="8" />
				</Link>
			</section>
		</section>
	);
};

export default About;
