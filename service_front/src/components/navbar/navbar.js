//import  Dropdown  from '@restart/ui/esm/Dropdown';
import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import './navbar.css';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Navbar id="navbar" bg="white" variant="light" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="index"  >
          <img
              alt=""
              src="https://cdn.icon-icons.com/icons2/62/PNG/128/bluedrawers_azul_12593.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Servicios Require<span id="usuario-sub-bram"></span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/*<Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>*/}
            </Nav>
            <Nav>
              <Nav.Link href="index" color="primary" >INICIO</Nav.Link>
              <Nav.Link href="#nuestroservicios">SERVICIOS</Nav.Link>
              <Nav.Link href="login">INICIAR SESION</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                REGISTRO
              </Nav.Link>
            </Nav>
            
    
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}