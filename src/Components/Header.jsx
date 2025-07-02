import React from 'react';
import { Navbar, Nav, Container, NavDropdown, Form, Button } from 'react-bootstrap';
import { FaSearch, FaBell, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
       
    <Navbar expand="lg" bg="dark" variant="dark">
    <Container fluid>
      <Link to="/" className="navbar-brand">Hotel California</Link>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="me-auto">
          <Link to="/" className="nav-link">Inicio</Link>
          <NavDropdown title="Menú" id="navbarMenu">
            <Link to="/historial-clientes" className="dropdown-item">Historial de Clientes</Link>
            <Link to="/control-facturacion" className="dropdown-item">Reservar</Link>
             </NavDropdown>

        </Nav>
        <Nav className="ms-auto align-items-center">
          <NavDropdown title={<FaUser size={23} />} id="navbarUsuario" align="end">
           <Link to="/historial-clientes" className="dropdown-item">Iniciar sesión</Link>
          </NavDropdown>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
    </Navbar>
 
);
export default Header;
