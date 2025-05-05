import React from 'react'

export default function CriarLogin() {
  return (
    <div>
        <div className="full">
            <div className="left">
                <div className="top-left">
                    <h2 className="h1-title-left">Kabum</h2>
                </div>
                <p>Crie sua conta!</p>
                <div className="conteainer-input">
                    <label className="label-login">Login</label>
                    <input className="input" type="email" placeholder="Email Address"/>
                    <input className="input" type="password" placeholder="Password"/>
                    <div className="div-buttons">
                    <button className="button-login" type="submit">Criar Conta</button>
                    <a className="button-sign-a" href="/login"><button className="button-sign" type="button">Voltar</button></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
