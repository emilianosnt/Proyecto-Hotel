import { RESERVAS_DASHBOARD, CLIENTS_DASHBOARD, HABITACIONES_DASHBOARD, PAGOS_DASHBOARD } from '../Routers/Router';
import { useNavigate } from 'react-router-dom';
import '../CSS/Admin.css';
const Admin = () => {
  const navigate = useNavigate();
  const dashboardItems = [
    {
      to: RESERVAS_DASHBOARD,
      title: 'Administrar Reservas',
      description: 'Gestiona las reservas de los clientes, crea nuevas y actualiza las existentes.',
      icon: 'book_online',
      className: 'reservas'
    },
    {
      to: CLIENTS_DASHBOARD,
      title: 'Administrar Clientes',
      description: 'Consulta, edita y gestiona la información de los clientes del hotel.',
      icon: 'group',
      className: 'clientes'
    },
    {
      to: HABITACIONES_DASHBOARD,
      title: 'Administrar Habitaciones',
      description: 'Gestiona las habitaciones, sus tipos, precios y disponibilidad.',
      icon: 'bed',
      className: 'habitaciones'
    },
    {
      to: PAGOS_DASHBOARD,
      title: 'Administrar Pagos',
      description: 'Registra y gestiona los pagos asociados a las reservas realizadas.',
      icon: 'payments',
      className: 'pagos'
    }
  ];

  return (
    <div className="background-admin">
      <main>
        <section className="admin-dashboard-section">
          <div className="admin-container">
            <div className="admin-header-text">
              <h2 className="admin-title">Panel de Administración</h2>
              <p className="admin-description">Sección principal para gestionar el contenido.</p>
            </div>
            <div className="admin-grid">
              {dashboardItems.map((item, index) => (
                <div key={index} className={`admin-card-wrapper ${item.className}`}>
                  <button className="admin-card-button" onClick={() => navigate(item.to)}>
                    <div className="admin-card">
                      <div className="admin-card-content">
                        <div className="admin-icon-wrapper">
                          <span className="material-symbols-outlined admin-icon">{item.icon}</span>
                        </div>
                        <h3 className="admin-card-title">{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Admin