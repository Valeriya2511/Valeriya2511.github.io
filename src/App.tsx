import { RouterApp } from './components/router/RouterApp';
import { AuthContext } from './context/authContext/AuthContext';
import { ProductsContext } from './context/productsContext/productsContext';
import Header from './components/layer/header/Header';
import Footer from './components/layer/footer/Footer';
import { useState } from 'react';
function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [products, setProducts] = useState([]);
  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
      }}
    >
      <ProductsContext.Provider value={{ products, setProducts }}>
        <Header />
        <RouterApp />
        <Footer />
      </ProductsContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
