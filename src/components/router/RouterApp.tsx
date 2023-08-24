import { Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
import { MainPage } from '../../pages/mainPage/MainPage';
import { RegistrationPage } from '../../pages/registrationPage/RegistrationPage';
import { ProductItemPage } from '../../pages/productItemPage/ProductItemPage';
import { UserPage } from '../../pages/userPage/UserPage';
import { BasketPage } from '../../pages/basketPage/BasketPage';
import SignLoginPage from '../../pages/signLoginPage/SignLoginPage';
import { ProductsPage } from '../../pages/productsPage/ProductsPage';
import { AboutPage } from '../../pages/aboutPage/AboutPage';
import { Page404 } from '../../pages/page404/Page404';
import { AuthContext } from '../../context/authContext/AuthContext';

export function RouterApp() {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  return (
    <Routes>
      <Route path="/" element={<SignLoginPage />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/*" element={<Page404 />} />
      {isAuth && <Route path="/products" element={<ProductsPage />} />}
      {isAuth && <Route path="/productItem1111" element={<ProductItemPage />} />}
      {isAuth && <Route path="/user" element={<UserPage />} />}
      {isAuth && <Route path="/basket" element={<BasketPage />} />}
      {isAuth && <Route path="/about" element={<AboutPage />} />}
    </Routes>
  );
}
