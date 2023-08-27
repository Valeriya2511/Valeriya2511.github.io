export const getProductData = async () => {
  console.log('гет дата продукт');
  const url: string = 'https://api.australia-southeast1.gcp.commercetools.com/ecommerce-application_1/categories/';

  const data = await fetch(`${url}`, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + 'wXJKzLGjU8lE3-MzIJlHPeiTbsxBe28M',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  
  }).then(res => res.json());
console.log('дата', data);
  console.log('авэйт дата продукт', data.results);
// const {masterVariant} = data.results[1].masterData.current
//   console.log('masterVariant', masterVariant.attributes);
  return await data;
};
