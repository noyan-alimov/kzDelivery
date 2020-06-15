import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavbarComponent = () => {
  return (
    <Navbar bg="light">
      <Link to="/">
        <Navbar.Brand href="#home">KZ Delivery</Navbar.Brand>
      </Link>
      <Nav className="mr-auto">
        <Link to="/">
          <Nav.Link href="#home">Home</Nav.Link>
        </Link>
        <Link to="/delivery-form">
          <Nav.Link href="#link">Make a delivery request</Nav.Link>
        </Link>
      </Nav>
    </Navbar>
  );
};

export default NavbarComponent;
