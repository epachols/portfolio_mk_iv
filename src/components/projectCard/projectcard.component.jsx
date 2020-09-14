import React from "react";
import "./style.css";
import Col from "react-bootstrap/Col";




// props required by this ProjectCard: src, name, live, github, description
export default function ProjectCard(props) {
  return (
    <Col className="projectCardCol"
      xs={{ span: 10, offset: 1 }}
      sm={{ span: 6, offset: 0 }}
      lg={{ span: 3 }}
    >
      {props.project && props.project.src ? (
        <div className="projectCard">

        <div className="picContainer">
          <img
            src={props.project.src}
            alt={props.project.alt}
            width="100%;"
          ></img>
          <div className="caption">{props.project.description}</div>
        </div>



        <div className="projectCardLinks">

          <a
            href={props.project.live}
            target="_blank"
            rel="noopener noreferrer"
            alt="deployed link"
          >
            {props.project.name}
          </a>{" "}
          &nbsp;&nbsp;
          <a
            href={props.project.github}
            target="_blank"
            rel="noopener noreferrer"
            alt="github repo"
          >
            <i className="fab fa-github"></i>Github
          </a>
        </div>




        </div>
      ) : (
        <h3>hhhhhhaaaaangggg on. r-r-r-r-ee-e-e-ee-ebuffering</h3>
      )}
    </Col>
  );
}
