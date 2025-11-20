import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Clients from "./Pages/ClientsPage";
import LoginPage from "./Pages/LoginPage";
import ViewPage from "./Pages/ViewPage";
import EditPage from "./Pages/EditPage";
import CreatePage from "./Pages/CreatePage";
import ReservasDashboardPage from "./Pages/ReservasDashboardPage";
import ClientsDashboardPage from "./Pages/ClientsDashboardPage";
import PagosDashboardPage from "./Pages/PagosDashboardPage";
import HabitacionesDashboardPage from "./Pages/HabitacionesDashboardPage";
import { HOME, CLIENTS, LOGIN, VIEW, EDITAR, CREAR, USUARIO, ADMIN, RESERVAS_DASHBOARD, CLIENTS_DASHBOARD, PAGOS_DASHBOARD, HABITACIONES_DASHBOARD, HABITACIONES_CLIENTE} from "./Routers/Router";
import AdminPage from "./Pages/AdminPage";
import AdminLayoutPage from "./Pages/AdminLayoutPage";
import UsuarioPage from "./Pages/UsuarioPage";
import HabitacionesClientePage from "./Pages/HabitacionesClientePage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <main className="contenedor-principal">
          <Routes>
            <Route path={HOME} element={<Home />} />
            <Route path={CLIENTS} element={<Clients />} />
            <Route path={LOGIN} element={<LoginPage />} />
            <Route path={VIEW} element={<ViewPage />} />
            <Route path={EDITAR} element={<EditPage />} />
            <Route path={CREAR} element={<CreatePage />} />
            <Route path={HABITACIONES_CLIENTE} element={<HabitacionesClientePage />} />
            <Route element={<AdminLayoutPage />}>
             <Route index path={ADMIN} element={<AdminPage />} />
             <Route path={USUARIO} element={<UsuarioPage />} />
             <Route path={RESERVAS_DASHBOARD} element={<ReservasDashboardPage />} />
             <Route path={CLIENTS_DASHBOARD} element={<ClientsDashboardPage />} />
             <Route path={PAGOS_DASHBOARD} element={<PagosDashboardPage />} />
             <Route path={HABITACIONES_DASHBOARD} element={<HabitacionesDashboardPage />} />
            </Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;