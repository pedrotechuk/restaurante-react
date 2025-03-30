import React from "react";

export default function Porcoes() {
  return (
    <div className="container mx-auto px-4 py-10">
      <br/>
      <br/>
      <br/>
      <br/>
      <h1 className="flex items-center justify-center font-bold text-blue-600 ">PORÇÕES</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {/* Batata frita */}
        <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex items-center">
          <img
            src="/assets/batatafrita.jpg"
            alt="Batata"
            className="w-24 h-24 object-cover rounded-md mr-4"
          />
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Porção Batata Frita</h2>
            <p className="text-lg font-bold text-green-600 dark:text-green-400 mt-2">R$ 30,00</p>
            <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Adicionar ao Pedido
            </button>
          </div>
        </div>

        {/* Porção de carne */}
        <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex items-center">
          <img
            src="/assets/carneporc.jpg"
            alt="Coca Cola Lata 300ml"
            className="w-24 h-24 object-cover rounded-md mr-4"
          />
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Porção Alcatra Desfiada</h2>
            <p className="text-lg font-bold text-green-600 dark:text-green-400 mt-2">R$ 68,00</p>
            <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Adicionar ao Pedido
            </button>
          </div>
        </div>

        {/* Porção salada */}
        <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex items-center">
          <img
            src="/assets/porcsalada.jpg"
            alt="Coca Cola 600ml"
            className="w-24 h-24 object-cover rounded-md mr-4"
          />
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Porção de Salada </h2>
            <p className="text-lg font-bold text-green-600 dark:text-green-400 mt-2">R$ 18,00</p>
            <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Adicionar ao Pedido
            </button>
          </div>
        </div>

        {/* Camarão */}
        <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex items-center">
          <img
            src="/assets/porccamarao.jpg"
            alt="Guarana 2lt"
            className="w-24 h-24 object-cover rounded-md mr-4"
          />
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Porção de Camarão</h2>
            <p className="text-lg font-bold text-green-600 dark:text-green-400 mt-2">R$ 108,00</p>
            <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Adicionar ao Pedido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
