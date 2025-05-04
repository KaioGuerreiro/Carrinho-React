import React from 'react'
import { Routes, Route } from 'react-router'
import Home from '../../pages/home'
import Login from '../../pages/login'
import Produtos from '../../pages/produtos'

export default function Routers() {
  return (
    <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/produtos" element={<Produtos/>} />
    </Routes>
  )
}
