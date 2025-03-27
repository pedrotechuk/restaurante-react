import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar';
import Home from './home';
import Footer from './footer';
import Rating from './rating';

function App() {
  return (
    <Router>
      <div className='flex flex-col min-h-screen'>
        <Navbar />
        <div className="flex-grow bg-white dark:bg-gray-900">
          <Routes>
            <Route
              path="/home"
              element={
                <>
                  <Home />
                </>
              }
            />
            <Route path="/rating" element={<Rating />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

;

