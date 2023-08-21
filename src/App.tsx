import { Navigation } from './components/navigation/Navigation';
import { getToken } from './ecommerceAPI/getToken';
import { RouterApp } from './components/router/RouterApp';
import { AuthContext } from './context/authContext/AuthContext';
import { useState } from 'react';

getToken();
function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
      }}
    >
      <Navigation />
      <RouterApp />
    </AuthContext.Provider>
  );
}

export default App;
