import React from "react";
import Carrinho from "../carrinho/index.jsx";
import "./produtos.css";
import { produtos } from "./produtos.js";
import { BsCart2 } from "react-icons/bs";

export default function Produtos() {
    const [cartList, setCartList] = React.useState([]);
    const [mostraCarrinho, setMostraCarrinho] = React.useState(false);

    function addCarrinho(produto) {
        setCartList((prev) => [...prev, produto]);
    }

    return (
        <div className="conteinerProdutos">
            <div className="botaoCarrinho">
                <button onClick={() => setMostraCarrinho(true)}>
                    <BsCart2 size={25} />
                    <span className="quantidadeCarrinho">
                        {cartList.length}
                    </span>
                </button>
            </div>
            {mostraCarrinho && (
                <div>
                    <Carrinho setMostraCarrinho={setMostraCarrinho} />
                </div>
            )}
        </div>
    );
}
