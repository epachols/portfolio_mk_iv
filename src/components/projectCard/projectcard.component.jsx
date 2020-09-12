import React from 'react'
import "./style.css"


// props required by this ProjectCard: src, alt, name, live, github, description
export default function ProjectCard(props) {

    //TODO:
    //TODO: currently working on:: styling of project cards, place image as background of div, not as img tag so text overlay is possible with shadow on hover.
    //TODO: resize images to be SLIGHTLY less square, rounded, in back
    //TODO: style A tags on project portfolio page
    //TODO: write small intro blurb about projects and styles etc blaw blaw.
    //TODO:
    return (
        <div>
            <img src={props.src} alt={props.alt} width="100%"></img>
            <p>{props.description || `a description of the project goes here when passed`}</p>
            <a href={props.live} target="_blank" alt="deployed link">{props.name}</a> &nbsp;&nbsp;
            <a href={props.github} target="_blank" alt="github repo"><i className="fab fa-github"></i>Github</a>
        </div>
    )
}
