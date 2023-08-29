import { useState, useContext } from 'react';
import { AuthContext } from '../../context/authContext/AuthContext';

export function useAutorization() {
  const [login, setLogin] = useState(false);
  const { setIsAuth } = useContext(AuthContext);
  const changeLoginHandler = () => {
    setLogin(true);
  };

  const changeSignUpHandler = () => {
    setLogin(false);
  };

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsAuth(true);
    const formData = new FormData(document.forms[0]);
    const userData = {
      firstName: '',
      email: '',
      password: '',
    };
    userData.firstName = `${formData.get('name')}`;
    userData.email = `${formData.get('email')}`;
    userData.password = `${formData.get('password')}`;
    // localStorage.setItem(`${userData.email}`, `${userData.password}`);
    return userData;
  };
  return { login, changeLoginHandler, changeSignUpHandler, submitHandler };
}
