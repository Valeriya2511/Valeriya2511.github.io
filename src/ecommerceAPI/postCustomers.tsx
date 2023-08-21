import { getToken } from './getToken';
import { useAutorization } from '../hooks/useAutorization/useAutorization';
import env from 'react-dotenv';

const postCustomer = async (token: Promise<string>, userData: {}) => {
  const { token_type: string, access_token } = token;
  const postData = await fetch(`${env.API_URL}/${env.PROJECT_KEY}/customers`, {
    method: 'POST',
    headers: {
      Authorization: `${token_type} ${access_token}`,
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  })
    .then(response => response.json())
    .then(data => console.log(data));
};
