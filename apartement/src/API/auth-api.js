const headUrl = "http://localhost:4000";

const apartURL = `${headUrl}/login`;
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export async function login(user) {
  const response = await fetch(apartURL, {
    headers,
    method: "POST",
    body: JSON.stringify(user),
  });
  return await response.json();
}
