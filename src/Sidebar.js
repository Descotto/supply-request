import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from 'react-router-dom';


const LeftSidebarNavbar = () => {
  return (
    <Navbar bg="light" variant="light" expand="lg" className="flex-column">
      <Navbar.Brand href="/">Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="flex-column">
          <Router>
          <Link to="/request">New Request</Link>
          <Link to="/lookup">Find by ID</Link>
          <Link to="/about">About</Link>

          </Router>
          

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default LeftSidebarNavbar;
