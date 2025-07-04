import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { LOGIN } from "../Routers/Router";
import "../CSS/Header.css";

const Header = () => {
  const [usuario, setUsuario] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const datosUsuario = localStorage.getItem("usuario-logeado");
    if (datosUsuario) {
      const user = JSON.parse(datosUsuario);
      console.log("usuario cargado en header:", user);
      setUsuario(JSON.parse(datosUsuario));
    }
  }, []);

  const cerrarSesion = () => {
    localStorage.removeItem("usuario-logeado");
    setUsuario(null);
    navigate(LOGIN);
  };

  const irALogin = () => {
    navigate(LOGIN);
  };

  return (
    <Navbar expand="lg" variant="dark" className="Header">
      <Container fluid className="position-relative">
        <Nav className="navbar-brand mx-auto brand-centered">
          Hotel California
        </Nav>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Inicio
            </Link>
          </Nav>

          <Nav className="ms-auto align-items-center">
            {usuario ? (
              <>
                <span className="nav-link">Hola, {usuario.username}</span>
                <span
                  className="nav-link"
                  onClick={cerrarSesion}
                  style={{ cursor: "pointer" }}
                >
                  Cerrar sesión
                </span>
              </>
            ) : (
              <span
                className="nav-link"
                onClick={irALogin}
                style={{ cursor: "pointer" }}
              >
                Iniciar sesión
              </span>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};





export default Header;
