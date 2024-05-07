import React from "react";
import "../assets/styles/Home.css";
import global from "../config.js";
import About from "./About";

//Material ui log
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Home = () => {
	return (
		<React.Fragment>
			<section className="contenido animate__animated animate__fadeIn">
				<div className="izq">
					<div />
					<aside className="social-media-icons">
						<a href={global.instagram} target="_blank" rel="noopener noreferrer">
							<InstagramIcon
							alt="Instagram"
							/>
						</a>
						<a href={global.facebook} target="_blank" rel="noopener noreferrer">
							<FacebookIcon
							alt="Facebook"
							/>
						</a>
						<a href={global.linkedin} target="_blank" rel="noopener noreferrer">
							<LinkedInIcon
							alt="LinkedIN"
							/>
						</a>
						<a href={global.github} target="_blank" rel="noopener noreferrer">
							<GitHubIcon
							alt="Github"
							/>
						</a>
					</aside>
					<hr className="vector-about show-mobile" />
					<div className="animate__animated animate__fadeInLeft">
						<p className="left-info text-ligth">
							<span className="left-title font-black">
								Desarrollador <br /> web{" "}
							</span>
							<span className="primary">Front-end</span>
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
							<span className="primary"> React JS </span>
						</p>
					</div>
				</div>
			</section>
			<About />
		</React.Fragment>
	);
};

export default Home;
