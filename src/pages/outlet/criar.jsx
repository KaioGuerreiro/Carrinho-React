import React from "react";
import { CriarProduto } from "../../components/data/fetchProdutos";
import { LerProdutos } from "../../components/data/fetchProdutos";
import { DataContext } from "../../components/contexto/data";
import { useContext } from "react";

export default function Criar() {
  const [itemName, setItemName] = React.useState("");
  const [itemValue, setItemValue] = React.useState("");
  const [itemImg, setItemImg] = React.useState("");
  const { setProdutos } = useContext(DataContext);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    await CriarProduto(itemName, parseFloat(itemValue), itemImg);
    LerProdutos(setProdutos);
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl text-amber-50 font-bold">Criar</h1>
        <p className="text-amber-50">Esta é a página de criação.</p>
        <p className="text-amber-50">Aqui você pode criar novos itens.</p>
      </div>
      <div className="flex flex-col items-center justify-center mt-8">
        <form className="flex flex-col items-center bg-neutral-900 p-5 rounded shadow-lg">
          <input
            type="text"
            placeholder="Nome do item"
            className="mt-4 p-2 rounded bg-neutral-700 text-amber-50"
            onChange={(e) => setItemName(e.target.value)}
            value={itemName}
          />
          <input
            type="number"
            placeholder="Valor"
            className="mt-4 p-2 rounded bg-neutral-700 text-amber-50"
            onChange={(e) => setItemValue(e.target.value)}
            value={itemValue}
          />
          <input
            type="text"
            placeholder="URL da imagem"
            className="mt-4 p-2 rounded bg-neutral-700 text-amber-50"
            onChange={(e) => setItemImg(e.target.value)}
            value={itemImg}
          />
          <button
            type="submit"
            className="mt-4 p-2 bg-purple-900 text-white rounded hover:bg-purple-700 cursor-pointer transition-colors duration-300"
            onClick={handleSubmit}
          >
            Criar Item
          </button>
        </form>
        {itemImg && (
          <div className="mt-4">
            <img
              src={itemImg}
              alt="Item"
              className="w-64 h-64 object-cover rounded"
            />
          </div>
        )}
      </div>
    </div>
  );
}
