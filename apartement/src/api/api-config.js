const apiResidentURL = "/api/residents";
const headers = {
  accept: "application/json",
  "content-type": "application/json",
};

export async function getAllResidents() {
  const response = await fetch(apiResidentURL, {
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

export async function createResident(resident) {
  const response = await fetch(apiResidentURL, {
    headers: {
      ...headers,
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    method: "POST",
    body: JSON.stringify(resident),
  });
  return await response.json();
}

export async function updateResident(resident) {
  const response = await fetch(`${apiResidentURL}/${resident.id}`, {
    headers: {
      ...headers,
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    method: "PUT",
    body: JSON.stringify(resident),
  });
  return await response.json();
}

export async function deleteResident(id) {
  const response = await fetch(`${apiResidentURL}/${id}`, {
    headers: {
      ...headers,
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    method: "DELETE",
  });
  return await response.json();
}
