import React from "react";
import { AtualizarProduto } from "../../components/data/fetchProdutos";
import { LerProdutos } from "../../components/data/fetchProdutos";
import { useContext } from "react";
import { DataContext } from "../../components/contexto/data";

export default function Atualizar() {
  const [itemId, setItemId] = React.useState("");
  const [itemName, setItemName] = React.useState("");
  const [itemValue, setItemValue] = React.useState("");
  const [itemImg, setItemImg] = React.useState("");
  const { setProdutos } = useContext(DataContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await AtualizarProduto(itemId, itemName, parseFloat(itemValue), itemImg);
    LerProdutos(setProdutos);
    console.log("Item atualizado:", {
      id: itemId,
      name: itemName,
      value: parseFloat(itemValue),
      img: itemImg,
    });
  };
  return (
    <div>
      <div>
        <div className="flex flex-col items-center justify-center pt-8">
          <h1 className="text-2xl text-amber-50 font-bold">Atualizar</h1>
          <p className="text-amber-50">Esta é a página de atualização.</p>
          <p className="text-amber-50">
            Aqui você pode atualizar itens existentes.
          </p>
        </div>
        <div>
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
                Atualizar Item
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
