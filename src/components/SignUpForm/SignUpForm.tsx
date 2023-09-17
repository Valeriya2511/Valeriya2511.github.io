import { FormEvent, useContext, useState } from 'react';
import InputField from '../UI/InputField/InputField';
import ButtonAutorization from '../UI/ButtonAutorization/ButtonAutorization';
import { useAutorization } from '../../hooks/useAutorization/useAutorization';
import { postClient } from '../../ecommerceAPI/postCustomers';
import { AuthContext } from '../../context/authContext/AuthContext';
import { Navigate } from 'react-router-dom';
import { getToken } from '../../ecommerceAPI/getToken';
import { createCart } from '../../ecommerceAPI/createCart';
import { getTokenPSWDflow } from '../../ecommerceAPI/getTokenPSWDflow';

export default function SignUpForm() {
  const [isDisabled, setIsDisabled] = useState(true);
  const { submitHandler } = useAutorization();
  const { isAuth, setIsAuth } = useContext(AuthContext);
  if (isAuth) {
    return <Navigate replace to="/main" />;
  }
  function saveToken(event: FormEvent<HTMLFormElement>) {
    throw new Error('Function not implemented.');
  }

  async function tokenCreateCustomer(userData: {}) {
    const token = await getToken();
    const { access_token } = await token.json();
    await postClient(userData, `${access_token}`);
  }
  async function tokenCreatedCustomer(userData: { email: string; password: string }) {
    const { email, password } = userData;
    const tokenPSWDdata = await getTokenPSWDflow(`${email}`, `${password}`);
    const { access_token } = await tokenPSWDdata.json();
    await localStorage.setItem('tokenPSWD', `${access_token}`);
  }

  return (
    <form
      onSubmit={async event => {
        const userData = await submitHandler(event);
        await tokenCreateCustomer(userData);
        //wait saveToken(event);
        await tokenCreatedCustomer(userData);
        //await localStorage.setItem('access_token', `${access_token}`);
        await createCart(`${localStorage.getItem('tokenPSWD')}`);

        setIsAuth(true);
      }}
      autoComplete="off"
    >
      <p>
        <InputField type="text" name="name" placeholder="You name" isDisabled={setIsDisabled} />
      </p>
      <p>
        <InputField type="email" name="email" placeholder="Email" isDisabled={setIsDisabled} />
      </p>
      <p>
        <InputField type="password" name="password" placeholder="Password" isDisabled={setIsDisabled} />
      </p>
      <p>
        <ButtonAutorization type="submit" children="Registration" disabled={isDisabled} />
      </p>
    </form>
  );
}
