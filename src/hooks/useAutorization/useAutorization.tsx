import { useState } from 'react';

export function useAutorization() {
  const [login, setLogin] = useState(false);

  const changeLoginHandler = () => {
    setLogin(true);
  };

  const changeSignUpHandler = () => {
    setLogin(false);
  };
  return { login, changeLoginHandler, changeSignUpHandler };
}
