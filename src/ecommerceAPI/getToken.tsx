import env from 'react-dotenv';
import axios from 'axios';

export const getToken = async () => {
  const data = await fetch(`${env.AUTH_URL}/oauth/token?grant_type=client_credentials&scope=${env.SCOPES}`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${env.AUTORIZATION}`,
    },
  });
  const token = data.json();
  return console.log(token);
};
