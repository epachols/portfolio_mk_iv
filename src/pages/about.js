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
        <Row style={{ paddingTop: "5vh", width:"100%" }}>
          <Col xs={{span:10, offset:1}}>
            <img src={Mugshot} height="250px" alt="headshot"></img>
          </Col>
        </Row>
        <br></br>
        <br></br>

        <Row className="greeting">
          <div></div>
          <div></div>
          <div></div>
        </Row>

        <Row id="techRow">
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
                <br></br>
                <span style={{ fontSize: "20px" }}>Full Stack</span>
              </h6>
              <hr></hr>
              <p style={{ textDecoration: "underline" }}>Languages I speak:</p>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Sass</li>
                <li>JavaScript</li>
                <li>JSX</li>
                <li>***</li>

                <li>
                  I have also worked with hosting platforms{" "}
                  <span style={{ textDecoration: "underline" }}>such as:</span>
                </li>

                <li>Git/Github</li>
                <li>Heroku</li>
                <li>Gitlab</li>
              </ul>

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
                <br></br>
                <span style={{ fontSize: "20px" }}>UX/UI</span>
              </h6>
              <hr></hr>
              <ul>
                <li>I enjoy design work</li>
                <li>and have experience working with</li>
                <li style={{ textDecoration: "underline" }}>
                  Framework Libraries like:
                </li>
                <li>***</li>
                <li>React</li>
                <li>BootStrap</li>
                <li>AntDesign</li>
                <li>Foundation</li>
                <li>Materialize</li>
                <br></br>
                <li>as well as additional software such as:</li>
                <li>Adobe photoshop</li>
                <li>GIMP</li>
              </ul>
              <br></br>
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
                <br></br>
                <span style={{ fontSize: "20px" }}>Server-Side</span>
              </h6>
              <hr></hr>
              <ul>
                <li style={{ textDecoration: "underline" }}>
                  Backend JSREs and DBMSs:
                </li>
                <li>Node.js</li>
                <li>Express</li>
                <li>SQL, mySQL</li>
                <li>NoSQL DBMSs</li>
                <li>***</li>
                <li style={{ textDecoration: "underline" }}>
                  Additional applications:
                </li>
                <li>Google Maps API</li>
                <li>Express-session</li>
                <li>Jitsi API</li>
                <li>Axios</li>
                <li>dotenv</li>
                <li>etc.</li>
              </ul>
            </div>
          </Col>
        </Row>
        {/* <Row style={{ height: "40vh", maxWidth:"100%"}}></Row> */}
      </Container>
      <Footer />
    </div>
  );
}
