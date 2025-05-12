import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { Clock, ShoppingCart } from "lucide-react"; // Ícones

const Dashboard = () => {
  const [pedidos, setPedidos] = useState([]);
  const [avaliacoes, setAvaliacoes] = useState([]);
  const [topLanches, setTopLanches] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/pedidos")
      .then((res) => res.json())
      .then((data) => {
        setPedidos(data);
        calcularTopLanches(data);
      });

    fetch("http://localhost:3001/avaliacoes")
      .then((res) => res.json())
      .then((data) => setAvaliacoes(data));
  }, []);

  const calcularTopLanches = (pedidos) => {
    const contagem = {};
    pedidos.forEach((pedido) => {
      pedido.itens.forEach((item) => {
        contagem[item.nome] = (contagem[item.nome] || 0) + item.quantidade;
      });
    });
    const top = Object.entries(contagem)
      .map(([nome, quantidade]) => ({ nome, quantidade }))
      .sort((a, b) => b.quantidade - a.quantidade)
      .slice(0, 5);
    setTopLanches(top);
  };

  const pedidosHoje = pedidos.filter((p) => {
    const hoje = new Date();
    const dataPedido = new Date(p.inicio);
    return (
      dataPedido.getDate() === hoje.getDate() &&
      dataPedido.getMonth() === hoje.getMonth() &&
      dataPedido.getFullYear() === hoje.getFullYear()
    );
  });

  const tempoMedio = (() => {
    const tempos = pedidos
      .filter((p) => p.inicio && p.fim)
      .map((p) => {
        const inicio = new Date(p.inicio);
        const fim = new Date(p.fim);
        return (fim - inicio) / 60000; // minutos
      });
    if (tempos.length === 0) return 0;
    const media = tempos.reduce((a, b) => a + b, 0) / tempos.length;
    return media.toFixed(2);
  })();

  const statusData = [
    {
      name: "Pendentes",
      value: pedidos.filter((p) => p.status === "pendente").length,
    },
    {
      name: "Finalizados",
      value: pedidos.filter((p) => p.status === "finalizado").length,
    },
  ];

  const COLORS = ["#FFBB28", "#00C49F"];

  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Card: Pedidos de Hoje */}
      <div className="bg-white p-6 rounded-2xl shadow flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold mb-2">Pedidos de Hoje</h2>
          <p className="text-4xl font-semibold">{pedidosHoje.length}</p>
        </div>
        <div className="bg-yellow-100 p-3 rounded-full text-yellow-600">
          <ShoppingCart size={32} />
        </div>
      </div>

      {/* Card: Tempo médio */}
      <div className="bg-white p-6 rounded-2xl shadow flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold mb-2">Tempo médio de preparo</h2>
          <p className="text-4xl font-semibold">{tempoMedio} min</p>
        </div>
        <div className="bg-green-100 p-3 rounded-full text-green-600">
          <Clock size={32} />
        </div>
      </div>

      {/* Gráficos lado a lado */}
      <div className="bg-white p-6 rounded-2xl shadow col-span-1 md:col-span-2">
        <h2 className="text-xl font-bold mb-4">Top 5 Produtos e Status dos Pedidos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Gráfico de Barras */}
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={topLanches} layout="vertical">
              <XAxis type="number" />
              <YAxis
                dataKey="nome"
                type="category"
                width={150}
                tick={{ fontSize: 12 }}
              />
              <Tooltip />
              <Bar dataKey="quantidade" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>

          {/* Gráfico de Pizza */}
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={statusData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {statusData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
