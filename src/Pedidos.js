import React, { useEffect, useState } from 'react';

const PedidosAtivos = () => {
  const [pedidos, setPedidos] = useState([]);

  const fetchPedidos = async () => {
    const res = await fetch('http://localhost:3001/pedidos?status=pendente');
    const data = await res.json();
    setPedidos(data);
  };

  const iniciarPedido = async (id) => {
    const inicio = new Date().toISOString();
    await fetch(`http://localhost:3001/pedidos/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ inicio }),
    });
    fetchPedidos();
  };

  const finalizarPedido = async (id) => {
    const fim = new Date().toISOString();
    await fetch(`http://localhost:3001/pedidos/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fim, status: 'finalizado' }),
    });
    fetchPedidos();
  };

  useEffect(() => {
    fetchPedidos();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Pedidos Ativos</h1>
      {pedidos.length === 0 ? (
        <p>Sem pedidos no momento.</p>
      ) : (
        pedidos.map((pedido) => (
          <div key={pedido.id} className="border p-4 mb-4 rounded shadow">
            <p><strong>ID do Pedido:</strong> {pedido.id}</p>
            <ul className="ml-4 list-disc">
              {pedido.itens.map((item, index) => (
                <li key={index}>{item.nome} (x{item.quantidade})</li>
              ))}
            </ul>
            <div className="mt-2 flex gap-2">
              {!pedido.inicio && (
                <button
                  className="bg-green-600 text-white px-4 py-1 rounded"
                  onClick={() => iniciarPedido(pedido.id)}
                >
                  Iniciar Pedido
                </button>
              )}
              {pedido.inicio && !pedido.fim && (
                <button
                  className="bg-blue-600 text-white px-4 py-1 rounded"
                  onClick={() => finalizarPedido(pedido.id)}
                >
                  Finalizar Pedido
                </button>
              )}
              {pedido.inicio && (
                <span className="text-sm text-gray-500">
                  Iniciado em: {new Date(pedido.inicio).toLocaleString()}
                </span>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default PedidosAtivos;
