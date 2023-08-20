import { Routes, Route } from 'react-router-dom';
import { MainPage } from '../../pages/mainPage/MainPage';
import { RegistrationPage } from '../../pages/registrationPage/RegistrationPage';
import { ProductItemPage } from '../../pages/productItemPage/ProductItemPage';
import { UserPage } from '../../pages/userPage/UserPage';
import { BasketPage } from '../../pages/basketPage/BasketPage';
import { privatRoutesList } from '../../components/router/RoutsList';
import SignLoginPage from '../../pages/signLoginPage/SignLoginPage';
import { ProductsPage } from '../../pages/productsPage/ProductsPage';
import { AboutPage } from '../../pages/aboutPage/AboutPage';

export function RouterApp() {
  const isAuth: boolean = true;
  return (
    <Routes>
      <Route path="/" element={<SignLoginPage />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
      {isAuth && <Route path="/products" element={<ProductsPage />} />}
      {isAuth && <Route path="/productItem1111" element={<ProductItemPage />} />}
      {isAuth && <Route path="/user" element={<UserPage />} />}
      {isAuth && <Route path="/basket" element={<BasketPage />} />}
      {isAuth && <Route path="/about" element={<AboutPage />} />}
    </Routes>
  );
}
