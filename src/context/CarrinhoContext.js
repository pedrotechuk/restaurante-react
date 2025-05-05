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

  const finalizarPedido = async () => {
    if (carrinho.length === 0) return;
  
    const novoPedido = {
      itens: carrinho,
      status: "pendente",
      inicio: null,
      fim: null
    };
  
    try {
      const response = await fetch("http://localhost:3001/pedidos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(novoPedido)
      });
  
      if (!response.ok) throw new Error("Erro ao enviar pedido");
  
      setCarrinho([]); // limpa o carrinho após enviar
      console.log("Pedido enviado com sucesso!");
    } catch (error) {
      console.error("Erro ao finalizar pedido:", error);
    }
  };

  const limparCarrinho = () => setCarrinho([]);
  

  return (
    <CarrinhoContext.Provider
      value={{
        carrinho,
        adicionarAoCarrinho,
        atualizarQuantidade,
        removerItem,
        limparCarrinho,
        finalizarPedido
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};
