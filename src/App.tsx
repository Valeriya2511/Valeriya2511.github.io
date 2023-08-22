import React from 'react';
import { Navigation } from './components/navigation/Navigation';
import SignLoginPage from './pages/signLoginPage/SignLoginPage';
import { getToken } from './ecommerceAPI/getToken';
import { RouterApp } from './components/router/RouterApp';

getToken();
function App() {
  return (
    <>
      <Navigation />
      <RouterApp />
    </>
  );
}

export default App;
