const products: any[][] = [];
export const getProducts = async (token: string) => {
  // console.log(client, token);

  const data = await fetch(
    'https://api.australia-southeast1.gcp.commercetools.com/ecommerce-application_1/products?limit=30&&offset=30',
    {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  );
  // .then(res => res.json())
  // .then(
  //   data =>
  // data.results.forEach((element: {}) => {
  //   //const product = element;
  //   const { ...masterData } = element;
  //   const productData = masterData;
  //console.log(products);

  //console.log(data),
  // }
  // ),
  // );
  return await data;
};
