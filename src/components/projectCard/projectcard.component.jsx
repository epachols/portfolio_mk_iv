import React from 'react'
import "./style.css"


// props required by this ProjectCard: src, alt, name, live, github
export default function ProjectCard(props) {

    return (
        <div>
            <img src={props.src} alt={props.alt} width="100%"></img>
            <p>these are some words about a Project, any number of projects</p>
            <a href={props.live} target="_blank" alt="deployed link">{props.name}</a> &nbsp;&nbsp;
            <a href={props.github} target="_blank" alt="github repo"><i className="fab fa-github"></i>Github</a>
        </div>
    )
}
