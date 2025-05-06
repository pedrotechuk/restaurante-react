import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const PedidosAtivos = () => {
  const [pedidos, setPedidos] = useState([]);

  const fetchPedidos = async () => {
    const res = await fetch("http://localhost:3001/pedidos?status=pendente");
    const data = await res.json();
    setPedidos(data);
  };

  const iniciarPedido = async (id) => {
    const inicio = new Date().toISOString();
    await fetch(`http://localhost:3001/pedidos/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ inicio }),
    });
    fetchPedidos();
    toast.success("Pedido iniciado!");
  };

  const finalizarPedido = async (id) => {
    const fim = new Date().toISOString();
    await fetch(`http://localhost:3001/pedidos/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fim, status: "finalizado" }),
    });
    fetchPedidos();
    toast.success("Pedido finalizado!");
  };

  useEffect(() => {
    fetchPedidos();
  }, []);

  return (
    <div className="container mx-auto px-4 py-7">
      <div className="flex justify-end mb-4">
        <Link to="/historico">
          <button
            type="button"
            className="text-gray-800 bg-gray-100 hover:bg-gray-200 font-medium rounded-lg text-sm px-2 py-2 text-center"
          >
            Histórico de pedidos
          </button>
        </Link>
      </div>
      <h1 className="text-3xl font-bold text-center mb-8">Pedidos</h1>

      {pedidos.length === 0 ? (
        <p className="text-center text-gray-500">Sem pedidos no momento.</p>
      ) : (
        pedidos.map((pedido) => (
          <div key={pedido.id} className="border p-4 mb-4 rounded shadow">
            <p>
              <strong>ID do Pedido:</strong> {pedido.id}
            </p>
            <ul className="ml-4 list-disc">
              {pedido.itens.map((item, index) => (
                <li key={index}>
                  {item.nome} (x{item.quantidade})
                </li>
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
