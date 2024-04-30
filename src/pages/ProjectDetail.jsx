import React, { useState, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

//styles
import "../assets/styles/ProjectDetail.css";

//Icons
import url from "../assets/urlicon.png";
import github from "../assets/GithubIconDark.png";

//components
import Loader from "../components/Loader";

//Utils
import { firstUpperCase } from "../utils/textFormat";
import { formatDate } from "../utils/handleDate";

const ProjectDetail = ({ projects }) => {
	const [project, setProject] = useState(null);
	const navigate = useNavigate();
	const { id } = useParams();

	//get project from redux
	const getProject = useCallback(() => {
		const currentProject = projects.find((project) => project.id === id);
		if (!currentProject) {
			navigate("/projects");
		} else {
			setProject(currentProject);
		}
	}, [id, projects]);

	useEffect(() => {
		getProject();
	}, [getProject]);

	if (!project) {
		return <Loader />;
	}

	return (
		<section className="details-content animate__animated animate__fadeIn">
			<div className="izq izq-project">
				<hr className="vector-project show-mobile" />
				<img
					src={project.images}
					className="img-project animate__animated animate__zoomIn"
					alt="ProjectImage"
				/>
				<hr className="vector-project show-mobile" />
			</div>
			<div className="der-project">
				<div className="header">
					<h1 className="header-bold animate__animated animate__fadeInDown">
						{firstUpperCase(project.name)}
					</h1>
					<p className="project-header-date">
						Date(
						<span> {formatDate(project.date)} </span>
						);
					</p>
				</div>

				<div className="project-description">
					<p className="text-description text-ligth">{project.description}</p>
					<div className="icons-project">
						{project.git && (
							<a href={project.git} className="item-icon">
								<img
									src={github}
									alt="logo"
									className="d-inline-block align-center logo"
									width="32"
								/>
							</a>
						)}
						{project.url && (
							<a href={project.url} className="item-icon">
								<img
									src={url}
									alt="logo"
									className="d-inline-block align-center logo"
									width="40"
								/>
							</a>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

const mapStateToProps = (state) => ({
	projects: state.projects,
});

export default connect(mapStateToProps)(ProjectDetail);
