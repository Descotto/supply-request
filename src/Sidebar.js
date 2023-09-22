import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const LeftSidebarNavbar = (props) => {
  const [expanded, setExpanded] = useState(false);
  const [selectedLinkText, setSelectedLinkText] = useState('');

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  const handleLinkClick = (linkText) => {
    setExpanded(false);
    setSelectedLinkText(linkText);
  };

  return (
    <div>
      <Navbar>
        <div className="navbar-top">
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNavbar} />
          <Navbar.Brand href="/" className={expanded ? 'expanded-home-link' : ''}></Navbar.Brand>
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="custom-nav">
            <props.Link
              to="/"
              className="custom-nav-link"
              onClick={() => handleLinkClick('Supply Request')}
            >
              Home
            </props.Link>
            <props.Link
              to="/request"
              className="custom-nav-link"
              onClick={() => handleLinkClick('New Request')}
            >
              New Request
            </props.Link>
            <props.Link
              to="/lookup"
              className="custom-nav-link"
              onClick={() => handleLinkClick('Searching by ID')}
            >
              Search ID
            </props.Link>
            <props.Link
              to="/byname"
              className="custom-nav-link"
              onClick={() => handleLinkClick('Searching by Name')}
            >
              Search Name
            </props.Link>
            <props.Link
              to="/about"
              className="custom-nav-link"
              onClick={() => handleLinkClick('About Supply Request')}
            >
              About
            </props.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Display the selected link text */}
      <h1 className='Navbar-page-text'>{selectedLinkText}</h1>
    </div>
  );
};

export default LeftSidebarNavbar;
