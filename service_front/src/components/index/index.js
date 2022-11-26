import React from "react";
import { Container, Row, Card, Col, ListGroup } from "react-bootstrap";
import "../index/index.css";

export default class inicio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container id="container">
        <Row>
          <section class="hero">
            <div class="info">
              <h1 class="info-title">
                {" "}
                SERVICIOS <br />
                GENERALES
              </h1>
              <h3>¡Eatamos feliz de poder ayudarle!</h3>
              <p class="info-subtitle">
                
              </p>
              <button class="info-button" >Iniciar sesion</button>
            </div>
            <figure class="hero-image">
              <img
                src="https://markepymes.com/wp-content/uploads/2020/01/8-ideas-para-promocionar-tu-empresa-de-servicio-tecnico.jpg"
                alt="Dish of pasta with neapolitan sauce and vegetables"
              />
            </figure>
          </section>

          {/* Trajetas */}
          <h2 class="services-title">NUESTROS SERVICIOS</h2>
          <Row xs={1} md={3} className="g-4">
            <Col>
              <Card style={{ height: "100%" }}>
                <Card.Img
                  style={{ height: "70%" }}
                  variant="top"
                  src="https://images.unsplash.com/photo-1566417108845-5ba9c2f9ea1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                />
                <Card.Body>
                  <Card.Title>Electricidad</Card.Title>
                  <Card.Text>
          
                  </Card.Text>
                  <ListGroup >
                    <ListGroup.Item >-Mantenimiento: preventivo y correctivo </ListGroup.Item>
                    <ListGroup.Item>-Instalaciones</ListGroup.Item>
                    <ListGroup.Item>-Reparaciones</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card style={{ height: "100%" }}>
                <Card.Img
                  style={{ height: "70%" }}
                  variant="top"
                  src="https://st2.depositphotos.com/3931647/6806/v/600/depositphotos_68065251-stock-illustration-smart-home.jpg"
                />
                <Card.Body>
                  <Card.Title>Domotica</Card.Title>
                  <Card.Text>
                    
                  </Card.Text>
                  <ListGroup >
                    <ListGroup.Item >-Mantenimiento: preventivo y correctivo </ListGroup.Item>
                    <ListGroup.Item>-Instalaciones</ListGroup.Item>
                    <ListGroup.Item>-Reparaciones</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card style={{ height: "100%" }}>
                <Card.Img
                  style={{ height: "70%" }}
                  variant="top"
                  src="https://images.unsplash.com/photo-1496368077930-c1e31b4e5b44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                />
                <Card.Body>
                  <Card.Title>Sistema de seguridad </Card.Title>
                  <Card.Text>
            
                  </Card.Text>
                  <ListGroup >
                    <ListGroup.Item >-Mantenimiento: preventivo y correctivo </ListGroup.Item>
                    <ListGroup.Item>-Instalaciones</ListGroup.Item>
                    <ListGroup.Item>-Reparaciones</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>


          </Row>

          <section class="services">
            <h2 class="services-title">--------------------------------------------</h2>
            <div class="dishes">
              <figure class="dishes-image dishes-image__big">
                <img
                  src="https://images.unsplash.com/photo-1461175128502-8b13d90ee1ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt="video of pasta dishes being served"
                />
              </figure>
              <figure class="dishes-image">
                <img
                  src="https://images.unsplash.com/photo-1473308822086-710304d7d30c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
                  alt="bowl of vegetables with rice and avocado"
                />
              </figure>
              <figure class="dishes-image">
                <img
                  src="https://st2.depositphotos.com/1076504/7194/i/600/depositphotos_71949023-stock-photo-man-uses-tablet-pc.jpg"
                  alt="Avocado and egg toast"
                />
              </figure>
              <figure class="dishes-image">
                <img
                  src="https://st4.depositphotos.com/1203257/20053/i/450/depositphotos_200537884-stock-photo-caucasian-electrician-yellow-safety-hard.jpg"
                  alt="asparagus with tomato and butter"
                />
              </figure>
              <figure class="dishes-image">
                <img
                  src="https://st2.depositphotos.com/3508093/7606/i/450/depositphotos_76066841-stock-photo-security-consultant-fitting-security-camera.jpg"
                  alt="eggs and guacamole toast "
                />
              </figure>
            </div>
          </section>
          <section class="menu">
            <h2 class="menu-title">Equipo de trabajo</h2>
            <div class="plates">
              <figure class="plates-image">
                <img
                  src="https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-10-avatar-2754575_120521.png"
                  alt="pasta with neapolitan sauce and vegetables"
                />
              </figure>
              <figure class="plates-image">
                <img
                  src="https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-12-avatar-2754577_120517.png"
                  alt="pasta with broccoli and carrot"
                />
              </figure>
              <figure class="plates-image">
                <img
                  src="https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-11-avatar-2754576_120520.png"
                  alt="pesto pasta"
                />
              </figure>
              <figure class="plates-image">
                <img
                  src="https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-1-avatar-2754574_120513.png"
                  alt="pasta with avocado and corn"
                />
              </figure>
              <figure class="plates-image">
                <img
                  src="https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-4-avatar-2754580_120522.png"
                  alt="bowl of chicken, tomato and carrots"
                />
              </figure>
            </div>
          </section>
        </Row>
      </Container>
    );
  }
}
