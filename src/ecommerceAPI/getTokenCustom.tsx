export const getTokenCustom = async (username: string, password: string) => {
  
  const codeStr = window.btoa('EJHaCeyUqN60PpaC0MPC80Ls:BnVI1t9pXw6HoOCZ37A-YjmiNYmYpkgG');
  const data = await fetch(`https://auth.australia-southeast1.gcp.commercetools.com/oauth/ecommerce-application_1/customers/token?grant_type=password&username=${username}&password=${password}`, {
      method: 'POST',
      headers: {
        Authorization: 'Basic ' + codeStr,
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    }
  )
  return data.json();
};

