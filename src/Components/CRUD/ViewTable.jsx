import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { URL_CLIENTES } from '../Constants/EndPoint.js';
import { useParams } from 'react-router-dom';
import Header from '../Header.jsx';

const ViewTable = () => {
const { id } = useParams();
  const [cliente, setCliente] = useState({});

  useEffect(() => {
    const getCliente = async () => {
      try {
        const response = await axios.get(`${URL_CLIENTES}/${id}`);
        setCliente(response.data);
      } catch (error) {
        console.error("Error al obtener el cliente:", error);
      }
    };
    getCliente();
  }, [id]);


  
  return (
    <>
      <Header />
      <Container className="my-5">
        <Card>
          <Card.Header>
            <h4>Información del Cliente</h4>
          </Card.Header>
          <Card.Body>
            <Row className="mb-3">
              <Col><strong>Nombre:</strong></Col>
              <Col>{cliente.nombre}</Col>
            </Row>
            <Row className="mb-3">
              <Col><strong>DNI:</strong></Col>
              <Col>{cliente.dni}</Col>
            </Row>
            <Row className="mb-3">
              <Col><strong>Email:</strong></Col>
              <Col>{cliente.email}</Col>
            </Row>
            <Row className="mb-3">
              <Col><strong>Celular:</strong></Col>
              <Col>{cliente.celular}</Col>
            </Row>
            <Row className="mb-3">
              <Col><strong>Adultos:</strong></Col>
              <Col>{cliente.adults}</Col>
            </Row>
            <Row className="mb-3">
              <Col><strong>Niños:</strong></Col>
              <Col>{cliente.children}</Col>
            </Row>
            <Row className="mb-3">
              <Col><strong>Total Personas:</strong></Col>
              <Col>{cliente.persons}</Col>
            </Row>
            <Row className="mb-3">
              <Col><strong>Habitación Asignada:</strong></Col>
              <Col>{cliente.room}</Col>
            </Row>
          </Card.Body>
        </Card>

        <div className="mt-4">
          <Button variant="primary" href="/clients">
            Volver a la lista de clientes
          </Button>
        </div>
      </Container>
    </>
  );
};

export default ViewTable;
