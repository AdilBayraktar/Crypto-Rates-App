import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function MainNavbar() {
  return (
    <>
      <Navbar bg="light" className="shadow" variant="light">
        <Container>
          <Navbar.Brand>
            <Link to={"/"} className="text-warning fw-bold fs-4">
              <i className="bi bi-currency-bitcoin"></i>
              Crypto Tracker App
            </Link>
          </Navbar.Brand>
          <Nav>
            <Link to={"/"} className="nav-link">
              Home
            </Link>
            <Link to={"/about"} className="nav-link">
              About
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default MainNavbar;
