import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../components/footer/footer.component";
import ProjectCard from "../components/projectCard/projectcard.component";
import ProjectContainer from "../components/projectContainer/projectcontainer.component";
//images
import PawsLife from "../images/pawslife.png";

export default function Portfolio() {
  const projects = [
    {
      description: "",
      src: PawsLife,
      name: "PawsLife",
      live: "https://pawslife.herokuapp.com/",
      github: "https://github.com/rickyg218/PawsLIfe-",
    },
    {
      description: "A video conference app with Drag'n'Drop room UI",
      src: `http://placekitten.com/200/200`,
      name: "Videezy",
      live: "https://dropinsamine.herokuapp.com/",
      github: "https://github.com/NickMardon/DragChat",
    },
    {
      description: "this here is project 3",
      src: `http://placekitten.com/200/200`,
      name: "project3",
      live: "https://www.google.com",
      github: "https://github.com/epachols",
    },
    {
      description: "this here is project 4",
      src: `http://placekitten.com/200/200`,
      name: "project4",
      live: "https://www.google.com",
      github: "https://github.com/epachols",
    },
  ];

  return (
    <Container fluid>
      <Row>
        <Col xs={{ span: 10, offset: 1 }} md={{ span: 8, offset: 1 }}>
          <h3>Project portfolio</h3>
        </Col>
      </Row>
      <ProjectContainer projects={projects} />
      <Row style={{ height: `10vh` }}></Row>
      <Footer />
    </Container>
  );
}
