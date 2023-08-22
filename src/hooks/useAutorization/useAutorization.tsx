import { useState } from 'react';

export function useAutorization() {
  const [login, setLogin] = useState(false);

  const [value, setValue] = useState('');

  const changeLoginHandler = () => {
    setLogin(true);
  };

  const changeSignUpHandler = () => {
    setLogin(false);
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(document.forms[0]);
    const userData = {
      firstName: '',
      email: '',
      password: '',
    };
    userData.firstName = `${formData.get('name')}`;
    userData.email = `${formData.get('email')}`;
    userData.password = `${formData.get('password')}`;
    localStorage.setItem(`${userData.email}`, `${userData.password}`);
    return console.log(userData);
  };

  return { login, changeLoginHandler, changeSignUpHandler, submitHandler };
}
