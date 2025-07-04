import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../Components/Header.css';

const Header = () => (
  <Navbar expand="lg" bg="dark" variant="dark" className="Header">
    <Container fluid className="position-relative">

      <Link to="/home" className="navbar-brand mx-auto brand-centered">
        Hotel California
      </Link>

      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">

        <Nav className="me-auto">
          <Link to="/" className="nav-link">Inicio</Link>
          <NavDropdown title="Menú" id="navbarMenu">
            <Link to="/Clients" className="dropdown-item">Historial de Clientes</Link>
            <Link to="/Create" className="dropdown-item">Reservar</Link>
          </NavDropdown>
        </Nav>

        <Nav className="ms-auto align-items-center">
          <NavDropdown title={<FaUser size={23} />} id="navbarUsuario" align="end">
            <Link to="/login" className="dropdown-item">Iniciar sesión</Link>
          </NavDropdown>
        </Nav>

      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
