import React from "react";

export default function Sobremesas() {
  return (
    <div className="container mx-auto px-4 py-10">
      <br/>
      <br/>
      <br/>
      <br/>
      <h1 className="flex items-center justify-center font-bold text-blue-600 ">SOBREMESAS</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {/* Bolo de chocolate */}
        <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex items-center">
          <img
            src="/assets/bolosobremesa.jpg"
            alt="Bolo de chocolate"
            className="w-24 h-24 object-cover rounded-md mr-4"
          />
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Bolo Chocolate </h2>
            <p className="text-lg font-bold text-green-600 dark:text-green-400 mt-2">R$ 30,00</p>
            <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Adicionar ao Pedido
            </button>
          </div>
        </div>

        {/* Mousse maracuja */}
        <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex items-center">
          <img
            src="/assets/moussemaracuja.jpg"
            alt="Mousse maracujá"
            className="w-24 h-24 object-cover rounded-md mr-4"
          />
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Mousse Maracujá</h2>
            <p className="text-lg font-bold text-green-600 dark:text-green-400 mt-2">R$ 20,00</p>
            <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Adicionar ao Pedido
            </button>
          </div>
        </div>

        {/* Mousse de Chocolate */}
        <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex items-center">
          <img
            src="/assets/moussechocolate.jpg"
            alt="Coca Cola 600ml"
            className="w-24 h-24 object-cover rounded-md mr-4"
          />
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Mousse de Chocolate </h2>
            <p className="text-lg font-bold text-green-600 dark:text-green-400 mt-2">R$ 18,00</p>
            <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Adicionar ao Pedido
            </button>
          </div>
        </div>

        {/* Prestigio */}
        <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex items-center">
          <img
            src="/assets/prestigio.jpg"
            alt="Prestigio"
            className="w-24 h-24 object-cover rounded-md mr-4"
          />
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Prestigio</h2>
            <p className="text-lg font-bold text-green-600 dark:text-green-400 mt-2">R$ 6,00</p>
            <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Adicionar ao Pedido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
