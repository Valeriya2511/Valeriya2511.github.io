import InputField from '../UI/InputField/InputField';
import ButtonAutorization from '../UI/ButtonAutorization/ButtonAutorization';
import React from 'react';
import { useAutorization } from '../../hooks/useAutorization/useAutorization';
import { AuthContext } from '../../context/authContext/AuthContext';
import { useContext } from 'react';
import { Navigate } from "react-router-dom";

export default function LoginForm() {
  const { submitHandler } = useAutorization();
  const { isAuth } = useContext(AuthContext);

  if (isAuth) {
    return <Navigate replace to="/main" />
  }
  
  return (
    <form onSubmit={submitHandler}>
      <p>
        <InputField type="email" name="email" placeholder="Login email" />
      </p>
      <p>
        <InputField type="password" name="password" placeholder="Password" />
      </p>
      <p>
        <ButtonAutorization type="submit" children="Login" />
      </p>
    </form>
  );
}
