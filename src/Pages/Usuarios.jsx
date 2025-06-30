// Usuarios.js
import React from 'react';
import "../CSS/usuarios.css";

function Usuarios() {
  // Datos del usuario (simulados)
  const usuario = {
    id: 1,
    numeroHabitacion: 101,
    dni: '12345678',
    direccion: 'Calle 123',
    telefono: '1234567890',
    mail: 'juan@example.com',
    nombre: 'Juan Pérez'
  };

  return (
    <div className="contenedor">

      <header className="cabecera">
        <h1>Hotel California</h1>
      </header>
      <main className="contenido contenedor-tabla">
        <div className="subtitulo">
          <h2>Datos Usuario: {usuario.nombre}</h2>
          <div className="botones-acciones">
            <button className="boton-accion">Editar</button>
            <button className="boton-accion">Borrar</button>
          </div>
        </div>
        <table className="tabla-datos">
          <tbody>
            <tr>
              <th>ID:</th>
              <td>{usuario.id}</td>
            </tr>
            <tr>
              <th>Número de habitación:</th>
              <td>{usuario.numeroHabitacion}</td>
            </tr>
            <tr>
              <th>DNI:</th>
              <td>{usuario.dni}</td>
            </tr>
            <tr>
              <th>Dirección:</th>
              <td>{usuario.direccion}</td>
            </tr>
            <tr>
              <th>Teléfono:</th>
              <td>{usuario.telefono}</td>
            </tr>
            <tr>
              <th>Mail:</th>
              <td>{usuario.mail}</td>
            </tr>
          </tbody>
        </table>
        <button className="boton-volver">Volver</button>
      </main>
    </div>
  );
}

export default Usuarios;