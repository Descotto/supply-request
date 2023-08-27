import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav } from 'react-bootstrap';


const LeftSidebarNavbar = () => {
  return (
    <Navbar bg="light" variant="light" expand="lg" className="flex-column">
      <Navbar.Brand href="/">Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="flex-column">
          
          <Nav.Link href="/request">New Request</Nav.Link>
          <Nav.Link href="/lookup">Find by ID</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          
          
          {/* Add more Nav.Link components for additional links */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default LeftSidebarNavbar;
