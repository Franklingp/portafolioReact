import React from "react";
import "../assets/styles/Home.css";
import global from "../config.js";
import About from "./About";

//Icons
import arrow from "../assets/ArrowreadMore.png";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";

const Home = () => {
	return (
		<React.Fragment>
			<section className="contenido animate__animated animate__fadeIn">
				<div className="izq">
					<div />
					<aside className="social-media-icons">
						<a href={global.instagram}>
							<img src={instagram} alt="instagram" />
						</a>
						<a href={global.facebook}>
							<img src={facebook} alt="facebook" />
						</a>
						<a href={global.linkedin}>
							<img src={linkedin} alt="linkedin" />
						</a>
						<a href={global.github}>
							<img src={github} alt="github" />
						</a>
					</aside>
					<hr className="vector-about show-mobile" />
					<div className="animate__animated animate__fadeInLeft">
						<p className="left-info text-ligth">
							<span className="left-title font-black">
								Desarrollador <br /> web{" "}
							</span>
							<span style={{ color: "#A68E52" }}>Front-end</span>
							<br />
							en busca de nuevos <br />
							retos.
						</p>
					</div>
					<hr className="vector-about show-mobile" />
				</div>

				<div className="der">
					<div className="header">
						<h1 className="header-bold animate__animated animate__fadeInDown">
							Welcome
						</h1>
						<p className="header-ligth">
							Just do it, in
							<span style={{ color: "#A68E52" }}> React JS </span>
						</p>
					</div>
				</div>
			</section>
			<About />
		</React.Fragment>
	);
};

export default Home;
