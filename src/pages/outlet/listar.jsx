import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { DataContext } from "../../components/contexto/data";
import { LerProdutos } from "../../components/data/fetchProdutos";
import { useEffect } from "react";

export default function Listar() {
  const navigate = useNavigate();
  const { setProdutos } = useContext(DataContext);
  const { produtos } = React.useContext(DataContext);
  useEffect(() => {
    LerProdutos(setProdutos);
  }, []);

  return (
    <div>
      <div className="flex flex-col items-center justify-center pt-8">
        <h1 className="text-2xl text-amber-50 font-bold">Listar</h1>
        <p className="text-amber-50">Esta é a pagina de listagem</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-5">
        {produtos.map((produto, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-neutral-900 p-5 rounded shadow-lg"
          >
            <img
              src={produto.imagem}
              alt={produto.nome}
              className="w-64 h-64 object-cover rounded"
            />
            <p className="text-amber-50 text-xl font-bold mt-2">
              {produto.nome}
            </p>
            <p className="text-amber-50 text-lg">
              R${produto.valor.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
