import Home from "./Pages/Home";
import Clients from "./Pages/ClientsPage";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import {HOME, CLIENTS, LOGIN, VIEW, EDITAR, CREAR} from "./Routers/Router";

import LoginPage from "./Pages/LoginPage";
import ViewPage from "./Pages/ViewPage";
import EditPage from "./Pages/EditPage";
import CreatePage from "./Pages/CreatePage";

function App() {
  

  return (


  <BrowserRouter>
    <Routes>
      <Route path={HOME} element={<Home />} />
      <Route path={CLIENTS} element={<Clients />} />
      <Route path={LOGIN} element={<LoginPage />} />
      <Route path={VIEW} element={<ViewPage />} />
      <Route path={EDITAR} element={<EditPage />} />
      <Route path={CREAR} element={<CreatePage />} />
      </Routes>
</BrowserRouter>

  )
}

export default App