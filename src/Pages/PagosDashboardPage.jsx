import PagosTable from '../Components/CRUD/PagosTable';
import '../CSS/Main.css';

const PagosDashboardPage = () => {
  return (
    <div className="page-wrapper">
      <main className="contenedor-principal">
        <div className="container mt-5">
          <h1 className="text-center mb-4">Administración de Pagos</h1>
          <PagosTable />
        </div>
      </main>
    </div>
  );
};

export default PagosDashboardPage;
