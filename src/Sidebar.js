import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const LeftSidebarNavbar = (props) => {
  return (
    <Navbar className="custom-navbar" expand="lg">
      <Navbar.Brand href="/">Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="custom-nav">
          <props.Link to="/request" className="custom-nav-link">New Request</props.Link>
          <props.Link to="/lookup" className="custom-nav-link">Find by ID</props.Link>
          <props.Link to="/about" className="custom-nav-link">About</props.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default LeftSidebarNavbar;
