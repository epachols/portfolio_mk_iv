import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../components/footer/footer.component";
import ProjectContainer from "../components/projectContainer/projectcontainer.component";
//images
import PawsLife from "../images/pawslife.png";
import VidApi from "../images/videezyapi.png";
import Videezy from "../images/videezypreview.png";
import MoodIndigo from "../images/moodindigo.png";
import ContactButton from "../components/contactbutton/contactbutton.component";

export default function Portfolio() {
  const links = {
    github: {
      a: "https://github.com/epachols",
      icon: "fab fa-github-alt",
    },
    linkedin: {
      a: "https://www.linkedin.com/in/epacholski/",
      icon: "fab fa-linkedin",
    },
    email: {
      a: "mailto:epacholski86@gmail.com",
      icon: "fas fa-envelope-open-text",
    },
  };
  const projects = [
    {
      id: "1",
      description: "drag & drop video meetings",
      src: Videezy,
      moreInfo:
        "This conferencing prototype uses React, React DnD, and the Jitsi API to craft actionable, drag-and-drop multiroom meetings where everyone has personal access to all breakout rooms.",
      name: "Videezy",
      live: "https://dropinsamine.herokuapp.com/",
      github: "https://github.com/NickMardon/DragChat",
      alt: "Videezy, a video conferencing app with drag and drop interface.",
    },
    {
      id: "2",
      description: "backend server for Videezy",
      moreInfo:
        "Built with node.js, express, and SQL, utilizing MC and simple restful API structure",
      src: VidApi,
      name: "Videezy API",
      live: "https://dropinapisamine.herokuapp.com/",
      github: "https://github.com/epachols/dropin_api",
    },
    {
      id: "3",
      description: "community pet services",
      moreInfo:
        "...where users can save their pets, post pet services for others or use google maps to find and book services provided by other users",
      src: PawsLife,
      name: "PawsLife",
      live: "https://pawslife.herokuapp.com/",
      github: "https://github.com/rickyg218/PawsLIfe-",
      alt: "PawsLife, a community-driven pet app",
    },

    {
      id: "4",
      description: "Weather-Styled Mood Music",
      moreInfo: "Mood Indigo allows the user to select ",
      src: MoodIndigo,
      name: "Mood:Indigo",
      live: "https://epachols.github.io/moodIndigo/",
      github: "https://github.com/epachols/moodIndigo",
    },
  ];

  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={{ span: 10, offset: 1 }}>
            <div className="projectTitle">
              <h2>Recent Projects</h2>
              <h5>
                Here are a few of the projects I have worked on recently, for
                more just &nbsp;
                <a href="mailto:epacholski86@gmail.com">
                  <i className="fas fa-envelope-open-text"></i>email me!
                </a>
              </h5>
              <br></br>
            </div>
          </Col>
        </Row>
        <ProjectContainer projects={projects} />
        <Row
          className="justify-content-center align-items-center"
          style={{
            height: `500px`,
            backgroundColor: "#F9E9D5",
            marginTop: `-170px`,
          }}
        >
          <div className="callToAction">
            <div>Interested in chatting or working with me?
            </div>
            <div style={{display:"inherit"}}>
              <ContactButton link={links.github.a} icon={links.github.icon} />
              <ContactButton
                link={links.linkedin.a}
                icon={links.linkedin.icon}
              />
              <ContactButton link={links.email.a} icon={links.email.icon} />
            </div>
            
          </div>
        </Row>
        <Footer />
      </Container>
    </>
  );
}
