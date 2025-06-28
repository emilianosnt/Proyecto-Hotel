import { useState } from 'react';
import { Button, Container, Form, Table, Alert } from 'react-bootstrap';
import axios from 'axios';
import { URL_CLIENTES } from '../Constants/EndPoint.js';
import { useNavigate } from 'react-router-dom';

const initialRoomsData = [
  { id: 1, name: "Habitacion 1", beds: 2, doubleBed: 1, singleBed: 2, isOccupied: false },
  { id: 2, name: "Habitacion 2", beds: 2, doubleBed: 1, singleBed: 2, isOccupied: false },
  { id: 3, name: "Habitacion 3", beds: 1, doubleBed: 1, singleBed: 0, isOccupied: false },
  { id: 4, name: "Habitacion 4", beds: 2, doubleBed: 1, singleBed: 1, isOccupied: false },
  { id: 5, name: "Habitacion 5", beds: 3, doubleBed: 1, singleBed: 2, isOccupied: false },
  { id: 6, name: "Habitacion 6", beds: 4, doubleBed: 1, singleBed: 3, isOccupied: false },
  { id: 7, name: "Habitacion 7", beds: 4, doubleBed: 1, singleBed: 3, isOccupied: false },
  { id: 8, name: "Habitacion 8", beds: 4, doubleBed: 0, singleBed: 4, isOccupied: false },
  { id: 9, name: "Habitacion 9", beds: 5, doubleBed: 1, singleBed: 4, isOccupied: false },
  { id: 10, name: "Habitacion 10", beds: 5, doubleBed: 1, singleBed: 4, isOccupied: false },
  { id: 11, name: "Habitacion 11", beds: 5, doubleBed: 1, singleBed: 4, isOccupied: false },
  { id: 12, name: "Habitacion 12", beds: 5, doubleBed: 0, singleBed: 5, isOccupied: false },
];

