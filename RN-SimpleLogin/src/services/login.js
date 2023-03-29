const BASE_URL = 'https://api.b7web.com.br';

export const LoginApi = async (email, password) => {
  const request = await fetch(`${BASE_URL}/loginsimples/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({email, password}),
  });

  const requestJson = await request.json();
  return requestJson;
};
