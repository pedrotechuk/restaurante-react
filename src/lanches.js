import React from "react";

export default function Lanches() {
  return (
    
    <div className="container mx-auto px-4 py-10">
      <br/>
      <br/>
      <br/>
      <br/>
      <h1 className="flex items-center justify-center font-bold text-blue-600 ">LANCHES</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {/* X-Bacon */}
        <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex items-center">
          <img
            src="/assets/hamb-3.png"
            alt="X-Bacon"
            className="w-24 h-24 object-cover rounded-md mr-4"
          />
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">X-Bacon</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Pão, hambúrguer artesanal, bacon, queijo e molho especial.
            </p>
            <p className="text-lg font-bold text-green-600 dark:text-green-400 mt-2">R$ 25,90</p>
            <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Adicionar ao Pedido
            </button>
          </div>
        </div>

        {/* X-Salada */}
        <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex items-center">
          <img
            src="/assets/hamb-4.png"
            alt="X-Salada"
            className="w-24 h-24 object-cover rounded-md mr-4"
          />
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">X-Salada</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Pão, hambúrguer artesanal, alface, tomate, queijo e maionese.
            </p>
            <p className="text-lg font-bold text-green-600 dark:text-green-400 mt-2">R$ 22,90</p>
            <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Adicionar ao Pedido
            </button>
          </div>
        </div>

        {/* X-Tudo */}
        <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex items-center">
          <img
            src="/assets/hamb-1.png"
            alt="X-Tudo"
            className="w-24 h-24 object-cover rounded-md mr-4"
          />
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">X-Tudo</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Pão, hambúrguer, ovo, bacon, presunto, queijo e molho especial.
            </p>
            <p className="text-lg font-bold text-green-600 dark:text-green-400 mt-2">R$ 29,90</p>
            <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Adicionar ao Pedido
            </button>
          </div>
        </div>

        {/* X-Frango */}
        <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex items-center">
          <img
            src="/assets/hamb-2.png"
            alt="X-Frango"
            className="w-24 h-24 object-cover rounded-md mr-4"
          />
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">X-Frango</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Pão, filé de frango, queijo, alface e molho especial.
            </p>
            <p className="text-lg font-bold text-green-600 dark:text-green-400 mt-2">R$ 24,90</p>
            <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Adicionar ao Pedido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
