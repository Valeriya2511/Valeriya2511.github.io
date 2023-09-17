export const addLineItem = async (token: string, cartsId: string, productId: string, version: number) => {
  
  const data = await fetch(`https://api.australia-southeast1.gcp.commercetools.com/ecommerce-application_1/me/carts/${cartsId}`, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json'
      },
			body: JSON.stringify({
				"version" : version,
				"actions" : [ {
					"action" : "addLineItem",
					"productId" : productId,
					"variantId" : 1,
					"quantity" : 1
				} ]
			})
    }
  )
  return await data.json();
};