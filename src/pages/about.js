import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Mugshot from "../images/Untitled.png";
import Footer from "../components/footer/footer.component";

export default function About() {
  return (
    <div className="aboutParallax">
      <Container fluid className="aboutContainer">
        <Row style={{ paddingTop: "10vh" }}>
          <Col>
            <img src={Mugshot} height="200px" alt="headshot"></img>
          </Col>
        </Row>
        <br></br>
        <br></br>

        <Row className="techRow">
          <Col
            className="px-0"
            xs={{ span: 10, offset: 1 }}
            md={{ span: 8, offset: 2 }}
            lg={{ order: 2, span: 4, offset: 0 }}
          >
            <div className="aboutCard">
              <h6>
                <span style={{ fontSize: "28px" }}>
                  <i className="fas fa-layer-group"></i>
                </span>
                &nbsp;&nbsp;Full Stack
              </h6>
              <hr></hr>
              <p>
                MERN & SERN stack <br />
                Git Hub, Git Lab, Git flow <br />
                Heroku <br />
                restful API practices <br />
                Google Maps API
              </p>

              <p></p>
            </div>
          </Col>
          <Col
            className="px-0"
            xs={{ span: 10, offset: 1 }}
            md={{ span: 6, offset: 0 }}
            lg={{ order: 1, span: 4 }}
          >
            <div className="aboutCard">
              <h6>
                <span style={{ fontSize: "28px" }}>
                  <i class="fas fa-drafting-compass"></i>
                </span>
                &nbsp;&nbsp;UX/UI
              </h6>
              <hr></hr>
              <p>
                <span>
                  I enjoy design work, and have been working lately with:
                </span>
                <br />
                HTML5 & CSS3 <br />
                Framework Libraries <br />
                React, BootStrap, AntDesign, Foundation <br />
              </p>
            </div>
          </Col>
          <Col
            className="px-0"
            xs={{ span: 10, offset: 1 }}
            md={{ span: 6, offset: 0 }}
            lg={{ order: 3, span: 4 }}
          >
            <div className="aboutCard">
              <h6>
                <span style={{ fontSize: "28px" }}>
                  <i class="fas fa-server"></i>
                </span>{" "}
                &nbsp;&nbsp;Server-Side
              </h6>
              <hr></hr>
              <p>
                Node.js <br />
                Express <br />
                SQL, mySQL <br />
                NoSQL DBMSs <br />
                Session auth <br />
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
