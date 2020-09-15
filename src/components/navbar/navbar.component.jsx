import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Burger from "../burger/burger.component";
import Logo from "../../images/logo.png";
import "./style.css";

export default function NavBar() {
  return (
    <>
      <Navbar id="onlyNav" expand="xl">
        <Navbar.Brand
          href="https://www.linkedin.com/in/epacholski/"
          target="_blank"
          title="visit my linkedin"
        >
          
          <span className="navBrand"><img src={Logo} height="40px" alt="ETP logo"></img></span>
        </Navbar.Brand>
        <Navbar.Toggle
          id="customToggle"
          aria-controls="basic-navbar-nav"
          children={<Burger />}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto navigation" as="ul">
            <Nav.Item as="li">
              | &nbsp;
              <NavLink to="/about" title="more about me">
                about
              </NavLink>{" "}
              &nbsp;|
            </Nav.Item>
            <Nav.Item as="li">
              {" "}
              | &nbsp;
              <NavLink to="/portfolio" title="recent projects">
                portfolio
              </NavLink>{" "}
              &nbsp;|
            </Nav.Item>

            <Nav.Item as="li">
              | &nbsp;
              <a href="mailto:epacholski86@gmail.com">contact me</a>
              &nbsp; |
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
