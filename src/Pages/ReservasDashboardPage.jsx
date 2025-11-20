import ReservasTable from '../Components/CRUD/ReservasTable';
import '../CSS/Main.css';

const ReservasDashboardPage = () => {
  return (
    <div className="page-wrapper">
      <main className="contenedor-principal">
        <div className="container mt-5">
          <h1 className="text-center mb-4">Administración de Reservas</h1>
          <ReservasTable />
        </div>
      </main>
    </div>
  );
};

export default ReservasDashboardPage;
