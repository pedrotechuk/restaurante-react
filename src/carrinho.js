import React from "react";
import { useCarrinho } from "./context/CarrinhoContext";
import { useNavigate } from "react-router-dom";

export default function Carrinho() {
  const navigate = useNavigate();
  const { carrinho, atualizarQuantidade, removerItem } = useCarrinho() || {
    carrinho: [],
    atualizarQuantidade: () => {},
    removerItem: () => {},
  };

  const total = carrinho.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  );

  const { finalizarPedido } = useCarrinho();


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
                className="flex justify-between items-center bg-white dark:bg-gray-800 shadow-md p-4 rounded-2xl"
              >
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {item.nome}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
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

          <div className="mt-10 p-6 bg-gray-100 dark:bg-gray-700 rounded-2xl shadow-inner text-right">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              Total: R$ {total.toFixed(2)}
            </h2>
            <button
              onClick={finalizarPedido}
              className="mt-4 bg-green-600 text-white px-6 py-2 rounded-xl hover:bg-green-700 transition"
            >
              Finalizar Pedido
            </button>
          </div>
        </>
      )}
    </div>
  );
}
