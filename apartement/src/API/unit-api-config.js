const BASE_URL = "http://localhost:4000/api";
const HEADERS = {
  accept: "application/json ",
  "content-type": "application/json",
};

export default async function fetchAPI(
  endpoint,
  method,
  authorization = false,
  data = null
) {
  const response = await fetch(`${BASE_URL}/${endpoint}`, {
    headers: authorization
      ? {
          ...HEADERS,
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        }
      : Headers,
    method: method,
    body: data ? JSON.stringify(data) : undefined,
  });

  return await response.json();
}
