import React from "react";
import { Outlet, useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-row">
      <div className="w-1/6 h-screen flex flex-col bg-neutral-900 items-center gap-5">
        <h1 onClick={() => navigate("/home")} className="text-3xl text-amber-50 font-bold p-5 hover:cursor-pointer">Painel</h1>
        <p onClick={() => navigate("/home/listar")} className="text-xl text-amber-50 hover:cursor-pointer">Listar</p>
        <p onClick={() => navigate("/home/criar")} className="text-xl text-amber-50 hover:cursor-pointer">Criar</p>
        <p onClick={() => navigate("/home/atualizar")} className="text-xl text-amber-50 hover:cursor-pointer">Atualizar</p>
        <p onClick={() => navigate("/home/remover")} className="text-xl text-amber-50 hover:cursor-pointer">Remover</p>
      </div>
      <div className="w-5/6 h-screen flex flex-col items-center bg-neutral-800">
        <div className="flex flex-col items-center justify-center pt-8">
          <h1 className="text-2xl text-amber-50 font-bold">
            Bem vindo ao painel!
          </h1>
          <p className="text-amber-50">Selecione uma opção no menu lateral.</p>
        </div>
        <div className="w-full h-full flex items-center justify-center bg-radial">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
