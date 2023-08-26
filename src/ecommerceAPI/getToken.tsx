export const getToken = async () => {
  const codeStr = window.btoa('EJHaCeyUqN60PpaC0MPC80Ls:BnVI1t9pXw6HoOCZ37A-YjmiNYmYpkgG');
  const data = await fetch(
    'https://auth.australia-southeast1.gcp.commercetools.com/oauth/token?grant_type=client_credentials&scope=manage_project:ecommerce-application_1',
    {
      method: 'POST',
      headers: {
        Authorization: 'Basic ' + codeStr,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  );
  return await data;
};
