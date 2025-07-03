import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

const RoomsTable = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("rooms");
    if (saved) {
      setRooms(JSON.parse(saved));
    }
  }, []);

  return (
    <>
      <h3>Habitaciones</h3>
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
          {rooms.map((r) => (
            <tr
              key={r.id}
              style={{ backgroundColor: r.isOccupied ? "#fdd" : undefined }}
            >
              <td>{r.id}</td>
              <td>{r.name}</td>
              <td>{r.doubleBed}</td>
              <td>{r.singleBed}</td>
              <td>{r.doubleBed * 2 + r.singleBed}</td>
              <td>{r.isOccupied ? "Sí" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default RoomsTable;
