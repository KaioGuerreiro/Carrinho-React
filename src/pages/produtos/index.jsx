import React from "react";
import Carrinho from "../../components/carrinho/carrinho.jsx";
import { produtos } from "./produtos.js";
import { BsCart2 } from "react-icons/bs";

export default function Produtos() {
    const [cartList, setCartList] = React.useState([]);
    const [mostraCarrinho, setMostraCarrinho] = React.useState(false);

    function addCarrinho(produto) {
        // Verifica se o produto já está no carrinho
        const produtoExistente = cartList.find((item) => item.nome === produto.nome);
        if (produtoExistente) {
            // Se o produto já existe, não adiciona novamente
            alert("Produto já está no carrinho!");
            return;
        } else {
            // Se o produto não existe, adiciona ao carrinho
            const novoProduto = { ...produto, quantidade: 1}; // Cria uma cópia do produto, Adiciona a propriedade quantidade 
            setCartList((prev) => [...prev, novoProduto]);
            alert("Produto adicionado ao carrinho!");
        }

    }

    return (
        <div className="conteinerProdutos">
            <div className="listaDeProdutos">
                {produtos.map((produto, index) => {
                    return (
                    <div key={index} className="produto">
                        <img src={produto.imagem} alt={produto.nome} />
                        <p className="nomeProduto">{produto.nome}</p>
                        <p className="valorProduto">R${produto.valor.toFixed(2)}</p>
                        <button className="botaoAddCarrinho" onClick={() => addCarrinho(produto)}>
                            Adicionar ao carrinho
                        </button>
                    </div>
                    );
                })}
            </div>
            {!mostraCarrinho && 
                <div className="botaoCarrinho">
                    <button onClick={() => setMostraCarrinho(true)}>
                        <BsCart2 size={25} />
                        <span className="quantidadeCarrinho">
                            {cartList.length}
                        </span>
                    </button>
                </div>
            }
            <div>
            {mostraCarrinho && (
                <div>
                    <Carrinho setMostraCarrinho={setMostraCarrinho} cartList={cartList} setCartList={setCartList}/>
                </div>
            )}
            </div>
            
        </div>
    );
}
