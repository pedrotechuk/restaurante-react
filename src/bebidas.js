import React from "react";

export default function Bebidas() {
  return (
    <div className="container mx-auto px-4 py-10">
      <br/>
      <br/>
      <br/>
      <br/>
      <h1 className="flex items-center justify-center font-bold text-blue-600 ">BEBIDAS</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {/* spaten */}
        <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex items-center">
          <img
            src="/assets/spaten.jpg"
            alt="X-Bacon"
            className="w-24 h-24 object-cover rounded-md mr-4"
          />
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Cerveja Spaten</h2>
            <p className="text-lg font-bold text-green-600 dark:text-green-400 mt-2">R$ 7,00</p>
            <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Adicionar ao Pedido
            </button>
          </div>
        </div>

        {/* Coca lata */}
        <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex items-center">
          <img
            src="/assets/refri-1.png"
            alt="Coca Cola Lata 300ml"
            className="w-24 h-24 object-cover rounded-md mr-4"
          />
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Coca Cola Lata 300ml</h2>
            <p className="text-lg font-bold text-green-600 dark:text-green-400 mt-2">R$ 4,00</p>
            <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Adicionar ao Pedido
            </button>
          </div>
        </div>

        {/* Coca cola 600ml */}
        <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex items-center">
          <img
            src="/assets/coca600.jpg"
            alt="Coca Cola 600ml"
            className="w-24 h-24 object-cover rounded-md mr-4"
          />
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Coca Cola 600ml</h2>
            <p className="text-lg font-bold text-green-600 dark:text-green-400 mt-2">R$ 8,00</p>
            <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Adicionar ao Pedido
            </button>
          </div>
        </div>

        {/* Guarana 2lt */}
        <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex items-center">
          <img
            src="/assets/guarana2lt.jpg"
            alt="Guarana 2lt"
            className="w-24 h-24 object-cover rounded-md mr-4"
          />
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Guarana 2lt</h2>
            <p className="text-lg font-bold text-green-600 dark:text-green-400 mt-2">R$ 10,00</p>
            <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Adicionar ao Pedido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
