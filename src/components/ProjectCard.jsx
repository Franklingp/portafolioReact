import React from "react";
import "../assets/styles/ProjectCard.css";

//utils
import { fistUpercase } from "../service/textFormat";

const ProjectCard = ({ name, date, category, classess }) => {
	return (
		<article className={`content-card ${classess}`}>
			<h2 className="card-title text-extra-ligth">{fistUpercase(name)}</h2>
			<span className="card-date text-ligth">{date}</span>
			<span className="card-category text-ligth">{category}</span>
		</article>
	);
};

export default ProjectCard;
