import React from 'react'

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/produtos" element={<h1>Produtos</h1>} />
      <Route path="/carrinho" element={<h1>Carrinho</h1>} />
      <Route path="*" element={<h1>Página não encontrada</h1>} />
    </Routes>
  )
}
