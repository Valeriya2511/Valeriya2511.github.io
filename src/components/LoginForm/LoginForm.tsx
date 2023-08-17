import InputField from '../UI/InputField/InputField';
import ButtonAutorization from '../UI/ButtonAutorization/ButtonAutorization';
import React from 'react';
// export interface IFormProps {
//   value: string;
//   onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
// }
export default function LoginForm() {
  return (
    <form>
      <p>
        <InputField type="email" name="email" placeholder="Login email" />
      </p>
      <p>
        <InputField type="password" name="password" placeholder="Password" />
      </p>
      <p>
        <ButtonAutorization type="submit" children="Login" onClick={() => {}} />
      </p>
    </form>
  );
}
