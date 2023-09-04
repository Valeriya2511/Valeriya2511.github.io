export const isLogin = async (client: {}, token: string) => {
  //console.log(client);
  const data = fetch('https://api.australia-southeast1.gcp.commercetools.com/ecommerce-application_1/login', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(client),
  });
  // .then(res => res.json())
  // .then(data => console.log(data));
  return await data;
};

export const storageUser = (event: React.FormEvent) => {
  event.preventDefault();
  const email = Object.keys(localStorage);
  const password = Object.values(localStorage);
  return {
    email: `${email[0]}`,
    password: `${password[0]}`,
  };
};
