import React from "react";
import { useCarrinho } from "../context/CarrinhoContext";
import { toast } from "react-toastify";

export default function Porcoes() {
  const { adicionarAoCarrinho } = useCarrinho();

  const porcoes = [
    {
      id: 5,
      nome: "Porção Batata Frita",
      preco: 30.0,
      imagem: "/assets/portions/batatafrita.jpg",
    },
    {
      id: 6,
      nome: "Porção Alcatra Desfiada",
      preco: 68.0,
      imagem: "/assets/portions/carneporc.jpg",
    },
    {
      id: 7,
      nome: "Porção de Salada",
      preco: 18.0,
      imagem: "/assets/portions/porcsalada.jpg",
    },
    {
      id: 8,
      nome: "Porção de Camarão",
      preco: 108.0,
      imagem: "/assets/portions/porccamarao.jpg",
    },
  ];

  const handleAdicionarAoCarrinho = (porcao) => {
    adicionarAoCarrinho(porcao);
    toast.success("Adicionado com sucesso!");
  };

  return (
    <div className="container mx-auto px-4 py-7">
      <div className="flex flex-wrap justify-center gap-6">
        {porcoes.map((porcao) => (
          <div
            key={porcao.id}
            className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex items-center"
          >
            <img
              src={porcao.imagem}
              alt={porcao.nome}
              className="w-24 h-24 object-cover rounded-md mr-4"
            />
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                {porcao.nome}
              </h2>
              <p className="text-lg font-bold text-green-600 dark:text-green-400 mt-2">
                R$ {porcao.preco.toFixed(2)}
              </p>
              <button
                onClick={() => handleAdicionarAoCarrinho(porcao)}
                className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Adicionar ao Pedido
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
