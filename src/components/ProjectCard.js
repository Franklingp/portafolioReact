import React from 'react';
import { withRouter } from 'react-router-dom';
import './ProjectCard.css';
import { fistUpercase } from '../service/textFormat';

const ProjectCard = (props) => {
    const { _id, name, date, category, index } = props;

    const handleResponsive = () => {
        if(window.screen.width > 1000){
            if(index % 2 === 0){
                return "content-card left-card"
            }else{
                return "content-card rigth-card"
            } 
        }else{
            console.log("mobile");
            return "content-card-mobile"
        }
    }

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
        <article className={handleResponsive()} style={{backgroundColor, color}}
        onClick={OnClick}>
            <h2 className="card-title text-regular">{fistUpercase(name)}</h2>
            <br className="show-mobile"/>
            <span className="card-date text-ligth">{String(new Date(date).toDateString())}</span>
            <br className="show-mobile"/>
            <span className="card-category text-ligth">{fistUpercase(category)}</span>
        </article>
    )
}

export default withRouter(ProjectCard);