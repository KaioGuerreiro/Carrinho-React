import React, { createContext, useState } from "react";

export const AuthContexto = createContext();

export default function AuthProvider({ children }) {
  const [auth, setAuth] = useState(false);

  return (
    <AuthContexto.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContexto.Provider>
  );
}