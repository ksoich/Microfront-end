import * as React from 'react';
import './index.css';

import { Route, Routes, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { ProductPage } from './pages/ProductPage';
import { CartPage } from './pages/CartPage';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/Product" replace />} />
          <Route path="/Product" element={<ProductPage />} />
          <Route path="/Cart" element={<CartPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
