export const createCart = async (token: string) => {
  const data = await fetch('https://api.australia-southeast1.gcp.commercetools.com/ecommerce-application_1/me/carts', {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ currency: 'EUR' }),
  });
  return await data;
};
