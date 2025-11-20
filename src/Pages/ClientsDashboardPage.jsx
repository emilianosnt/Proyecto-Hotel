import React from 'react';
import ClientsTable from '../Components/CRUD/ClientsTable';
import '../CSS/Main.css';

const ClientsDashboardPage = () => {
  return (
    <div className="page-wrapper">
      <main className="contenedor-principal">
        <div className="container mt-5">
          <h1 className="text-center mb-4">Administración de Clientes</h1>
          <ClientsTable />
        </div>
      </main>
    </div>
  );
};

export default ClientsDashboardPage;
