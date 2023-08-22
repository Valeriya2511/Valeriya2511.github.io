import {getToken} from './getToken';
import { useAutorization } from '../hooks/useAutorization/useAutorization';
import env from 'react-dotenv';


export const postCreateCustomer = async (event: React.FormEvent) => {

  const { submitHandler } = useAutorization();
  event.preventDefault();
  const data = await fetch(`${env.API_URL}/${env.PROJECT_KEY}/customers`, {
    method: 'POST',
    headers: {
		'Authorization': `${getToken}`,
		'Content-Type': 'application/json;charset=utf-8'
	},
  body: JSON.stringify(submitHandler)
  });
  const autorization = await data.json();
  console.log(autorization);
};

// fetch(`${env.API_URL}/${env.PROJECT_KEY}/customers`, {
// 	method: 'POST',
//     headers: {
// 		'Authorization': `${token_type} ${access_token}`,
// 		'Content-Type': 'application/json;charset=utf-8'
// 	},
// 	body: JSON.stringify(user)
// }).then(res=>res.json()).then(data=>console.log(data))