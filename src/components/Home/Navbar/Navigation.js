import React from "react";
import { Container, Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import "./Navigation.css";

import logo from "../../../Assets/Logo.png";
import { Link } from "react-router-dom";
import useFirebase from "../../../Hooks/useFirebase";

const Navigation = () => {
  const { user, logOut } = useFirebase();

  return (
    <Navbar collapseOnSelect expand="lg" variant="warning">
      <Container>
        <Navbar.Brand href="/home">
          <img
            src={logo}
            className="img-fluid"
            height="130px"
            width="150px"
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <div className="search-bar ms-auto">
            <input
              type="text"
              placeholder="Search your destination"
              className="form-control"
            />
          </div>
          <Nav className="ms-auto">
            <Nav.Link href="#features">News</Nav.Link>
            <Nav.Link href="#pricing">Destination</Nav.Link>
            <Nav.Link href="#pricing">Blog</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
            <Nav.Link>
            {
              user.email && <span className="text-warning">{user.displayName}</span>
            }
            </Nav.Link>
            
            {
              user.email ? <Button onClick={logOut} variant="danger">Logout</Button> :
              <Link to="/register">
              <button className="btn btn-warning">Login</button>
            </Link>
            }
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
