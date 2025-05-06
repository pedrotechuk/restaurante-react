import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Footer from "./components/Footer";
import Rating from "./pages/rating";
import Lanches from "./pages/lanches";
import Bebidas from "./pages/bebidas";
import Porcoes from "./pages/porcoes";
import Sobremesas from "./pages/sobremesas";
import Cadastro from "./pages/cadastro";
import Carrinho from "./pages/carrinho";
import Acompanhamento from "./pages/Acompanhamento";
import HistoricoPedidos from "./pages/HistoricoPedidos";
import Pedidos from "./pages/Pedidos";
import { CarrinhoProvider } from "./context/CarrinhoContext";

// Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <CarrinhoProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-grow bg-white dark:bg-gray-900">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/acompanhamento" element={<Acompanhamento />} />
              <Route path="/pedidos" element={<Pedidos />} />
              <Route path="/historico" element={<HistoricoPedidos />} />
              <Route path="/rating" element={<Rating />} />
              <Route path="/lanches" element={<Lanches />} />
              <Route path="/bebidas" element={<Bebidas />} />
              <Route path="/porcoes" element={<Porcoes />} />
              <Route path="/sobremesas" element={<Sobremesas />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/carrinho" element={<Carrinho />} />
            </Routes>
          </div>
          <Footer />
        </div>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={true}
          theme="dark"
          pauseOnHover={false}
        />
      </Router>
    </CarrinhoProvider>
  );
}

export default App;
