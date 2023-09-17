export const queryCartsId = async (token: string) => {
  
  const data = await fetch(`https://api.australia-southeast1.gcp.commercetools.com/ecommerce-application_1/me/carts`, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json'
      }
    }
  )
  return await data.json();
};