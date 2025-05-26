import { Route, Routes } from "react-router";
import Produtos from "../../pages/produtos";
import Login from "../../pages/login";
import CriarLogin from "../../pages/criarLogin";
import PrivateRoute from "./privateRoute";

export default function Routers() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/criar-conta" element={<CriarLogin />} />
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
