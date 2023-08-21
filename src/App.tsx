import React from 'react';
import { Navigation } from './components/navigation/Navigation';
import { getToken } from './ecommerceAPI/getToken';
import { RouterApp } from './components/router/RouterApp';
// let token1: string;

// token1 = getToken();
// console.log(token1);

function App() {
  return (
    <>
      <Navigation />
      <RouterApp />
    </>
  );
}

export default App;
