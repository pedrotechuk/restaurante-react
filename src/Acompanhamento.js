import React, { useEffect, useState } from "react";

const PedidosCliente = () => {
  const [pedidos, setPedidos] = useState([]);

  const fetchPedidos = async () => {
    try {
      const res = await fetch("http://localhost:3001/pedidos?status=pendente");
      const data = await res.json();
      setPedidos(data);
    } catch (error) {
      console.error("Erro ao buscar pedidos:", error);
    }
  };

  useEffect(() => {
    fetchPedidos();

    // Atualiza automaticamente a cada 10 segundos
    const interval = setInterval(fetchPedidos, 10000);
    return () => clearInterval(interval);
  }, []);

  const getStatus = (pedido) => {
    if (!pedido.inicio) return "🕒 Na fila";
    if (pedido.inicio && !pedido.fim) return "🔄 Em andamento";
    return "✅ Finalizado";
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Acompanhamento do Pedido</h1>

      {pedidos.length === 0 ? (
        <p className="text-center text-gray-500">Nenhum pedido pendente.</p>
      ) : (
        pedidos.map((pedido) => (
          <div key={pedido.id} className="border p-4 mb-4 rounded-xl shadow-md bg-white dark:bg-gray-800">
            <div className="mb-2">
              <p className="text-lg font-semibold">Status: <span className="font-normal">{getStatus(pedido)}</span></p>
              {pedido.inicio && (
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Iniciado em: {new Date(pedido.inicio).toLocaleString()}
                </p>
              )}
              {pedido.fim && (
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Finalizado em: {new Date(pedido.fim).toLocaleString()}
                </p>
              )}
            </div>

            <p className="font-medium">Itens:</p>
            <ul className="ml-5 list-disc text-gray-800 dark:text-gray-200">
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

export default PedidosCliente;
