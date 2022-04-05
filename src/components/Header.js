import React, { useContext, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { WeatherContext } from "../context/context";

const Header = () => {
  const context = useContext(WeatherContext);

  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand>
            <span className="h2 text-white">WEATHER APP</span>
          </Navbar.Brand>
          <Nav>
            <Nav.Link className="h4 text-light" href="#">
              {context.name ? context.name : "city"}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
