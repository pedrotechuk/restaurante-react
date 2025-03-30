import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar';
import Home from './home';
import Footer from './footer';
import Rating from './rating';
import Lanches from "./lanches";
import Bebidas from './bebidas';
import Porcoes from './porcoes';
import Sobremesas from './sobremesas';
import Cadastro from './cadastro';

function App() {
  return (
    <Router>
      <div className='flex flex-col min-h-screen'>
        <Navbar />
        <div className="flex-grow bg-white dark:bg-gray-900">
          <Routes>
            <Route path="/home"element={<><Home /></>}/>
            <Route path="/rating" element={<Rating />} />
            <Route path="/lanches" element={<Lanches />} />
            <Route path="/bebidas" element={<Bebidas />} />
            <Route path="/porcoes" element={<Porcoes />} />
            <Route path="/sobremesas" element={<Sobremesas />} />
            <Route path="/cadastro" element={<Cadastro />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

;

