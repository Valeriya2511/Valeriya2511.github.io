import { useContext, useState } from 'react';
import InputField from '../UI/InputField/InputField';
import ButtonAutorization from '../UI/ButtonAutorization/ButtonAutorization';
import { useAutorization } from '../../hooks/useAutorization/useAutorization';
// import { IFormProps } from '../LoginForm/LoginForm';
import { getToken } from '../../ecommerceAPI/getToken';
import { postClient } from '../../ecommerceAPI/postCustomers';
import { AuthContext } from '../../context/authContext/AuthContext';
import { Navigate } from 'react-router-dom';

export default function SignUpForm() {
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
        await postClient(userData, access_token);
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
