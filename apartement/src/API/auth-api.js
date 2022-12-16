const apartURL = "/login";
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export async function login(user) {
  const response = await fetch(apiGuestURL, {
    headers,
    method: "POST",
    body: JSON.stringify(user),
  });
  return await response.json();
}
