import React from "react";
import { useCarrinho } from "../context/CarrinhoContext"; // Importando o contexto
import { toast } from "react-toastify"; // Importa o toast

export default function Bebidas() {
  const { adicionarAoCarrinho } = useCarrinho(); // Função do contexto

  // Lista de bebidas
  const bebidas = [
    {
      id: 9,
      nome: "Cerveja Spaten",
      preco: 7.0,
      imagem: "/assets/drinks/spaten.jpg",
    },
    {
      id: 10,
      nome: "Coca Cola Lata 300ml",
      preco: 4.0,
      imagem: "/assets/drinks/refri-1.png",
    },
    {
      id: 11,
      nome: "Coca Cola 600ml",
      preco: 8.0,
      imagem: "/assets/drinks/coca600.jpg",
    },
    {
      id: 12,
      nome: "Guarana 2lt",
      preco: 10.0,
      imagem: "/assets/drinks/guarana2lt.jpg",
    },
  ];

  const handleAdicionarAoCarrinho = (bebida) => {
    adicionarAoCarrinho(bebida);
    toast.success("Adicionado com sucesso!");
  };

  return (
    <div className="container mx-auto px-4 py-7">
      <div className="flex flex-wrap justify-center gap-6">
        {bebidas.map((bebida) => (
          <div
            key={bebida.id}
            className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex items-center"
          >
            <img
              src={bebida.imagem}
              alt={bebida.nome}
              className="w-24 h-24 object-cover rounded-md mr-4"
            />
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                {bebida.nome}
              </h2>
              <p className="text-lg font-bold text-green-600 dark:text-green-400 mt-2">
                R$ {bebida.preco.toFixed(2)}
              </p>
              <button
                onClick={() => handleAdicionarAoCarrinho(bebida)}
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
