import React from "react";
import "../assets/styles/ProjectCard.css";

//utils
import { formatDate } from "../utils/handleDate";
import { firstUpperCase } from "../utils/textFormat";

const ProjectCard = ({ name, date, category, classess }) => {
	return (
		<article className={`content-card ${classess}`}>
			<h2 className="card-title text-ligth">{firstUpperCase(name)}</h2>
			<span className="card-date text-ligth">{formatDate(date)}</span>
			<span className="card-category text-ligth">
				{firstUpperCase(category)}
			</span>
		</article>
	);
};

export default ProjectCard;
