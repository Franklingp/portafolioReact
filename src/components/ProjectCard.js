import React from 'react'
import "../assets/styles/ProjectCard.css";

export default function ProjectCard({ name, date, category }) {
    return (
        <article className={"content-card"}>
            <h2 className="card-title text-regular">{name}</h2>
            <br className="show-mobile" />
            <span className="card-date text-ligth">{date}</span>
            <br className="show-mobile" />
            <span className="card-category text-ligth">{category}</span>
        </article>
    )
}
