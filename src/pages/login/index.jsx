import React from "react";
import "./login.css";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContexto } from "../../components/contexto/auth.jsx";

export default function Login() {
  const navigate = useNavigate();

  const { teste, setAuth } = useContext(AuthContexto);

  function login() {
    setAuth(true);
    navigate("/produtos");
  }

  return (
    <div className="full">
      <div className="left">
        <div className="top-left">
          <h2 className="h1-title-left">Kabum</h2>
        </div>

        <p>Bem vindo! Por favor faça login em sua conta.</p>
        <div className="conteainer-input">
          <label className="label-login">Login</label>
          <input className="input" type="email" placeholder="Email Address" />
          <input className="input" type="password" placeholder="Password" />
          <div className="div-check">
            <div className="div-check-input">
              <input
                className="input-check"
                type="checkbox"
                name="remember"
                id="remember"
              />
              <label className="input-remenber">Remember me</label>
            </div>
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius">
              <p>Forgot Password?</p>
            </a>
          </div>
          <div className="div-buttons">
            <button onClick={() => login()} className="button-login" type="submit">
              Login
            </button>
            <a className="button-sign-a" href="/criarLogin">
              <button className="button-sign" type="button">
                Sign Up
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
