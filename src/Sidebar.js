import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const LeftSidebarNavbar = (props) => {
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  const handleLinkClick = () => {
    setExpanded(false); // Close the navbar when a link is clicked
  };

  return (
    <Navbar
      className={`custom-navbar ${expanded ? 'expanded' : ''}`}
      bg="light"
      expand="lg"
      expanded={expanded}
      onSelect={() => {}} // This is required for collapseOnSelect to work
      collapseOnSelect // Automatically close the Navbar on link selection
    >
      <div className="navbar-top">
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNavbar} />
        <Navbar.Brand href="/" className={expanded ? 'expanded-home-link' : ''}>
        </Navbar.Brand>
      </div>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="custom-nav">
        <props.Link
            to="/"
            className="custom-nav-link"
            onClick={handleLinkClick} // Close the navbar when this link is clicked
          >
            Home
          </props.Link>
          <props.Link
            to="/request"
            className="custom-nav-link"
            onClick={handleLinkClick} // Close the navbar when this link is clicked
          >
            New Request
          </props.Link>
          <props.Link
            to="/lookup"
            className="custom-nav-link"
            onClick={handleLinkClick} // Close the navbar when this link is clicked
          >
            Search ID
          </props.Link>
          <props.Link
            to="/byname"
            className="custom-nav-link"
            onClick={handleLinkClick} // Close the navbar when this link is clicked
          >
            Search Name
          </props.Link>
          <props.Link
            to="/about"
            className="custom-nav-link"
            onClick={handleLinkClick} // Close the navbar when this link is clicked
          >
            About
          </props.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default LeftSidebarNavbar;
