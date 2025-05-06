import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Rating from "./pages/Rating";
import Lanches from "./pages/Burgers";
import Bebidas from "./pages/Drinks";
import Porcoes from "./pages/Portions";
import Sobremesas from "./pages/Sweets";
import Carrinho from "./pages/Cart";
import Acompanhamento from "./pages/OrderStatus";
import HistoricoPedidos from "./pages/Historic";
import Pedidos from "./pages/Requests";
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
