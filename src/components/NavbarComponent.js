import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavbarComponent = () => {
  return (
    <Navbar bg="light">
      <Navbar.Brand href="#home">KZ Delivery</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavbarComponent;
