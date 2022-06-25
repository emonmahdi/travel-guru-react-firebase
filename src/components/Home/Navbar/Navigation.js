import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './Navigation.css'

import logo from '../../../Assets/Logo.png'

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg"  variant='dark'>
  <Container>
  <Navbar.Brand href="#home">
      <img src={logo} className="img-fluid" height='130px' width='150px' alt="" />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <div className="search-bar ms-auto">
      <input type="text" placeholder='Search your destination' className='form-control' />
    </div>
    <Nav className="ms-auto">
      <Nav.Link href="#features">News</Nav.Link>
      <Nav.Link href="#pricing">Destination</Nav.Link> 
      <Nav.Link href="#pricing">Blog</Nav.Link> 
      <Nav.Link href="#pricing">Contact</Nav.Link> 
      <button className='btn btn-warning'>Login</button> 
    </Nav> 
  </Navbar.Collapse>
  </Container>
</Navbar>
  );
};

export default Navigation;