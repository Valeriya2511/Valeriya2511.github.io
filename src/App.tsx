import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ProductsPage } from './pages/productsPage/ProductsPage';
import { AboutPage } from './pages/aboutPage/AboutPage';
import { Navigation } from './components/navigation/Navigation';
import { TodoPage } from './pages/Todo';
function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/todo" element={<TodoPage />} />
      </Routes>
    </>
  );
}

export default App;
