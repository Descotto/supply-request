import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav } from 'react-bootstrap';



const LeftSidebarNavbar = (props) => {
  return (
    <Navbar bg="light" variant="light" expand="lg" className="flex-column">
      <Navbar.Brand href="/">Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="flex-column">

          <props.Link to="/request" className="dropdown">New Request</props.Link>
          <props.Link to="/lookup" className="dropdown">Find by ID</props.Link>
          <props.Link to="/about" className="dropdown">About</props.Link>


        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default LeftSidebarNavbar;
