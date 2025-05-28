import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContexto } from "../../components/contexto/auth.jsx";
import "@material/web/button/elevated-button.js";
import "@material/web/button/filled-button.js";
import "@material/web/textfield/outlined-text-field.js";
import "@material/web/checkbox/checkbox.js";

export default function Login() {
  const navigate = useNavigate();

  const { teste, setAuth } = useContext(AuthContexto);

  function login() {
    setAuth(true);
    navigate("/home");
  }

  return (
    <div className="flex items-center justify-center bg-black h-screen">
      <div className="flex flex-col rounded-lg items-center justify-center w-1/3 h-1/2 bg-neutral-900">
        <div className="top-left">
          <p className="font-bold text-2xl text-amber-50">Unigran</p>
        </div>

        <p className="text-2xl text-amber-50">Bem vindo! Por favor faça login em sua conta.</p>
        <div className="flex flex-col items-center justify-center m-6">
          <label className="font-bold text-2xl text-amber-50">Login</label>
          <md-outlined-text-field className="m-4" type="email" label="Email">
          </md-outlined-text-field>
          <md-outlined-text-field type="password" label="Password">
          </md-outlined-text-field>
          <div>
            <div className="flex items-center justify-center m-4">
              <md-checkbox checked></md-checkbox>
              <label className="text-amber-50 pl-2">Remember me</label>
            </div>
          </div>
          <div>
            <md-elevated-button onClick={() => login()} className="p-5 m-2 font-bold">Login</md-elevated-button>
            <a href="/criar-conta">
              <md-filled-button className="p-5 m-2">Sign Up</md-filled-button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
