import { Button, Form, Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { URL_CLIENTES } from '../Constants/EndPoint.js';
import { useParams, useNavigate } from 'react-router-dom';
import { CLIENTS } from '../../Routers/Router.js';


const EditTable = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [datos, setDatos] = useState({
    nombre: '',
    dni: '',
    email: '',
    celular: '',
    adults: 0,
    children: 0,
    persons: 0,
    room: ''
  });

  // Obtener cliente al montar
  useEffect(() => {
    const getCliente = async () => {
      try {
        const response = await axios.get(`${URL_CLIENTES}/${id}`);
        setDatos(response.data);
      } catch (error) {
        console.error("Error al obtener el cliente:", error);
      }
    };
    getCliente();
  }, [id]);

  // Recalcula total personas cada vez que cambian adultos o niños
  useEffect(() => {
    const total = parseInt(datos.adults) + parseInt(datos.children);
    setDatos(prev => ({ ...prev, persons: isNaN(total) ? 0 : total }));
  }, [datos.adults, datos.children]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const numericFields = ['adults', 'children', 'persons'];
    setDatos({
      ...datos,
      [name]: numericFields.includes(name) ? parseInt(value) || 0 : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!datos.nombre || !datos.dni || !datos.room) {
      alert('Por favor completa todos los campos obligatorios.');
      return;
    }

    try {
      const response = await axios.put(`${URL_CLIENTES}/${id}`, datos);
      if (response) {
        navigate(CLIENTS);
      }
    } catch (error) {
      console.error("Error al actualizar el cliente:", error);
      alert('Error al actualizar el cliente. Intenta de nuevo.');
    }
  };

  return (
    <Container className="my-4">
      <h2>Editar Cliente</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="nombre"
            value={datos.nombre}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>DNI</Form.Label>
          <Form.Control
            type="text"
            name="dni"
            value={datos.dni}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={datos.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Celular</Form.Label>
          <Form.Control
            type="text"
            name="celular"
            value={datos.celular}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Adultos</Form.Label>
          <Form.Control
            type="number"
            name="adults"
            min="0"
            value={datos.adults}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Niños</Form.Label>
          <Form.Control
            type="number"
            name="children"
            min="0"
            value={datos.children}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Total Personas</Form.Label>
          <Form.Control
            type="number"
            name="persons"
            value={datos.persons}
            readOnly
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Habitación Asignada</Form.Label>
          <Form.Control
            type="text"
            name="room"
            value={datos.room}
            onChange={handleChange}
            placeholder="Nombre o número de habitación"
          />
        </Form.Group>

        <Button type="submit" variant="primary">Guardar Cambios</Button>{' '}
        <Button variant="secondary" onClick={() => navigate(CLIENTS)}>Cancelar</Button>
      </Form>
    </Container>
  );
};

export default EditTable;
