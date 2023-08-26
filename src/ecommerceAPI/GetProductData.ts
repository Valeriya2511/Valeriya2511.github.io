export const getProductData = async () => {
  console.log('гет дата продукт');
  const url: string = 'https://api.australia-southeast1.gcp.commercetools.com/ecommerce-application_1/products/';

  const data = await fetch(`${url}`, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + 'wXJKzLGjU8lE3-MzIJlHPeiTbsxBe28M',
      'Content-Type': 'application/x-www-form-urlencoded',
    },

  }).then(res => res.json());

  console.log('авэйт дата продукт', data.results[1].masterData.current.name.en);
  return await data;
};
