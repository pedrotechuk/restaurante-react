import React from "react";
import { useCarrinho } from "./context/CarrinhoContext"; // Importando o contexto
import { toast } from "react-toastify"; // Importa o toast

export default function Bebidas() {
  const { adicionarAoCarrinho } = useCarrinho(); // Função do contexto

  // Lista de bebidas
  const bebidas = [
    {
      id: 9,
      nome: "Cerveja Spaten",
      preco: 7.00,
      imagem: "/assets/spaten.jpg",
    },
    {
      id: 10,
      nome: "Coca Cola Lata 300ml",
      preco: 4.00,
      imagem: "/assets/refri-1.png",
    },
    {
      id:11,
      nome: "Coca Cola 600ml",
      preco: 8.00,
      imagem: "/assets/coca600.jpg",
    },
    {
      id: 12,
      nome: "Guarana 2lt",
      preco: 10.00,
      imagem: "/assets/guarana2lt.jpg",
    }
  ];

  const handleAdicionarAoCarrinho = (bebida) => {
    adicionarAoCarrinho(bebida); // Adiciona a bebida ao carrinho
    toast.success("Adicionado com sucesso!");
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <br/>
      <br/>
      <br/>
      <br/>
      <h1 className="flex items-center justify-center font-bold text-blue-600">BEBIDAS</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {bebidas.map((bebida) => (
          <div key={bebida.id} className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex items-center">
            <img
              src={bebida.imagem}
              alt={bebida.nome}
              className="w-24 h-24 object-cover rounded-md mr-4"
            />
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{bebida.nome}</h2>
              <p className="text-lg font-bold text-green-600 dark:text-green-400 mt-2">R$ {bebida.preco.toFixed(2)}</p>
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
