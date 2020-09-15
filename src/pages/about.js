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
        <Row className="justify-content-center w-100 mt-5">
          <h1>
            Full Stack Developer
            <span>Designer, Problem Solver & lifelong student</span>
          </h1>
          <h5 className="mt-3">
            I code for the joy of solving problems, in all its forms.
          </h5>
        </Row>
        <Row style={{ paddingTop: "5vh", width: "100%" }}>
          <Col xs={{ span: 10, offset: 1 }}>
            <img src={Mugshot} height="175px" alt="headshot"></img>
          </Col>
        </Row>

        <br></br>
        <br></br>

        <Row className="greeting">
          <div></div>
          <div>
            <h1>Hello,</h1>
            <h2>I'm Evan. I hope today finds you well.</h2>
            <p className="my-5 px-5">
              I am a junior Full Stack Developer with a love of design and a
              keen interest in data management solutions. Curiosity, enthusiasm
              and a dedicated nature combined with a palette of soft skills
              drives me to learn and grow daily, and I look forward to new
              challenges and stacked odds.
            </p>
            <br></br>
            <br></br>
          </div>
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
                <span style={{ fontSize: "45px" }}>
                  <i className="fas fa-layer-group my-3"></i>
                </span>
                <br></br>
                <span
                  style={{
                    fontSize: "20px",
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  Full Stack
                </span>
              </h6>
              <hr></hr>
              <br></br>
              <p className="mx-2">
                I like building from the ground up, but I'm not afraid of
                frameworks or dev docs.
              </p>
              <ul>
                <li
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    fontSize: "1.15rem",
                  }}
                >
                  Languages I speak:
                </li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>JSX</li>
                <li>Sass</li>
                <br></br>

                <li
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    fontSize: "1.15rem",
                  }}
                >
                  Host Tools:
                </li>
                <li>Git, Github, Heroku, Gitlab</li>
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
                <span style={{ fontSize: "45px" }}>
                  <i className="fas fa-drafting-compass my-3"></i>
                </span>
                <br></br>
                <span
                  style={{
                    fontSize: "20px",
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  UX/UI
                </span>
              </h6>
              <hr></hr>
              <br></br>
              <p className="px-2">
                I enjoy design work, especially creating straightforward UX and Mobile-forward apps 
              </p>
              <ul>
                <li
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    fontSize: "1.15rem",
                  }}
                >
                  Framework Libraries:
                </li>
                <li>React</li>
                <li>BootStrap</li>
                <li>AntDesign</li>
                <li>Foundation</li>
                <li>Materialize</li>
                <br></br>
                <li style={{
                    fontWeight: "bold",
                    color: "black",
                    fontSize: "1.15rem",
                  }}>other design tools:</li>
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
                <span style={{ fontSize: "45px" }}>
                  <i className="fas fa-server my-3"></i>
                </span>
                <br></br>
                <span
                  style={{
                    fontSize: "20px",
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  Server-Side
                </span>
              </h6>
              <hr></hr>
              <br></br>
              <p className="mx-2">
                I enjoy writing scalable, restful backend code that's legible
                and modular.
              </p>
              <ul>
                <li
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    fontSize: "1.15rem",
                  }}
                >
                  Backend JSREs and DBMSs:
                </li>
                <li>Node.js</li>
                <li>Express</li>
                <li>SQL, mySQL</li>
                <li>NoSQL DBMSs</li>
                <br></br>
                <li
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    fontSize: "1.15rem",
                  }}
                >
                  other applications:
                </li>
                <li>
                  Google Maps API, Express-session, Jitsi API, Axios, dotenv,
                  etc
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row style={{ height: "50vh", maxWidth: "100%" }}></Row>
      </Container>
      <Footer />
    </div>
  );
}
