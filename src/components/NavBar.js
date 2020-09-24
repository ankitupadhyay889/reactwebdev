import React, { Component } from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Navbar, Nav, NavLink } from "react-bootstrap";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

import logo from "../images/cre.jpg";

export default class NavBar extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar bg="dark" variant="dark" className="navb">
            <Navbar.Brand href="/"><img src={logo} alt="imga" /></Navbar.Brand>
            <Nav className="mr-auto">
              <NavLink href="#home"><Link to="/">Home</Link></NavLink>
              <NavLink href="#features"><Link to="/about">About</Link></NavLink>
              <NavLink href="#pricing"><Link to="/contact">ContactUs</Link></NavLink>
            </Nav>
          </Navbar>

          <Route exact path="/"><Home /></Route>

          <Route path="/about"><About /></Route>

          <Route path="/contact"><Contact /></Route>

        </Router>
      </div>
    );
  }
}
