import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./Components/Header"; // Asegúrate de importar tu Header
import Footer from "./Components/Footer"; // Asegúrate de importar tu Footer
import Home from "./Pages/Home";
import Clients from "./Pages/ClientsPage";
import LoginPage from "./Pages/LoginPage";
import ViewPage from "./Pages/ViewPage";
import EditPage from "./Pages/EditPage";
import CreatePage from "./Pages/CreatePage";
import { HOME, CLIENTS, LOGIN, VIEW, EDITAR, CREAR } from "./Routers/router";

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Header />
        <main className="contenedor-principal">
          <Routes>
            <Route path={HOME} element={<Home />} />
            <Route path={CLIENTS} element={<Clients />} />
            <Route path={LOGIN} element={<LoginPage />} />
            <Route path={VIEW} element={<ViewPage />} />
            <Route path={EDITAR} element={<EditPage />} />
            <Route path={CREAR} element={<CreatePage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;