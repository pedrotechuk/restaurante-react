import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HistoricoPedidos = () => {
  const [historico, setHistorico] = useState([]);

  const fetchHistorico = async () => {
    const res = await fetch("http://localhost:3001/pedidos?status=finalizado");
    const data = await res.json();
    setHistorico(data);
  };

  useEffect(() => {
    fetchHistorico();
  }, []);

  return (
    <div className="container mx-auto px-4 py-7">
      <div className="flex justify-end mb-4">
        <Link to="/pedidos">
          <button
            type="button"
            className="text-gray-800 bg-gray-100 hover:bg-gray-200 font-medium rounded-lg text-sm px-2 py-2 text-center"
          >
            Voltar
          </button>
        </Link>
      </div>
      <h1 className="text-3xl font-bold text-center mb-8">
        Histórico de Pedidos
      </h1>
      {historico.length === 0 ? (
        <p>Nenhum pedido finalizado ainda.</p>
      ) : (
        historico.map((pedido) => (
          <div key={pedido.id} className="border p-4 mb-4 rounded-md shadow">
            <p>
              <strong>ID:</strong> {pedido.id}
            </p>
            <p>
              <strong>Início:</strong>{" "}
              {new Date(pedido.inicio).toLocaleString()}
            </p>
            <p>
              <strong>Fim:</strong> {new Date(pedido.fim).toLocaleString()}
            </p>
            <ul className="ml-4 list-disc">
              {pedido.itens.map((item, index) => (
                <li key={index}>
                  {item.nome} (x{item.quantidade})
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default HistoricoPedidos;
