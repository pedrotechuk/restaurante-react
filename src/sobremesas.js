import React from "react";
import { useCarrinho } from "./context/CarrinhoContext"; // Importando o contexto
import { toast } from "react-toastify"; // Importa o toast

export default function Sobremesas() {
  const { adicionarAoCarrinho } = useCarrinho(); // Hook do carrinho

  const sobremesas = [
    {
      id: 13,
      nome: "Bolo Chocolate",
      preco: 30.00,
      imagem: "/assets/bolosobremesa.jpg",
    },
    {
      id: 14,
      nome: "Mousse Maracujá",
      preco: 20.00,
      imagem: "/assets/moussemaracuja.jpg",
    },
    {
      id: 15,
      nome: "Mousse de Chocolate",
      preco: 18.00,
      imagem: "/assets/moussechocolate.jpg",
    },
    {
      id: 16,
      nome: "Prestigio",
      preco: 6.00,
      imagem: "/assets/prestigio.jpg",
    }
  ];

  const handleAdicionarAoCarrinho = (sobremesa) => {
    adicionarAoCarrinho(sobremesa); // Adiciona ao carrinho
    toast.success("Adicionado com sucesso!"); // Mostra notificação
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <br />
      <br />
      <br />
      <br />
      <h1 className="flex items-center justify-center font-bold text-blue-600">SOBREMESAS</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {sobremesas.map((sobremesa) => (
          <div key={sobremesa.id} className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex items-center">
            <img
              src={sobremesa.imagem}
              alt={sobremesa.nome}
              className="w-24 h-24 object-cover rounded-md mr-4"
            />
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{sobremesa.nome}</h2>
              <p className="text-lg font-bold text-green-600 dark:text-green-400 mt-2">R$ {sobremesa.preco.toFixed(2)}</p>
              <button
                onClick={() => handleAdicionarAoCarrinho(sobremesa)}
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
