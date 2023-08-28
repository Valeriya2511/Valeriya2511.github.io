import { Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
import { MainPage } from '../../pages/mainPage/MainPage';
import { ProductItemPage } from '../../pages/productItemPage/ProductItemPage';
import { UserPage } from '../../pages/userPage/UserPage';
import { BasketPage } from '../../pages/basketPage/BasketPage';
import SignLoginPage from '../../pages/signLoginPage/SignLoginPage';
import { ProductsPage } from '../../pages/productsPage/ProductsPage';
import { AboutPage } from '../../pages/aboutPage/AboutPage';
import { Page404 } from '../../pages/page404/Page404';
import { AuthContext } from '../../context/authContext/AuthContext';
import styles from './RouterApp.module.css';

export function RouterApp() {
  const { isAuth } = useContext(AuthContext);
  return (
    <main className={styles.main}>
      <Routes>
        <Route path="/" element={<SignLoginPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="*" element={<Page404 />} />
        {isAuth && <Route path="/products" element={<ProductsPage />} />}
        {isAuth && <Route path="/productItem1111" element={<ProductItemPage />} />}
        {isAuth && <Route path="/user" element={<UserPage />} />}
        {isAuth && <Route path="/basket" element={<BasketPage />} />}
        {isAuth && <Route path="/about" element={<AboutPage />} />}
        {isAuth && <Route path="/productItem" element={<ProductItemPage />} />}
      </Routes>
    </main>
  );
}
