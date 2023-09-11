import InputField from '../UI/InputField/InputField';
import ButtonAutorization from '../UI/ButtonAutorization/ButtonAutorization';
import React, { useContext, useState } from 'react';
import { useAutorization } from '../../hooks/useAutorization/useAutorization';
import { AuthContext } from '../../context/authContext/AuthContext';
import { Navigate } from 'react-router-dom';
import { getToken } from '../../ecommerceAPI/getToken';
import { isLogin } from '../../ecommerceAPI/isLogin';

export default function LoginForm() {
  const [isDisabled, setIsDisabled] = useState(true);
  const { submitHandler } = useAutorization();
  const { isAuth, setIsAuth } = useContext(AuthContext);

  if (isAuth) {
    return <Navigate replace to="/main" />;
  }

  return (
    <form
      onSubmit={async event => {
        const userData = await submitHandler(event);
        const tokenData = await getToken();
        const { access_token } = await tokenData.json();
        const status = await isLogin(userData, access_token);
        const user = await status.json();

        if ((await String(status.status)) === '200') {
          alert(`Hello ${user.customer.firstName}, we know you)`);
          setIsAuth(true);
          //console.log(await String(status));
          //console.log(await user);
        } else {
          setIsAuth(false);
          //console.log(await String(status));
          alert('The user with this username or password was not found. Please check the data.');
        }
      }}
      autoComplete="off"
    >
      <p>
        <InputField type="email" name="email" placeholder="Login email" isDisabled={setIsDisabled} />
      </p>
      <p>
        <InputField type="password" name="password" placeholder="Password" isDisabled={setIsDisabled} />
      </p>
      <p>
        <ButtonAutorization type="submit" children="Login" disabled={isDisabled} />
      </p>
    </form>
  );
}
