import { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { RESERVAS_DASHBOARD, CLIENTS_DASHBOARD, HABITACIONES_DASHBOARD, PAGOS_DASHBOARD, ADMIN, LOGIN } from "../Routers/router";
import '../CSS/Sidebar.css';

const Sidebar = ({ isSidebarVisible }) => {
  const [usuarioLogeado, setUsuarioLogeado] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const usuario = localStorage.getItem('usuario-logeado');
    if (usuario) {
      setUsuarioLogeado(JSON.parse(usuario));
    } else {
      setUsuarioLogeado(null);
    }
  }, [location]);

  const sidebarItems = [
    {
      to: ADMIN,
      text: 'Administración',
      icon: 'dashboard'
    },
    {
      to: RESERVAS_DASHBOARD,
      text: 'Reservas',
      icon: 'book_online'
    },
    {
      to: CLIENTS_DASHBOARD,
      text: 'Clientes',
      icon: 'group'
    },
    {
      to: HABITACIONES_DASHBOARD,
      text: 'Habitaciones',
      icon: 'bed'
    },
    {
      to: PAGOS_DASHBOARD,
      text: 'Pagos',
      icon: 'payments'
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem('usuario-logeado');
    navigate(LOGIN);
    alert('Sesión cerrada exitosamente.');
  };

  return (
    <aside className={`sidebar ${isSidebarVisible ? 'sidebar-visible' : ''}`}>
      <nav className="sidebar-nav">
        {sidebarItems.map((item, index) => (
          <NavLink key={index} to={item.to} className="sidebar-link" end>
            <span className="material-symbols-outlined">{item.icon}</span>
            <span className="sidebar-link-text">{item.text}</span>
          </NavLink>
        ))}
        {usuarioLogeado && (
          <button onClick={handleLogout} className="sidebar-button">
            <span className="material-symbols-outlined">logout</span>
            <span className="sidebar-link-text">Cerrar Sesión</span>
          </button>
        )}
      </nav>
    </aside>
  );
};

export default Sidebar;
