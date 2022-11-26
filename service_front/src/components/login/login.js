import React from "react";
import axios from 'axios';
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
import app from '../../app.json';
import "./login.css";
import { isNull } from 'util';
import Cookies from "universal-cookie";
import { calculaExracionSesion } from "../helper/helper";
import Loading from '../loading/loading';

const cookies = new Cookies();

const { APIHOST } = app;

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Loading: false,
      usuario: '',
      pass: '',
    };
  }

  iniciarSesion(){
    this.setState({ loading: true});
    axios.post(`${APIHOST}/usuarios/login`,{
      usuario: this.state.usuario,
      pass: this.state.pass,
    })
    .then((response)=>{
      if (isNull(response.data.token)){
        alert('Usuario y/o contraseña invalida');
      }else{
        cookies.set('_s', response.data.token, {
          path: '/',
          expires: calculaExracionSesion(),
        });
        this.props.history.push(window.open('/servicios'));
        
      }
      this.setState({ loading: false });
    })
    .catch((err)=>{
      console.log(err);
      this.setState({ loading:false});
    });

    

  }

  render() {
    return (
      <Container id="login">
        <Loading show={this.state.loading}/>
        <Row xs={1} md={2} className="g-4">
          <Col>
            <Card className="shadow-lg">
              <Card.Header
                className="p-3"
                style={{ backgroundColor: "#03045e" }}
              >
                <h4 style={{ color: "#ffffff" }}>Inicio de sesion</h4>
              </Card.Header>
              <Card.Body style={{ backgroundColor: "#f7f5f0" }}>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control
                      onChange={(e) =>
                        this.setState({ usuario: e.target.value })
                      }
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Contrasena</Form.Label>
                    <Form.Control
                      type="password"
                      onChange={(e) => this.setState({ pass: e.target.value })}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3"></Form.Group>
                  <Form.Group className="mb-3">
                    <Button variant="primary" onClick={() => { this.iniciarSesion();}}>
                      Iniciar sesion
                    </Button>
                    <Card.Text>
                      <a href="/">No tengo una cuenta</a>
                    </Card.Text>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card.Img
              style={{ borderRadius: "10%", width: "100%" }}
              variant="top"
              src="https://images.unsplash.com/photo-1530546171585-cc042ea5d7ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=936&q=80"
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
