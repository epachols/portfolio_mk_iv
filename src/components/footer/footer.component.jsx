import React from "react";
import "./style.css";
import fadeImg from "../../images/footerfade.png";

export default function Footer() {
  return (
    <div className="footerContainer">
      <img className="footerFade" src={fadeImg} width={`100%`} alt="fade effect on footer"></img>
      <div className="footerBody">
        &copy; made with <span role="img" aria-label="heart">❤️</span> by Evan Pacholski &nbsp; <br/>
        <a
          href="https://www.linkedin.com/in/epacholski/"
          target="_blank"
          rel="noopener noreferrer"
          title="Linkedin"
          alt="Linkedin"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        &nbsp;&nbsp;
        <a
          href="https://github.com/epachols"
          target="_blank"
          rel="noopener noreferrer"
          title="Github"
          alt="Github"
        >
          <i className="fab fa-github"></i>
        </a>
      </div>
    </div>
  );
}
