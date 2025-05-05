import React, { useEffect, useState } from 'react';

const HistoricoPedidos = () => {
  const [historico, setHistorico] = useState([]);

  const fetchHistorico = async () => {
    const res = await fetch('http://localhost:3001/pedidos?status=finalizado');
    const data = await res.json();
    setHistorico(data);
  };

  useEffect(() => {
    fetchHistorico();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Histórico de Pedidos</h1>
      {historico.length === 0 ? (
        <p>Nenhum pedido finalizado ainda.</p>
      ) : (
        historico.map((pedido) => (
          <div key={pedido.id} className="border p-4 mb-4 rounded shadow">
            <p><strong>ID:</strong> {pedido.id}</p>
            <p><strong>Início:</strong> {new Date(pedido.inicio).toLocaleString()}</p>
            <p><strong>Fim:</strong> {new Date(pedido.fim).toLocaleString()}</p>
            <ul className="ml-4 list-disc">
              {pedido.itens.map((item, index) => (
                <li key={index}>{item.nome} (x{item.quantidade})</li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default HistoricoPedidos;
