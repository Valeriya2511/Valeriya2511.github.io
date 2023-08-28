export const getProducts = async (token: string) => {
  // console.log(client, token);
  const data = await fetch(
    'https://api.australia-southeast1.gcp.commercetools.com/ecommerce-application_1/products?limit=30',
    {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  )
    .then(res => res.json())
    .then(data => console.log(data.results));
  return await data;
};
