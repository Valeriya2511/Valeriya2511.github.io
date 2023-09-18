export const removeLineItem = async (
  token: string,
  cartsId: string,
  lineItemId: string,
  version: number,
  quantity: number,
) => {
  const data = await fetch(
    `https://api.australia-southeast1.gcp.commercetools.com/ecommerce-application_1/me/carts/${cartsId}`,
    {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        version: version,
        actions: [
          {
            action: 'removeLineItem',
            lineItemId: lineItemId,
            quantity: quantity,
          },
        ],
      }),
    },
  );
  return await data.json();
};
