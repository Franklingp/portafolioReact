import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/About.css";

//Icons
import colorArrow from "../assets/ArrowcolorArrow.png";
import menuDark from "../assets/VectorMenuDark.png";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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
							<ArrowForwardIcon />
						</div>
						<hr className="vector-about" />
					</div>
					<hr className="vector-about-division" />
				</div>
			</section>
			<section className="about-der text-regular">
				<h3 className="about-me">Sobre mi</h3>
				<p className="paragraph text-ligth">
					Desarrollador web, mi trabajo consiste en desarrollar aplicaciones web
					que cumplan objetivos determinados, ya sea desde mostrar información
					con sitios web estáticos como aplicaciones más compleja que permitan
					manejar y almacenar información para el usuario como manejo de
					productos si es un sistema de inventario o manejo de métodos de pagos
					para e-commerce, etc., todo esto con programación y buenas prácticas
					en código sin dejar de lado la experiencia de usuario y el diseño
					estético del sitio web.
				</p>
				<Link className="link-readMore text-bold show-mobile" to="/projects">
					Proyectos <img src={menuDark} alt="menu" height="8" />
				</Link>
			</section>
		</section>
	);
};

export default About;
