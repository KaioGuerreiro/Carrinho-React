import { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContexto } from "../contexto/auth";

export default function PrivateRoute({ children }) {
  const { auth } = useContext(AuthContexto);

  if (auth === false) {
    return <Navigate to="/" />;
  }
  // Se o usuário estiver autenticado, renderiza os filhos
  return children;
}
