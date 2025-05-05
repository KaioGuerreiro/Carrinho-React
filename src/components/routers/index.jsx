import React from 'react'
import { Routes, Route } from 'react-router'
import Login from '../../pages/login'
import CriarLogin from '../../pages/criarLogin'
import Produtos from '../../pages/produtos'

export default function Routers() {
  return (
    <Routes>
        <Route path="*" element={<Produtos/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/criarLogin" element={<CriarLogin/>} />
    </Routes>
  )
}
