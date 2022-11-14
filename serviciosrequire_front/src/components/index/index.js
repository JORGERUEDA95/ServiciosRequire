import React from "react";
import { Container } from "react-bootstrap";
import '../index/index.css';

export default class inicio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container id="login-container">
        <section class="hero">
          <div class="info">
            <h1 class="info-title">
              {" "}
              SERVIOS <br />
              GENERALES
            </h1>
            <h3>¡Estoy feliz de poder ayudarle!</h3>
            <p class="info-subtitle">
              Los clientes leales no sólo regresan, no sólo te recomiendan,
              insisten en que sus amigos hagan negocios contigo.
            </p>
            <button class="info-button">Book a table</button>
          </div>
          <figure class="hero-image">
            <img
              src="https://markepymes.com/wp-content/uploads/2020/01/8-ideas-para-promocionar-tu-empresa-de-servicio-tecnico.jpg"
              alt="Dish of pasta with neapolitan sauce and vegetables"
            />
          </figure>
        </section>
      </Container>
    );
  }
}
