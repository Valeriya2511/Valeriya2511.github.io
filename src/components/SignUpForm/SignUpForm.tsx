import { useContext } from 'react';
import InputField from '../UI/InputField/InputField';
import ButtonAutorization from '../UI/ButtonAutorization/ButtonAutorization';
import { useAutorization } from '../../hooks/useAutorization/useAutorization';
import { getToken } from '../../ecommerceAPI/getToken';
import { postClient } from '../../ecommerceAPI/postCustomers';
import { AuthContext } from '../../context/authContext/AuthContext';

export default function SignUpForm() {
  const { submitHandler } = useAutorization();
  const { setIsAuth } = useContext(AuthContext);
  return (
    <form
      onSubmit={async event => {
        const userData = await submitHandler(event);
        const tokenData = await getToken();
        const { access_token, token_type } = await tokenData.json();
        await postClient(userData, access_token);
        setIsAuth(true);
      }}
    >
      <p>
        <InputField type="text" name="name" placeholder="You name" />
      </p>
      <p>
        <InputField type="email" name="email" placeholder="Email" />
      </p>
      <p>
        <InputField type="password" name="password" placeholder="Password" />
      </p>
      <p>
        <ButtonAutorization type="submit" children="Registration" />
      </p>
    </form>
  );
}
