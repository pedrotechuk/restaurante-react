import React from "react";
import { useCarrinho } from "../context/CarrinhoContext";
import { toast } from "react-toastify";

export default function Sobremesas() {
  const { adicionarAoCarrinho } = useCarrinho();

  const sobremesas = [
    {
      id: 22,
      nome: "Bolo Chocolate",
      preco: 15.0,
      imagem: "/assets/sweets/bolosobremesa.jpg",
    },
    {
      id: 23,
      nome: "Mousse Maracujá",
      preco: 20.0,
      imagem: "/assets/sweets/moussemaracuja.jpg",
    },
    {
      id: 24,
      nome: "Mousse de Chocolate",
      preco: 18.0,
      imagem: "/assets/sweets/moussechocolate.jpg",
    },
    {
      id: 25,
      nome: "Prestigio",
      preco: 6.0,
      imagem: "/assets/sweets/prestigio.jpg",
    },
    {
      id: 26,
      nome: "Sorvete Baunilha com Chocolate",
      preco: 6.0,
      imagem: "/assets/sweets/Sorvetebaunilha.jpg",
    },
    {
      id: 27,
      nome: "Sundae Chocolate com Caramelo",
      preco: 10.0,
      imagem: "/assets/sweets/sundaychocolate.jpg",
    },
  ];

  const handleAdicionarAoCarrinho = (sobremesa) => {
    adicionarAoCarrinho(sobremesa);
    toast.success("Adicionado com sucesso!");
  };

  return (
    <div className="container mx-auto px-4 py-7">
      <div className="flex flex-wrap justify-center gap-6">
        {sobremesas.map((sobremesa) => (
          <div
            key={sobremesa.id}
            className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex items-center"
          >
            <img
              src={sobremesa.imagem}
              alt={sobremesa.nome}
              className="w-24 h-24 object-cover rounded-md mr-4"
            />
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                {sobremesa.nome}
              </h2>
              <p className="text-lg font-bold text-green-600 dark:text-green-400 mt-2">
                R$ {sobremesa.preco.toFixed(2)}
              </p>
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
