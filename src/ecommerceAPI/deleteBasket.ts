export const deleteBasket = async (token: string, idBasket: string, cartVersion: number) => {
  const data = await fetch(
    `https://api.australia-southeast1.gcp.commercetools.com/ecommerce-application_1/me/carts/${idBasket}?version=${cartVersion}`,
    {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
    },
  );
  // return await data.json();}
};
