import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import bg from "../assets/bg.png";

const Home = () => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    const minutes = now.getMinutes();

    const isDayValid = day !== 1;
    const isTimeValid =
      hour >= 19 && (hour < 22 || (hour === 22 && minutes === 0));

    setIsOpen(isDayValid && isTimeValid);
  }, []);

  return (
    <div>
      <header
        className="w-full h-[420px] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="w-full h-full flex flex-col justify-center items-center bg-black/50">
          <img
            src={logo}
            alt="Bufalo Logo"
            className="w-32 h-32 rounded-full shadow-lg hover:scale-110 duration-200"
          />

          <h1 className="text-4xl mt-4 mb-2 font-bold text-white">
            Buffalo Burger
          </h1>

          <span className="text-white font-medium">
            Rua do Hotel Santa Maria, Wenceslau Braz - PR
          </span>

          <div
            className={`px-4 py-1 rounded-lg mt-5 ${
              isOpen ? "bg-green-600" : "bg-red-600"
            }`}
            id="date-span"
          >
            <span className="text-white font-medium">
              Terça a Domingo - 19:00 às 22:00
            </span>
          </div>
        </div>
      </header>

      <h2 className="text-2xl md:text-3xl font-bold text-center mt-9 mb-16">
        Conheça nosso menu!
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
        {[
          {
            name: "Buffalo Burger",
            img: "assets/hamb-1.png",
            desc: "Pão Selado, Maionese da Casa, 1 Hamburguer Artesanal de Carne e Bacon, Queijo",
          },
          {
            name: "Buffalo Casual",
            img: "assets/hamb-2.png",
            desc: "Pão Selado, Maionese da Casa, 1 Hamburguer Artesanal de Carne e Bacon, Queijo, Alface e Tomate",
          },
          {
            name: "Buffalo Smash",
            img: "assets/hamb-3.png",
            desc: "Pão Selado, Maionese da Casa, 1 Hamburguer Artesanal de Carne e Bacon, Queijo e Cebola Caramelizada",
          },
          {
            name: "Buffalo Egg",
            img: "assets/hamb-4.png",
            desc: "Pão Selado, Maionese da Casa, 1 Hamburguer Artesanal de Carne e Bacon, Queijo, Alface e Tomate e Ovo Frito",
          },
          {
            name: "Buffalo Chicken",
            img: "assets/hamb-5.png",
            desc: "Pão Selado, Maionese da Casa, 1 Hamburguer Artesanal de Carne e Bacon, Queijo, Alface, Tomate e Frango em Pedaços",
          },
          {
            name: "Buffalo Bacon BBQ",
            img: "assets/hamb-6.png",
            desc: "Pão Selado, Maionese da Casa, 1 Hamburguer Artesanal de Carne e Bacon, Queijo, Cebola Caramelizada e Bacon",
          },
        ].map((item, index) => (
          <div key={index} className="flex gap-2 items-start">
            <img
              src={item.img}
              alt={item.name}
              className="w-28 h-28 rounded-md hover:scale-110 hover:rotate-2 duration-300"
            />

            <div className="flex flex-col justify-between">
              <div>
                <p className="font-bold">{item.name}</p>
                <p className="text-sm">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10 mb-10">
        <Link
          to="/lanches"
          className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-2 rounded shadow"
        >
          Ver mais
        </Link>
      </div>
    </div>
  );
};

export default Home;
