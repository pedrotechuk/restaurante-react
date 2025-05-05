import React, { useState } from "react";
import logo from "./assets/logo.jpg";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div className="mt-2">
      <header className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <Link to="/" className="block">
                <img src={logo} className="h-16 rounded-full mb-2" alt="Bufalo Logo" />
              </Link>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm font-semibold">
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive
                          ? "text-green-700 font-semibold"
                          : "text-gray-700 transition hover:text-green-700"
                      }
                    >
                      Início
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/lanches"
                      className={({ isActive }) =>
                        isActive
                          ? "text-green-700 font-semibold"
                          : "text-gray-700 transition hover:text-green-700"
                      }
                    >
                      Lanches
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/porcoes"
                      className={({ isActive }) =>
                        isActive
                          ? "text-green-700 font-semibold"
                          : "text-gray-700 transition hover:text-green-700"
                      }
                    >
                      Porções
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/bebidas"
                      className={({ isActive }) =>
                        isActive
                          ? "text-green-700 font-semibold"
                          : "text-gray-700 transition hover:text-green-700"
                      }
                    >
                      Bebidas
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/sobremesas"
                      className={({ isActive }) =>
                        isActive
                          ? "text-green-700 font-semibold"
                          : "text-gray-700 transition hover:text-green-700"
                      }
                    >
                      Sobremesas
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <Link to="/acompanhamento">
                  <button
                    type="button"
                    className="text-green-700 bg-gray-100 hover:bg-gray-200 font-medium rounded-lg text-sm px-2 py-2 text-center"
                  >
                    Meus Pedidos
                  </button>
                </Link>

                <div className="hidden sm:flex">
                  <Link to="/carrinho">
                    <button
                      type="button"
                      className="text-gray-700 bg-gray-100 hover:bg-gray-200 font-medium rounded-full text-sm me-2 px-2 py-2 text-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                        />
                      </svg>
                    </button>
                  </Link>

                  <Link to="/pedidos">
                    <button
                      type="button"
                      className="text-gray-700 bg-gray-100 hover:bg-gray-200 font-medium rounded-full text-sm px-2 py-2 text-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 12c2.5 0 4.5-2 4.5-4.5S14.5 3 12 3 7.5 5 7.5 7.5 9.5 12 12 12zM12 14c-3 0-5.5 1.5-5.5 3.5V20h11v-2.5c0-2-2.5-3.5-5.5-3.5z"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>

              <div className="block md:hidden">
                <button className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
