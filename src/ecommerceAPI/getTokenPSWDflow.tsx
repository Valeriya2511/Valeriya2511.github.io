export const getTokenPSWDflow = async (email: string, password: string) => {
  const codeStr = window.btoa('EJHaCeyUqN60PpaC0MPC80Ls:BnVI1t9pXw6HoOCZ37A-YjmiNYmYpkgG');
  const data = await fetch(
    `https://auth.australia-southeast1.gcp.commercetools.com/oauth/ecommerce-application_1/customers/token?grant_type=password&username=${email}&password=${password}`,
    {
      method: 'POST',
      headers: {
        Authorization: 'Basic ' + codeStr,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  );
  // .then(res => res.json())
  // .then(data => console.log(data));
  // console.log('getTokenPSWDflow', await data.json);
  return await data;
};

// `https://auth.australia-southeast1.gcp.commercetools.com/oauth/ecommerce-application_1/customers/token?grant_type=password&username=${email}&password=${password}&scope=manage_project:ecommerce-application_1`,

// fetch('https://api.australia-southeast1.gcp.commercetools.com/ecommerce-application_1/customers/', {
//   method: 'POST',
//   headers: {
//     Authorization: 'Bearer ',
//     'Content-Type': 'application/x-www-form-urlencoded',
//   },
//   body: JSON.stringify({
//     firstName: 'vasyaName',
//     email: 'vasyaName@mail.ru',
//     password: 'TTss@@22',
//   }),
// })
//   .then(res => res.json())
//   .then(data => console.log(data));

// fetch(
//   'https://auth.australia-southeast1.gcp.commercetools.com/oauth/token?grant_type=client_credentials&scope=manage_project:ecommerce-application_1',
//   {
//     method: 'POST',
//     headers: {
//       Authorization: 'Basic RUpIYUNleVVxTjYwUHBhQzBNUEM4MExzOkJuVkkxdDlwWHc2SG9PQ1ozN0EtWWptaU5ZbVlwa2dH',
//       'Content-Type': 'application/x-www-form-urlencoded',
//     },
//   },
// )
//   .then(res => res.json())
//   .then(data => console.log(data));

// fetch('https://api.australia-southeast1.gcp.commercetools.com/ecommerce-application_1/products?limit=30', {
//   method: 'GET',
//   headers: {
//     Authorization: 'Bearer jznt4UoyAd7ijzcaiQ2lC4lOej5JcZ-u',
//     'Content-Type': 'application/x-www-form-urlencoded',
//   },
// })
//   .then(res => res.json())
//   .then(data => console.log(data));

// fetch('https://api.australia-southeast1.gcp.commercetools.com/ecommerce-application_1/customers', {
//   method: 'GET',
//   headers: {
//     Authorization: 'Bearer ...',
//     'Content-Type': 'application/x-www-form-urlencoded',
//   },
// })
//   .then(res => res.json())
//   .then(data => console.log(data.results));

// fetch('https://api.australia-southeast1.gcp.commercetools.com/ecommerce-application_1/login', {
//   method: 'POST',
//   headers: {
//     Authorization: 'Bearer qrvNs61jpRLXA3CpP237dtG-RHQQlzSd',
//     'Content-Type': 'application/x-www-form-urlencoded',
//   },
//   body: JSON.stringify({
//     email: 'vasyaName@mail.ru',
//     password: 'TTss@@22',
//   }),
// })
//   .then(res => console.log(res.status));
