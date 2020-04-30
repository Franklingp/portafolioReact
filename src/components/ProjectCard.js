import React from 'react';
import { withRouter } from 'react-router-dom';
import './ProjectCard.css';

const ProjectCard = (props) => {
    const { _id, name, date, category, index } = props;

    const handleColor = () => {
        let i = index;
        if(index > 3){
            i = index % 4;
        }
        switch(i){
            case 0:
                return ["#A68E52", "#212224"];
            case 1:
                return ["#C4C4C4", "#212224"];;
            case 2:
                return ["#E3E3E4", "#212224"];
            default:
                return ["#212224",  "#ffffff"];
        }
    }

    const [backgroundColor, color] = handleColor();

    const OnClick = () => {
       props.history.push(`/project/${_id}`);
    }

    return(
        <article className={index % 2 === 0 ? "content-card left-card" : "content-card rigth-card"} style={{backgroundColor, color}}
        onClick={OnClick}>
            <h2 className="card-title text-regular">{name}</h2>
            
            <span className="card-date text-ligth">{date}</span>
           
            <span className="card-category text-ligth">{category}</span>
        </article>
    )
}

export default withRouter(ProjectCard);