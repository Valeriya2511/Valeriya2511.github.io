export const postClient = async (client: {}, token: string) => {
  const data = await fetch(
    'https://api.australia-southeast1.gcp.commercetools.com/ecommerce-application_1/customers/',
    {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(client),
    },
  )
    .then(res => res.json())
    .then(data => {
      const { firstName, email, id } = data.customer;
      alert(`
      Customer will created:
      ID: ${id},
      Name: ${firstName},
      Email: ${email}
      `);
    });
  return await data;
};