const RoomAssigner = () => {
  const navigate = useNavigate();

  // → Inicializa desde LocalStorage si existe, o desde el array original
  const [rooms, setRooms] = useState(() => {
    const saved = localStorage.getItem('rooms');
    return saved ? JSON.parse(saved) : initialRoomsData;
  });

  const [formData, setFormData] = useState({ adults: 0, children: 0 });
  const [assignedRoom, setAssignedRoom] = useState(null);
  const [message, setMessage] = useState('');

  const initialClientState = {
    nombre: '',
    dni: '',
    email: '',
    celular: '',
    persons: '',
    adults: '',
    children: '',
    room: '',
  };

  const [cliente, setCliente] = useState(initialClientState);

  // ---------- ROOM ASSIGNMENT ----------
  const handleRoomInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: parseInt(e.target.value) || 0,
    });
    setMessage('');
    setAssignedRoom(null);
  };

  const handleAssignRoom = (e) => {
    e.preventDefault();

    const totalPeople = formData.adults + formData.children;

    if (totalPeople <= 0) {
      setMessage('Por favor, ingresa al menos 1 persona.');
      setAssignedRoom(null);
      return;
    }

    const availableRooms = rooms
      .filter(room => !room.isOccupied)
      .sort((a, b) => {
        const totalBedsA = a.doubleBed * 2 + a.singleBed;
        const totalBedsB = b.doubleBed * 2 + b.singleBed;
        return totalBedsA - totalBedsB;
      });

    const suitableRoom = availableRooms.find(room => {
      const totalBeds = room.doubleBed * 2 + room.singleBed;
      return totalBeds >= totalPeople;
    });

    if (suitableRoom) {
      setAssignedRoom(suitableRoom);
      setMessage(`¡Éxito! Se ha asignado ${suitableRoom.name}.`);

      const updatedRooms = rooms.map(room =>
        room.id === suitableRoom.id
          ? { ...room, isOccupied: true }
          : room
      );

      setRooms(updatedRooms);
      localStorage.setItem('rooms', JSON.stringify(updatedRooms));

      setCliente({
        ...cliente,
        adults: formData.adults,
        children: formData.children,
        persons: totalPeople,
        room: suitableRoom.name,
      });

      setFormData({ adults: 0, children: 0 });
    } else {
      setAssignedRoom(null);
      setMessage('No hay habitaciones disponibles que cumplan con los requisitos.');
    }
  };

  // ---------- CLIENT CREATION ----------
  const handleClientChange = (e) => {
    const { name, value } = e.target;
    const numberFields = ['persons', 'adults', 'children'];
    setCliente({
      ...cliente,
      [name]: numberFields.includes(name) ? parseInt(value) || 0 : value,
    });
  };

  const handleClientSubmit = async (e) => {
    e.preventDefault();

    if (!cliente.nombre || !cliente.dni || !cliente.room) {
      alert('Por favor completa todos los campos obligatorios');
      return;
    }

    try {
      const response = await axios.post(URL_CLIENTES, cliente);
      if (response) {
        navigate('/home');
      }
    } catch (error) {
      console.error('Error al crear el cliente:', error);
      alert('Error al crear el cliente. Intenta de nuevo.');
    }
  };

  return (
    <Container className="my-4">
      <h2 className="mb-4">Asignación de Habitación y Registro de Cliente</h2>

      {/* ASIGNACIÓN DE HABITACIÓN */}
      <Form onSubmit={handleAssignRoom}>
        <Form.Group className="mb-3" controlId="formAdults">
          <Form.Label>Adultos</Form.Label>
          <Form.Control
            type="number"
            name="adults"
            min="0"
            value={formData.adults}
            onChange={handleRoomInputChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formChildren">
          <Form.Label>Niños</Form.Label>
          <Form.Control
            type="number"
            name="children"
            min="0"
            value={formData.children}
            onChange={handleRoomInputChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Buscar y Asignar Habitación
        </Button>
      </Form>

      {message && (
        <Alert variant={assignedRoom ? 'success' : 'danger'} className="mt-3">
          {message}
        </Alert>
      )}

      {assignedRoom && (
        <div className="mt-4 p-3 border rounded bg-light">
          <h5>Habitación Asignada</h5>
          <p><strong>Nombre:</strong> {assignedRoom.name}</p>
          <p><strong>Camas dobles:</strong> {assignedRoom.doubleBed}</p>
          <p><strong>Camas simples:</strong> {assignedRoom.singleBed}</p>
          <p><strong>Total camas:</strong> {assignedRoom.doubleBed * 2 + assignedRoom.singleBed}</p>
        </div>
      )}

      <hr className="my-4" />

      {/* FORMULARIO DE CLIENTE */}
      <h3>Formulario de Cliente</h3>
      <Form onSubmit={handleClientSubmit}>
        <Form.Group className="mb-3" controlId="formNombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="nombre"
            value={cliente.nombre}
            onChange={handleClientChange}
            placeholder="Ingresa tu nombre"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDni">
          <Form.Label>DNI</Form.Label>
          <Form.Control
            type="text"
            name="dni"
            value={cliente.dni}
            onChange={handleClientChange}
            placeholder="Ingresa tu DNI"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={cliente.email}
            onChange={handleClientChange}
            placeholder="Ingresa tu email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCelular">
          <Form.Label>Celular</Form.Label>
          <Form.Control
            type="text"
            name="celular"
            value={cliente.celular}
            onChange={handleClientChange}
            placeholder="Ingresa tu celular"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPersons">
          <Form.Label>Cantidad de Personas</Form.Label>
          <Form.Control
            type="number"
            name="persons"
            value={cliente.persons}
            onChange={handleClientChange}
            placeholder="Total personas"
            readOnly
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAdults">
          <Form.Label>Adultos</Form.Label>
          <Form.Control
            type="number"
            name="adults"
            value={cliente.adults}
            onChange={handleClientChange}
            placeholder="Cantidad de adultos"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formChildren">
          <Form.Label>Niños</Form.Label>
          <Form.Control
            type="number"
            name="children"
            value={cliente.children}
            onChange={handleClientChange}
            placeholder="Cantidad de niños"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formRoom">
          <Form.Label>Habitación Asignada</Form.Label>
          <Form.Control
            type="text"
            name="room"
            value={cliente.room}
            onChange={handleClientChange}
            placeholder="Nombre o número de habitación"
          />
        </Form.Group>

        <Button variant="success" type="submit">
          Guardar Cliente
        </Button>
      </Form>

      <hr className="my-4" />
      <h3>Estado de Habitaciones</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Camas Dobles</th>
            <th>Camas Simples</th>
            <th>Total Camas</th>
            <th>Ocupada</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map(room => (
            <tr key={room.id} style={{ backgroundColor: room.isOccupied ? '#fdd' : undefined }}>
              <td>{room.id}</td>
              <td>{room.name}</td>
              <td>{room.doubleBed}</td>
              <td>{room.singleBed}</td>
              <td>{room.doubleBed * 2 + room.singleBed}</td>
              <td>{room.isOccupied ? 'Sí' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default RoomAssigner;
