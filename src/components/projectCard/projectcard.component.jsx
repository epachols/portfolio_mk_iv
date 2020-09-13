import React from "react";
import "./style.css";
import Col from "react-bootstrap/Col";

// props required by this ProjectCard: src, name, live, github, description
export default function ProjectCard(props) {
  //TODO:
  //TODO: currently working on:: styling of project cards, place image as background of div, not as img tag so text overlay is possible with shadow on hover.
  //TODO: resize images to be SLIGHTLY less square, rounded, in back
  //TODO: style A tags on project portfolio page
  //TODO: write small intro blurb about projects and styles etc blaw blaw.
  //TODO:
  return (
    <Col
      xs={{ span: 10, offset: 1 }}
      sm={{ span: 6, offset: 0 }}
      lg={{ span: 3 }}
    >
    {props.project&&props.project.src? (
      <div className="projectCard">
        <img src={props.project.src} alt={props.project.alt} width="100%"></img>
        <p>{props.project.description}</p>
        <a href={props.project.live} target="_blank" alt="deployed link">
          {props.project.name}
        </a>{" "}
        &nbsp;&nbsp;
        <a href={props.project.github} target="_blank" alt="github repo">
          <i className="fab fa-github"></i>Github
        </a>
      </div>

    ) : (
        <h3>hhhhhhaaaaangggg on. r-r-r-r-ee-e-e-ee-ebuffering</h3>
    )}
    </Col>
  );
}

// cards that look ok
// fun animations
// don't have to wait for portfolio dyno
// don't have to wait for project dyno
// all the projects are really good
// a11y improvements
