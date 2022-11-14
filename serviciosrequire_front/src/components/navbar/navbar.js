//import  Dropdown  from '@restart/ui/esm/Dropdown';
import React from "react";
import { Container, Navbar, Nav, DropdownButton,Dropdown,Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import './navbar.css';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Navbar id="navbar" bg="" variant="dark">
        <Container>
          <Navbar.Brand href="index">
            Servicios Require<span id="usuario-sub-bram"></span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/*<Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>*/}
            </Nav>
            <Nav>
              <Nav.Link href="index">INICIO</Nav.Link>
              <Nav.Link href="#deets">SERVICIOS</Nav.Link>
              <Nav.Link href="login">INICIAR SESION</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                REGISTRO
              </Nav.Link>
            </Nav>
            
            <DropdownButton title="Usuario">
              <Dropdown.Header id="dropdown-header">
                <Row>
                  <FontAwesomeIcon icon={faUserCircle} />
                </Row>
                <Row>#USUARIO#</Row>
              </Dropdown.Header>
              <Dropdown.Divider />
              <Dropdown.Item href="#/action-1">Cerrar sesion</Dropdown.Item>
              {/*<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>*/}
            </DropdownButton>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}