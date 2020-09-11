import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from 'react-router-dom'
import Burger from "../burger/burger.component";
import './style.css';

export default function NavBar() {
  return (
    <div>
     
      <Navbar expand="lg">
        <Navbar.Brand href="/" alt="visit my Linkedin">Evan Pacholski</Navbar.Brand>
        <Navbar.Toggle id="customToggle" aria-controls="basic-navbar-nav" children={<Burger />}/>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar.Collapse id="basic-navbar-nav">
          <nav className="ml-auto">
          <ul>
              <li>
              <NavLink to="/about">about</NavLink>
              &nbsp;&nbsp; | &nbsp;&nbsp;
              <NavLink to="/portfolio">portfolio</NavLink>
              </li>
              <li></li>
              <li>contact</li>
          </ul>
          
          </nav>
      
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
