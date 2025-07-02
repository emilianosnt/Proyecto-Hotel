import { Table, Button, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { URL_CLIENTES } from "./Constants/EndPoint.js";
import { Link, useNavigate } from "react-router-dom";

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

  const Borrar = async (id) => {
    try {
      if (confirm("¿Estás seguro de que querés eliminar este cliente?")) {
        await axios.delete(`${URL_CLIENTES}/${id}`);
        getClientes();
      }
    } catch (error) {
      console.error("Error al eliminar el cliente:", error);
      alert("Ocurrió un error al intentar eliminar el cliente.");
    }
  };

  return (
    <Container className="my-4">
      <h2 className="mb-4">Lista de Clientes</h2>

      <div className="d-flex justify-content-end mb-3">
        <Link to="/Create" className="btn btn-success btn-sm">
          Crear Cliente
        </Link>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>DNI</th>
            <th>Email</th>
            <th>Celular</th>
            <th>Personas</th>
            <th>Adultos</th>
            <th>Niños</th>
            <th>Habitación</th>
            <th>Acciones</th>
          </tr>
        </thead>

        {datos.map((cliente) => (
          <tbody key={cliente.id}>
            <tr>
              <td>{cliente.nombre}</td>
              <td>{cliente.dni}</td>
              <td>{cliente.email}</td>
              <td>{cliente.celular}</td>
              <td>{cliente.persons}</td>
              <td>{cliente.adults}</td>
              <td>{cliente.children}</td>
              <td>{cliente.room}</td>
              <td>
                <Link
                  to={`/edit/${cliente.id}`}
                  className="btn btn-primary btn-sm me-2"
                >
                  Editar
                </Link>
                <Link
                  to={`/view/${cliente.id}`}
                  className="btn btn-warning btn-sm me-2"
                >
                  Ver
                </Link>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => Borrar(cliente.id)}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </Container>
  );
};

export default Clients;
