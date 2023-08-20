import InputField from '../UI/InputField/InputField';
import ButtonAutorization from '../UI/ButtonAutorization/ButtonAutorization';
import React from 'react';
import { useAutorization } from '../../hooks/useAutorization/useAutorization';

export default function LoginForm() {
  const { submitHandler } = useAutorization();
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
