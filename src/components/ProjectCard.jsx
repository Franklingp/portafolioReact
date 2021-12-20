import React from "react";
import "../assets/styles/ProjectCard.css";

//utils
import { formatData } from "../utils/handleDate";
import { firtsUpperCase } from "../utils/textFormat";

const ProjectCard = ({ name, date, category, classess }) => {
	return (
		<article className={`content-card ${classess}`}>
			<h2 className="card-title text-extra-ligth">{firtsUpperCase(name)}</h2>
			<span className="card-date text-ligth">{formatData(date)}</span>
			<span className="card-category text-ligth">
				{firtsUpperCase(category)}
			</span>
		</article>
	);
};

export default ProjectCard;
