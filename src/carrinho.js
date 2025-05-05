import React, { useState } from "react";
import { useCarrinho } from "./context/CarrinhoContext";
import { useNavigate } from "react-router-dom";

export default function Carrinho() {
  const navigate = useNavigate();
  const { carrinho, atualizarQuantidade, removerItem, finalizarPedido } =
    useCarrinho();

  const [mostrarModal, setMostrarModal] = useState(false);
  const [formaPagamento, setFormaPagamento] = useState("");
  const [trocoPara, setTrocoPara] = useState("");

  const total = carrinho.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  );

  const confirmarFinalizacao = () => {
    setMostrarModal(true);
  };

  const confirmarPagamento = () => {
    if (formaPagamento === "dinheiro" && trocoPara.trim() === "") {
      return alert("Informe o valor para troco.");
    }

    // Passa navigate para finalizarPedido
    finalizarPedido(navigate);
    setMostrarModal(false);
    setFormaPagamento("");
    setTrocoPara("");
  };

  return (
    <div className="container mx-auto px-4 py-7">
      <h1 className="text-3xl font-bold text-center mb-8">Carrinho</h1>

      {carrinho.length === 0 ? (
        <p className="text-center text-gray-500">Seu carrinho está vazio.</p>
      ) : (
        <>
          <div className="space-y-6">
            {carrinho.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center bg-white shadow-md p-4 rounded-2xl"
              >
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    {item.nome}
                  </h2>
                  <p className="text-sm text-gray-600">
                    Preço: R$ {item.preco.toFixed(2)}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <input
                    type="number"
                    value={item.quantidade}
                    onChange={(e) =>
                      atualizarQuantidade(item.id, parseInt(e.target.value))
                    }
                    className="w-16 px-2 py-1 border rounded-md"
                    min={1}
                  />
                  <button
                    onClick={() => removerItem(item.id)}
                    className="text-red-500 hover:text-red-700 font-medium"
                  >
                    Remover
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 bg-gray-100 rounded-2xl shadow-inner text-right">
            <h2 className="text-xl font-semibold text-gray-800">
              Total: R$ {total.toFixed(2)}
            </h2>
            <button
              onClick={confirmarFinalizacao}
              className="mt-4 bg-green-600 text-white px-6 py-2 rounded-xl hover:bg-green-700 transition"
            >
              Finalizar Pedido
            </button>
          </div>
        </>
      )}

      {/* Modal de Pagamento */}
      {mostrarModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-80">
            <h2 className="text-lg font-bold mb-4">Forma de Pagamento</h2>
            <div className="flex flex-col gap-3">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="dinheiro"
                  checked={formaPagamento === "dinheiro"}
                  onChange={() => setFormaPagamento("dinheiro")}
                />
                Dinheiro
              </label>
              {formaPagamento === "dinheiro" && (
                <input
                  type="text"
                  placeholder="Troco para quanto?"
                  value={trocoPara}
                  onChange={(e) => setTrocoPara(e.target.value)}
                  className="border p-2 rounded w-full"
                />
              )}

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="cartao"
                  checked={formaPagamento === "cartao"}
                  onChange={() => setFormaPagamento("cartao")}
                />
                Cartão
              </label>
            </div>

            <p className="text-sm mt-3 text-gray-600">
              Em breve teremos pagamento digital também.
            </p>

            <div className="flex justify-end mt-4 gap-2">
              <button
                className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
                onClick={() => setMostrarModal(false)}
              >
                Cancelar
              </button>
              <button
                className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                onClick={confirmarPagamento}
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
