import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ProductsPage } from './pages/productsPage/ProductsPage';
import { AboutPage } from './pages/aboutPage/AboutPage';
import { Navigation } from './components/navigation/Navigation';
import SignLoginPage from './pages/signLoginPage/signLoginPage';
import { getToken } from './ecommerceAPI/getToken';
import { MainPage } from './pages/mainPage/MainPage';
import { RegistrationPage } from './pages/registrationPage/RegistrationPage';
import { ProductItemPage } from './pages/productItemPage/ProductItemPage';
import { UserPage } from './pages/userPage/UserPage';
import { BasketPage } from './pages/basketPage/BasketPage';

// getToken();

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<SignLoginPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/productItem1111" element={<ProductItemPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/basket" element={<BasketPage />} />
      </Routes>
    </>
  );
}

export default App;
