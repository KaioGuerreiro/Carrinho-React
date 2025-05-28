import { Route, Routes } from "react-router";
import Home from "../../pages/home";
import Produtos from "../../pages/produtos";
import Login from "../../pages/login";
import CriarLogin from "../../pages/criarLogin";
import PrivateRoute from "./privateRoute";
import Listar from "../../pages/outlet/listar";
import Criar from "../../pages/outlet/criar";
import Atualizar from "../../pages/outlet/atualizar";
import Remover from "../../pages/outlet/remover";

export default function Routers() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/criar-conta" element={<CriarLogin />} />
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      >
        <Route path="/home/listar" element={<Listar />} />
        <Route path="/home/criar" element={<Criar />} />
        <Route path="/home/atualizar" element={<Atualizar />} />
        <Route path="/home/remover" element={<Remover />} />
      </Route>
      <Route
        path="/produtos"
        element={
          <PrivateRoute>
            <Produtos />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  );
}
