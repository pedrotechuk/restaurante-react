import React, { useEffect, useState } from "react";

const PedidosAtivos = () => {
  const [pedidos, setPedidos] = useState([]);

  const fetchPedidos = async () => {
    try {
      const res = await fetch("http://localhost:3001/pedidos?_sort=id&_order=desc");
      const data = await res.json();
      setPedidos(data);
    } catch (error) {
      console.error("Erro ao buscar pedidos:", error);
    }
  };

  const iniciarPedido = async (id) => {
    const inicio = new Date().toISOString();
    await fetch(`http://localhost:3001/pedidos/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ inicio, status: "andamento" }),
    });
    fetchPedidos();
  };

  const finalizarPedido = async (id) => {
    const fim = new Date().toISOString();
    await fetch(`http://localhost:3001/pedidos/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fim, status: "finalizado" }),
    });
    fetchPedidos();
  };

  useEffect(() => {
    fetchPedidos();
  }, []);

  const getStatusTexto = (pedido) => {
    if (pedido.status === "finalizado") return "Finalizado";
    if (pedido.status === "andamento") return "Em andamento";
    return "Fila";
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Pedidos</h1>
      {pedidos.length === 0 ? (
        <p>Sem pedidos no momento.</p>
      ) : (
        pedidos.map((pedido) => (
          <div key={pedido.id} className="border p-4 mb-4 rounded shadow">
            <p className="font-semibold mb-2">
              Pedido #{pedido.id} -{" "}
              <span className="text-sm text-gray-600">{getStatusTexto(pedido)}</span>
            </p>

            <ul className="ml-4 list-disc">
              {pedido.itens?.map((item, index) => (
                <li key={index}>
                  {item.nome} (x{item.quantidade})
                </li>
              ))}
            </ul>

            <div className="mt-2 flex flex-col gap-2 text-sm text-gray-500">
              {pedido.inicio && (
                <span>Início: {new Date(pedido.inicio).toLocaleString()}</span>
              )}
              {pedido.fim && (
                <span>Fim: {new Date(pedido.fim).toLocaleString()}</span>
              )}
            </div>

            <div className="mt-2 flex gap-2">
              {pedido.status === "fila" && (
                <button
                  className="bg-green-600 text-white px-4 py-1 rounded"
                  onClick={() => iniciarPedido(pedido.id)}
                >
                  Iniciar Pedido
                </button>
              )}
              {pedido.status === "andamento" && (
                <button
                  className="bg-blue-600 text-white px-4 py-1 rounded"
                  onClick={() => finalizarPedido(pedido.id)}
                >
                  Finalizar Pedido
                </button>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default PedidosAtivos;
