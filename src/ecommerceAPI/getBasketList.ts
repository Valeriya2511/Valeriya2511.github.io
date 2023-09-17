export const getBasketList = async (token: string, idCustomer: string) => {
  const data = await fetch(
    `https://api.australia-southeast1.gcp.commercetools.com/ecommerce-application_1/carts/customer-id=${idCustomer}`,

    {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  );
  const dataJson = await data.json();
  return await dataJson.lineItems;
};
