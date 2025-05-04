import React from 'react'
import './login.css'

export default function Login() {
  return (
    <div className='container'>
        <h1>Login</h1>
        <div className='formulario'>
            <label>Email</label>
            <input type="email" placeholder="Digite seu email" />
            <label>Senha</label>
            <input type="password" placeholder="Digite sua senha" />
        </div>
    </div>
  )
}
