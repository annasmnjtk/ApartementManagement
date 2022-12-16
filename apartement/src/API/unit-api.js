const apartURL = "/units";
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};
export async function fetchUnits() {
  const response = await fetch(apartURL, {
    headers: {
      ...headers,
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  });
  if (response.status < 400) {
    return response.json();
  } else {
    return Promise.reject(await response.json());
  }
}
