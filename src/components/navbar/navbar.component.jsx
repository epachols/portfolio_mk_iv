import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import Burger from "../burger/burger.component";
import Logo from "../../images/logo.png";
import "./style.css";

export default function NavBar() {
  return (
    <div>
      <Navbar expand="lg">
        <Navbar.Brand
          href="https://www.linkedin.com/in/epacholski/"
          target="_blank"
          title="visit my linkedin"
        >
          <img src={Logo} height="55px"></img>
          <span className="navBrand">&nbsp;&nbsp;Evan Pacholski</span>
        </Navbar.Brand>
        <Navbar.Toggle
          id="customToggle"
          aria-controls="basic-navbar-nav"
          children={<Burger />}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <nav className="ml-auto">
            <ul>
              <li>
                <NavLink to="/about" title="more about me">
                  about
                </NavLink>
                &nbsp;&nbsp; | &nbsp;&nbsp;
                <NavLink to="/portfolio" title="recent projects">
                  portfolio
                </NavLink>
              </li>
              <li></li>
              <li>
                <a href="mailto:epacholski86@gmail.com?subject=Hello%20Evan%20RE-Portfolio&body=I%20was%20recently%20browsing%20your%20portfolio">
                  contact me
                </a>
              </li>
            </ul>
          </nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
