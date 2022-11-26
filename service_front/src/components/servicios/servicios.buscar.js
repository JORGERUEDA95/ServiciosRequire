import React from 'react';
import { request } from '../helper/helper';
import { Container, Row } from 'react-bootstrap';
import './servicios.css';
import DataGrid from '../grid/grid';

const columns = [
  {
    dataField: "_id",
    text: "Product ID",
    hidden: true,
  },
  {
    dataField: "servicio",
    text: "Servicio",
  },
  {
    dataField: "nombre_tec",
    text: "Nombre tecnico",
  },
  {
    dataField: "apellido_tec",
    text: "Apellido tecnico",
  },
  {
    dataField: "telefono_tec",
    text: "Telefono tecnico",
  },
  {
    dataField: "email_tec",
    text: "Email tecnico",
  },

];

export default class ServiciosBuscar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [],
    };
  }
  componentDidMount(){
    this.getData();
  }

  getData(){
    request
      .get(this.props.url)
      .then((response) => {
        this.getState({rows:response.data})
      })
      .catch((error) => {
        console.log(error)
      });

  }

  render() {
    return (
      <Container id="servicios-buscar-container">
        <Row>
          <h1>Servicios</h1>
        </Row>
        <Row>
          <DataGrid url='/servicios'   columns={columns} />
        </Row>
      </Container>
    );
  }
}
