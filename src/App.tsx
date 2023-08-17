import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ProductsPage } from './pages/productsPage/ProductsPage';
import { AboutPage } from './pages/aboutPage/AboutPage';
import { Navigation } from './components/navigation/Navigation';
import SignLoginPage from './pages/SignLoginPage/SignLoginPage';
import { getToken } from './ecommerceAPI/getToken';

console.log(getToken());

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/autorization" element={<SignLoginPage />} />
      </Routes>
    </>
  );
}

export default App;
