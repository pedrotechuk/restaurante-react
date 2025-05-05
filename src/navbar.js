import React, { useState } from "react";
import logo from "./assets/logo.jpg";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useCarrinho } from "./context/CarrinhoContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mostrarModalSenha, setMostrarModalSenha] = useState(false);
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const { quantidadeTotal } = useCarrinho();

  const verificarSenha = () => {
    if (senha === "admin") {
      setMostrarModalSenha(false);
      setSenha("");
      setErro("");
      navigate("/pedidos");
    } else {
      setErro("Senha incorreta.");
    }
  };

  return (
    <div className="mt-2">
      <header className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <Link to="/" className="block">
                <img
                  src={logo}
                  className="h-16 rounded-full mb-2"
                  alt="Bufalo Logo"
                />
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
                      className="text-gray-700 bg-gray-100 hover:bg-gray-200 font-medium rounded-full text-sm me-2 px-2 py-2 text-center relative"
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

                      {quantidadeTotal > 0 && (
                        <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                          {quantidadeTotal}
                        </span>
                      )}
                    </button>
                  </Link>

                  <button
                    type="button"
                    onClick={() => setMostrarModalSenha(true)}
                    className="text-gray-700 bg-gray-100 hover:bg-gray-200 font-medium rounded-full text-sm px-2 py-2 text-center"
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
                        d="M12 12c2.5 0 4.5-2 4.5-4.5S14.5 3 12 3 7.5 5 7.5 7.5 9.5 12 12 12zM12 14c-3 0-5.5 1.5-5.5 3.5V20h11v-2.5c0-2-2.5-3.5-5.5-3.5z"
                      />
                    </svg>
                  </button>
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
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Modal de senha */}
      {mostrarModalSenha && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-lg font-semibold mb-4">Digite a senha:</h2>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded mb-2"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Senha"
              onKeyDown={(e) => e.key === "Enter" && verificarSenha()}
            />
            {erro && <p className="text-red-500 text-sm mb-2">{erro}</p>}
            <div className="flex justify-end gap-2">
              <button
                onClick={() => {
                  setMostrarModalSenha(false);
                  setSenha("");
                  setErro("");
                }}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                Cancelar
              </button>
              <button
                onClick={verificarSenha}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Entrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
