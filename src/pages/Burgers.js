import React from "react";
import { useCarrinho } from "../context/CarrinhoContext";
import { toast } from "react-toastify";

export default function Lanches() {
  const { adicionarAoCarrinho } = useCarrinho();

  const lanches = [
    {
      id: 1,
      nome: "X-Bacon",
      descricao: "Pão, hambúrguer artesanal, bacon, queijo e molho especial.",
      preco: 25.9,
      imagem: "/assets/burgers/x-bacon.png",
    },
    {
      id: 2,
      nome: "X-Salada",
      descricao:
        "Pão, hambúrguer artesanal, alface, tomate, queijo e maionese.",
      preco: 22.9,
      imagem: "/assets/burgers/x-salada.png",
    },
    {
      id: 3,
      nome: "X-Tudo",
      descricao:
        "Pão, hambúrguer, ovo, bacon, presunto, queijo e molho especial.",
      preco: 29.9,
      imagem: "/assets/burgers/x-tudo.png",
    },
    {
      id: 4,
      nome: "X-Frango",
      descricao: "Pão, filé de frango, queijo, alface e molho especial.",
      preco: 24.9,
      imagem: "/assets/burgers/x-frango.png",
    },
    {
      id: 5,
      nome: "X-calabresa",
      descricao: "Pão, calabresa, queijo, alface e molho especial.",
      preco: 19.5,
      imagem: "/assets/burgers/x-calabresa.png",
    },
    {
      id: 6,
      nome: "X-egg",
      descricao: "Pão, ovo, queijo, bacon, alface e molho especial.",
      preco: 22.5,
      imagem: "/assets/burgers/x-egg.png",
    },
    {
      id: 7,
      nome: "X-onion",
      descricao: "Pão, calabresa, queijo, alface e molho especial.",
      preco: 28.0,
      imagem: "/assets/burgers/x-onion.png",
    },
    {
      id: 8,
      nome: "X-vegano",
      descricao: "Pão, hambúguer vegetal, queijo, alface, rúcula.",
      preco: 28.0,
      imagem: "/assets/burgers/x-vegano.png",
    },
  ];

  const handleAdicionarAoCarrinho = (lanche) => {
    const itemCarrinho = {
      id: lanche.id,
      nome: lanche.nome,
      preco: lanche.preco,
      quantidade: 1,
    };
    adicionarAoCarrinho(itemCarrinho);
    toast.success("Adicionado com sucesso!");
  };

  return (
    <div className="container mx-auto px-4 py-7">
      <div className="flex flex-wrap justify-center gap-6">
        {lanches.map((lanche) => (
          <div
            key={lanche.id}
            className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex items-center"
          >
            <img
              src={lanche.imagem}
              alt={lanche.nome}
              className="w-24 h-24 object-cover rounded-md mr-4"
            />
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                {lanche.nome}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {lanche.descricao}
              </p>
              <p className="text-lg font-bold text-green-600 dark:text-green-400 mt-2">
                R$ {lanche.preco.toFixed(2)}
              </p>
              <button
                onClick={() => handleAdicionarAoCarrinho(lanche)}
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
