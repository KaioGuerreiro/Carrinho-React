import React from "react";
import { DeletarProduto } from "../../components/data/fetchProdutos";
import { LerProdutos } from "../../components/data/fetchProdutos";

export default function Remover() {
  const [itemId, setItemId] = React.useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    await DeletarProduto(itemId);
    LerProdutos();
    console.log("Item removido:", itemId);
    setItemId(""); // Limpa o campo após a remoção
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-center pt-8">
        <h1 className="text-2xl text-amber-50 font-bold">Remover</h1>
        <p className="text-amber-50">Esta é a página de remoção.</p>
        <p className="text-amber-50">
          Aqui você pode remover itens existentes.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center mt-8">
        <form className="flex flex-col items-center bg-neutral-900 p-5 rounded shadow-lg">
          <input
            type="text"
            placeholder="ID do item"
            className="mt-4 p-2 rounded bg-neutral-700 text-amber-50"
            required
            onChange={(e) => setItemId(e.target.value)}
            value={itemId}
          />
          <button
            type="submit"
            className="mt-4 p-2 bg-red-600 text-white rounded hover:bg-red-500 cursor-pointer transition-colors duration-300"
            onClick={handleSubmit}
          >
            Remover Item
          </button>
        </form>
      </div>
    </div>
  );
}
