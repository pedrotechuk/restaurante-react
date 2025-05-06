import React, { useEffect, useState } from "react";

const PedidosCliente = () => {
  const [pedidos, setPedidos] = useState([]);

  const fetchPedidos = async () => {
    try {
      const res = await fetch("http://localhost:3001/pedidos");
      const data = await res.json();

      const pedidosOrdenados = data.sort((a, b) => {
        const statusA = !a.inicio ? 0 : !a.fim ? 1 : 2;
        const statusB = !b.inicio ? 0 : !b.fim ? 1 : 2;
        return statusA - statusB;
      });

      setPedidos(pedidosOrdenados);
    } catch (error) {
      console.error("Erro ao buscar pedidos:", error);
    }
  };

  useEffect(() => {
    fetchPedidos();
    const interval = setInterval(fetchPedidos, 10000);
    return () => clearInterval(interval);
  }, []);

  const getStatus = (pedido) => {
    if (!pedido.inicio) return "🕒 Na fila";
    if (pedido.inicio && !pedido.fim) return "🔄 Em andamento";
    return "✅ Finalizado!";
  };

  return (
    <div className="container mx-auto px-4 py-7">
      <h1 className="text-3xl font-bold text-center mb-8">Meus Pedidos</h1>

      {pedidos.length === 0 ? (
        <p className="text-center text-gray-500">Nenhum pedido pendente.</p>
      ) : (
        pedidos.map((pedido) => (
          <div
            key={pedido.id}
            className="border p-4 mb-4 rounded-xl shadow-md bg-white dark:bg-gray-800"
          >
            <div className="mb-2">
              <p className="text-lg font-semibold">
                Status: <span className="font-normal">{getStatus(pedido)}</span>
              </p>
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
