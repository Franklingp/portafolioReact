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
				Soy un desarrollador web altamente capacitado, especializado en Frontend con 
				un enfoque en React y JavaScript. Mi pasión por la excelencia técnica se 
				refleja en mi enfoque meticuloso para crear soluciones eficientes y centradas 
				en el usuario. Con una habilidad probada en el diseño y desarrollo de aplicaciones 
				web escalables y mantenibles, estoy comprometido a superar desafíos técnicos 
				y ofrecer soluciones de alta calidad que cumplen con los objetivos del proyecto.
				</p>
				<Link className="link-readMore text-bold show-mobile" to="/projects">
					Proyectos <img src={menuDark} alt="menu" height="8" />
				</Link>
			</section>
		</section>
	);
};

export default About;
