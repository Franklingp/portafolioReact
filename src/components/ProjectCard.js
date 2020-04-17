import React from 'react';
import { withRouter } from 'react-router-dom';

const ProjectCard = (props) => {
    const { _id, name, description, date, category } = props;

    const OnClick = () => {
       props.history.push(`/project/${_id}`);
    }

    return(
        <article onClick={OnClick}>
            <h2>{name}</h2>
            <span><small>{date}</small></span>
            <p>{description}</p>
            <span>{category}</span>
        </article>
    )
}

export default withRouter(ProjectCard);