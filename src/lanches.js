import React from "react";
import { useCarrinho } from "./context/CarrinhoContext"; // Importando o contexto
import { toast } from "react-toastify"; // Importa o toast

export default function Lanches() {
  const { adicionarAoCarrinho } = useCarrinho(); // Obtendo a função para adicionar ao carrinho

  // Dados dos lanches (poderia ser mapeado de um array)
  const lanches = [
    {
      id: 1,
      nome: "X-Bacon",
      descricao: "Pão, hambúrguer artesanal, bacon, queijo e molho especial.",
      preco: 25.90,
      imagem: "/assets/hamb-3.png",
    },
    {
      id: 2,
      nome: "X-Salada",
      descricao: "Pão, hambúrguer artesanal, alface, tomate, queijo e maionese.",
      preco: 22.90,
      imagem: "/assets/hamb-4.png",
    },
    {
      id: 3,
      nome: "X-Tudo",
      descricao: "Pão, hambúrguer, ovo, bacon, presunto, queijo e molho especial.",
      preco: 29.90,
      imagem: "/assets/hamb-1.png",
    },
    {
      id: 4,
      nome: "X-Frango",
      descricao: "Pão, filé de frango, queijo, alface e molho especial.",
      preco: 24.90,
      imagem: "/assets/hamb-2.png",
    }
  ];

  const handleAdicionarAoCarrinho = (lanche) => {
    // Modificando para adicionar os dados relevantes
    const itemCarrinho = {
      id: lanche.id,
      nome: lanche.nome,
      preco: lanche.preco,
      quantidade: 1, // Definindo a quantidade inicial como 1
    };
    adicionarAoCarrinho(itemCarrinho);
    toast.success("Adicionado com sucesso!");
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="flex items-center justify-center font-bold text-blue-600 ">LANCHES</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {lanches.map((lanche) => (
          <div key={lanche.id} className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex items-center">
            <img
              src={lanche.imagem}
              alt={lanche.nome}
              className="w-24 h-24 object-cover rounded-md mr-4"
            />
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{lanche.nome}</h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{lanche.descricao}</p>
              <p className="text-lg font-bold text-green-600 dark:text-green-400 mt-2">R$ {lanche.preco.toFixed(2)}</p>
              <button
                onClick={() => handleAdicionarAoCarrinho(lanche)} // Chama a função de adicionar ao carrinho
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
