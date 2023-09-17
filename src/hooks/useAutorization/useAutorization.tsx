import { useState } from 'react';
import { getToken } from '../../ecommerceAPI/getToken';
export function useAutorization() {
  const [login, setLogin] = useState(false);
  const changeLoginHandler = () => {
    setLogin(true);
  };

  const changeSignUpHandler = () => {
    setLogin(false);
  };

  const saveToken = async (event: React.FormEvent) => {
    const tokenData = await getToken();
    const { access_token } = await tokenData.json();
    localStorage.setItem('access_token', access_token);
  };

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    //setIsAuth(true);
    const formData = new FormData(document.forms[0]);
    const userData = {
      firstName: '',
      email: '',
      password: '',
    };
    userData.firstName = `${formData.get('name')}`;
    userData.email = `${formData.get('email')}`;
    userData.password = `${formData.get('password')}`;
    localStorage.setItem('email', `${userData.email}`);
    localStorage.setItem('password', `${userData.password}`);
    return userData;
  };
  return { login, changeLoginHandler, changeSignUpHandler, submitHandler, saveToken };
}
