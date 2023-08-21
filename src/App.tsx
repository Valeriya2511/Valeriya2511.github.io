import React from 'react';
import { Navigation } from './components/navigation/Navigation';
<<<<<<< HEAD
import SignLoginPage from './pages/signLoginPage/signLoginPage';
=======
>>>>>>> develop
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
