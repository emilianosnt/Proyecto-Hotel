import Home from "./Pages/Home";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import {HOME, LOGIN, VIEW, EDITAR, CREAR} from "./Routers/router";

import LoginPage from "./Pages/LoginPage";
import ViewPage from "./Pages/ViewPage";
import EditPage from "./Pages/EditPage";
import CreatePage from "./Pages/CreatePage";

function App() {
  

  return (


  <BrowserRouter>
    <Routes>
      <Route path={HOME} element={<Home />} />
      <Route path={LOGIN} element={<LoginPage />} />
      <Route path={VIEW} element={<ViewPage />} />
      <Route path={EDITAR} element={<EditPage />} />
      <Route path={CREAR} element={<CreatePage />} />
      </Routes>
</BrowserRouter>

  )
}

export default App