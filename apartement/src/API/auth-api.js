const apartURL = "/login";
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
  if (response.status < 400) {
    return response.json();
  } else {
    return Promise.reject(await response.json());
  }
}
