import { Table, Button, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { URL_CLIENTES } from "./Constants/EndPoint.js";
import { Link, useNavigate } from "react-router-dom";
import RoomsTable from "./CRUD/RoomsTable.jsx";
import "../CSS/Users.css";

const Clients = () => {
  const [datos, setDatos] = useState([]);
  const navigate = useNavigate();

  const getClientes = async () => {
    try {
      const response = await axios.get(URL_CLIENTES);
      setDatos(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error al obtener los clientes:", error);
    }
  };

  useEffect(() => {
    getClientes();
  }, []);

  const Borrar = async (cliente) => {
    try {
      if (confirm("¿Estás seguro de que querés eliminar este cliente?")) {
        await axios.delete(`${URL_CLIENTES}/${cliente.id}`);

        if (cliente.room) {
          releaseRoomByName(cliente.room);
        }

        getClientes();
      }
    } catch (error) {
      console.error("Error al eliminar el cliente:", error);
      alert("Ocurrió un error al intentar eliminar el cliente.");
    }
  };

  const releaseRoomByName = (roomName) => {
    const saved = localStorage.getItem("rooms");
    if (saved) {
      const rooms = JSON.parse(saved);
      const updatedRooms = rooms.map((r) =>
        r.name === roomName ? { ...r, isOccupied: false } : r
      );
      localStorage.setItem("rooms", JSON.stringify(updatedRooms));
    }
  };

  return (
    <div className="contenedor">
      <main className="contenido contenedor-tabla">
        <Container className="my-4">
          <h2 className="mb-4">Lista de Clientes</h2>

          <div className="d-flex justify-content-end mb-3">
            <Link to="/Create" className="btn btn-success btn-sm">
              Crear Cliente
            </Link>
          </div>

          <Table striped bordered hover className="tabla-datos">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>DNI</th>
                <th>Email</th>
                <th>Habitación</th>
                <th>Acciones</th>
              </tr>
            </thead>

            <tbody>
              {datos.map((cliente) => (
                <tr key={cliente.id}>
                  <td>{cliente.nombre}</td>
                  <td>{cliente.dni}</td>
                  <td>{cliente.email}</td>
                  <td>{cliente.room}</td>
                  <td>
                    <div>
                      <Link
                        to={`/edit/${cliente.id}`}
                        className="boton-editar btn-sm me-2 boton-accion"
                      >
                        Editar
                      </Link>
                      <Link
                        to={`/view/${cliente.id}`}
                        className="boton-ver btn-sm me-2 boton-accion"
                      >
                        Ver
                      </Link>
                      <button
                        className="boton-elimiar btn-sm me-2 boton-accion"
                        onClick={() => Borrar(cliente)}
                      >
                        Eliminar
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
        <button
          className="boton-volver"
          onClick={() => navigate(-1)} // vuelve a la página anterior
        >
          Volver
        </button>
        <RoomsTable />
      </main>
    </div>
  );
};

export default Clients;
