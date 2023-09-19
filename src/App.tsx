import { RouterApp } from './components/router/RouterApp';
import { AuthContext } from './context/authContext/AuthContext';
import { ProductsContext } from './context/productsContext/productsContext';
import { CategoriesContext } from './context/categoriesContext/CategoriesContext';
import { BasketContext } from './context/basketContext/BasketContext';

import Header from './components/layer/header/Header';
import Footer from './components/layer/footer/Footer';
import { useState } from 'react';
import { IRowProduct } from './components/interface/IRowProduct';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [products, setProducts] = useState<[] | IRowProduct[]>([]);
  const [categories, setCategories] = useState([]);
  const [basket, setBasket] = useState({
    id: '',
    totalPrice: { centAmount: 0, currencyCode: '' },
    totalLineItemQuantity: 0,
    lineItems: [],
    customerId: '',
    version: 1,
  });

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
      }}
    >
      <ProductsContext.Provider value={{ products, setProducts }}>
        <CategoriesContext.Provider value={{ categories, setCategories }}>
          <BasketContext.Provider value={{ basket, setBasket }}>
            <Header />
            <RouterApp />
            <Footer />
          </BasketContext.Provider>
        </CategoriesContext.Provider>
      </ProductsContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
