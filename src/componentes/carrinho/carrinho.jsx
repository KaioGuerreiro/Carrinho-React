import React from "react";
import Close from "../../assets/icons/Close.svg";
import "./carrinho.css";

export default function Carrinho({ setMostraCarrinho, cartList, setCartList }) {
    function calcularTotal() {
        return cartList.reduce((total, item) => total + item.valor * item.quantidade, 0);
    }

    return (
        <div className="container">
            <div className="carrinho">
                <div className="carrinho-header">
                    <p>
                        Seu carrinho tem <strong>{cartList.length} items</strong>
                    </p>
                    <button className="botaoFechar" onClick={() => setMostraCarrinho(false)}>
                        <img src={Close} alt="Fechar carrinho" />
                    </button>
                </div>
                <div className="carrinho-center">
                    {cartList.map((item, index) => (
                        <div className="carrinho-items">
                            <div className="carrinho-items-img">
                                <img key={index} src={item.imagem} alt="Monitor" />
                            </div>
                            <div className="carrinho-items-info">
                                <p className="nome-produto" key={index}>
                                    {item.nome}
                                </p>
                                <div className="carrinho-items-info-valor">
                                    <p>
                                        <b>R$ {item.valor.toFixed(2)}</b>
                                    </p>
                                    <div className="carrinho-items-info-quantidade">
                                        <button className="carrinho-items-info-quantidade-1">
                                            -
                                        </button>
                                        <p>
                                            <b>{item.quantidade}</b>
                                        </p>
                                        <button className="carrinho-items-info-quantidade-2" onClick={() => item.quantidade++}>
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="carrinho-footer">
                    <div className="carrinho-footer-total">
                        <p>Total:</p>
                        <p className="valor-total">
                            <b>R$ {calcularTotal().toFixed(2)}</b>
                        </p>
                    </div>
                    <button className="carrinho-footer-finalizar">
                        Finalizar Compra
                    </button>
                </div>
            </div>
        </div>
    );
}
