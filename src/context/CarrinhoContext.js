import React, { createContext, useContext, useState } from "react";

// Criação do contexto
const CarrinhoContext = createContext();

// Hook para usar o contexto
export const useCarrinho = () => useContext(CarrinhoContext);

// Provedor do contexto
export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);

  const adicionarAoCarrinho = (item) => {
    setCarrinho((prevCarrinho) => {
      const itemExistente = prevCarrinho.find((i) => i.id === item.id);
      if (itemExistente) {
        return prevCarrinho.map((i) =>
          i.id === item.id
            ? { ...i, quantidade: i.quantidade + 1 }
            : i
        );
      } else {
        return [...prevCarrinho, { ...item, quantidade: 1 }];
      }
    });
  };

  const atualizarQuantidade = (id, novaQuantidade) => {
    if (novaQuantidade < 1) return;
    setCarrinho((prevCarrinho) =>
      prevCarrinho.map((item) =>
        item.id === id ? { ...item, quantidade: novaQuantidade } : item
      )
    );
  };

  const removerItem = (id) => {
    setCarrinho((prevCarrinho) =>
      prevCarrinho.filter((item) => item.id !== id)
    );
  };

  return (
    <CarrinhoContext.Provider
      value={{
        carrinho,
        adicionarAoCarrinho,
        atualizarQuantidade,
        removerItem,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};
