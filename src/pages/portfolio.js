import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../components/footer/footer.component";
import ProjectCard from "../components/projectCard/projectcard.component";
//images
import PawsLife from '../images/pawslife.png'


export default function Portfolio() {
  return (
    <Container fluid>
      <Row>
        <Col xs={{ span: 10, offset: 1}} md={{ span: 8, offset: 1 }}>
          <h3>Project portfolio</h3>
        </Col>
      </Row>
      <Row>
        <Col
          xs={{ span: 10, offset: 1 }}
          sm={{ span: 6, offset: 0 }}
          lg={{ span: 3 }}
        >
          <ProjectCard 
              src = ""
              name="Videezy"
              live="https://dropinsamine.herokuapp.com/"
              github="https://github.com/NickMardon/DragChat"
          />
        </Col>
        <Col
          xs={{ span: 10, offset: 1 }}
          sm={{ span: 6, offset: 0 }}
          lg={{ span: 3 }}
        >
          <ProjectCard 
              src = {PawsLife}
              name="PawsLife"
              live="https://pawslife.herokuapp.com/"
              github="https://github.com/rickyg218/PawsLIfe-"
          />
        </Col>
        <Col
          xs={{ span: 10, offset: 1 }}
          sm={{ span: 6, offset: 0 }}
          lg={{ span: 3 }}
        >
          pieces til
        </Col>
        <Col
          xs={{ span: 10, offset: 1 }}
          sm={{ span: 6, offset: 0 }}
          lg={{ span: 3 }}
        >
          they fit
        </Col>
      </Row>
      <Row style={{height: `10vh`}}></Row>
      <Footer />
    </Container>
  );
}
