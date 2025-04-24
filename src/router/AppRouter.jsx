// src/Router/AppRouter.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import EquipoList from "../pages/EquipoList";
import EquipoCreate from "../pages/EquipoCreate";
import EquipoEdit from "../pages/EquipoEdit";
import EquipoDetail from "../pages/EquipoDetail";
import NotFound from "../pages/NotFound";
import Layout from "../layout/Layout";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/equipos" element={<EquipoList />} />
          <Route path="/equipos/create" element={<EquipoCreate />} />
          <Route path="/equipos/:id" element={<EquipoDetail />} />
          <Route path="/equipos/:id/edit" element={<EquipoEdit />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
