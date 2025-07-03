import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import axios from "axios";
import { URL_CLIENTES } from "../Constants/EndPoint.js";
import { useNavigate } from "react-router-dom";
import RoomsTable from "./RoomsTable";

const initialRoomsData = [
  { id: 1, name: "Habitacion 1", doubleBed: 1, singleBed: 2, isOccupied: false },
  { id: 2, name: "Habitacion 2", doubleBed: 1, singleBed: 2, isOccupied: false },
  { id: 3, name: "Habitacion 3", doubleBed: 1, singleBed: 0, isOccupied: false },
  { id: 4, name: "Habitacion 4", doubleBed: 1, singleBed: 1, isOccupied: false },
  { id: 5, name: "Habitacion 5", doubleBed: 1, singleBed: 2, isOccupied: false },
  { id: 6, name: "Habitacion 6", doubleBed: 1, singleBed: 3, isOccupied: false },
  { id: 7, name: "Habitacion 7", doubleBed: 1, singleBed: 3, isOccupied: false },
  { id: 8, name: "Habitacion 8", doubleBed: 0, singleBed: 4, isOccupied: false },
  { id: 9, name: "Habitacion 9", doubleBed: 1, singleBed: 4, isOccupied: false },
  { id: 10, name: "Habitacion 10", doubleBed: 1, singleBed: 4, isOccupied: false },
  { id: 11, name: "Habitacion 11", doubleBed: 1, singleBed: 4, isOccupied: false },
  { id: 12, name: "Habitacion 12", doubleBed: 0, singleBed: 5, isOccupied: false },
];

const ClientsTable = () => {
  const navigate = useNavigate();

  const [rooms, setRooms] = useState(() => {
    const saved = localStorage.getItem("rooms");
    return saved ? JSON.parse(saved) : initialRoomsData;
  });

  const [cliente, setCliente] = useState({
    nombre: "",
    dni: "",
    email: "",
    celular: "",
    adults: 0,
    children: 0,
    persons: 0,
    room: "",
  });

  const handleChange = (e) => {
    setCliente({
      ...cliente,
      [e.target.name]:
        e.target.type === "number" ? parseInt(e.target.value) || 0 : e.target.value,
    });
  };

  const assignRoom = () => {
    const totalPeople = cliente.adults + cliente.children;
    const room = rooms.find(
      (r) => !r.isOccupied && r.doubleBed * 2 + r.singleBed >= totalPeople
    );

    if (room) {
      const updatedRooms = rooms.map((r) =>
        r.id === room.id ? { ...r, isOccupied: true } : r
      );
      setRooms(updatedRooms);
      localStorage.setItem("rooms", JSON.stringify(updatedRooms));
      setCliente({
        ...cliente,
        persons: totalPeople,
        room: room.name,
      });
      alert(`Se asignó la habitación: ${room.name}`);
    } else {
      alert("No hay habitaciones disponibles.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(URL_CLIENTES, cliente);
      if (response) {
        navigate("/clients");
      }
    } catch (error) {
      console.error(error);
      alert("Error al crear el cliente.");
    }
  };

  return (
    <Container className="mt-5">
      <h2>Asignación y Registro de Cliente</h2>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="nombre"
            value={cliente.nombre}
            onChange={handleChange}
            placeholder="Ingresa tu nombre"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>DNI</Form.Label>
          <Form.Control
            type="text"
            name="dni"
            value={cliente.dni}
            onChange={handleChange}
            placeholder="Ingresa tu DNI"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={cliente.email}
            onChange={handleChange}
            placeholder="Ingresa tu email"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Celular</Form.Label>
          <Form.Control
            type="text"
            name="celular"
            value={cliente.celular}
            onChange={handleChange}
            placeholder="Ingresa tu celular"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Adultos</Form.Label>
          <Form.Control
            type="number"
            name="adults"
            value={cliente.adults}
            onChange={handleChange}
            min={0}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Niños</Form.Label>
          <Form.Control
            type="number"
            name="children"
            value={cliente.children}
            onChange={handleChange}
            min={0}
          />
        </Form.Group>

        <Button variant="primary" type="button" onClick={assignRoom}>
          Asignar Habitación
        </Button>

        <Form.Group className="mb-3 mt-3">
          <Form.Label>Habitación Asignada</Form.Label>
          <Form.Control
            type="text"
            name="room"
            value={cliente.room}
            readOnly
            placeholder="Habitación asignada"
          />
        </Form.Group>

        <Button variant="success" type="submit">
          Guardar Cliente
        </Button>
      </Form>

      <hr className="my-4" />
      <RoomsTable />

    </Container>
  );
};

export default ClientsTable;
