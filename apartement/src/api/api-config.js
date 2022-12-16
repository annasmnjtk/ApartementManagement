const apiResidentURL = "/api/residents";
const headers = {
  accept: "application/json",
  "content-type": "application/json",
};

export async function getAllResidents() {
  const response = await fetch(apiResidentURL);

  return await response.json();
}

export async function createResident(resident) {
  const response = await fetch(apiResidentURL, {
    headers,
    method: "POST",
    body: JSON.stringify(resident),
  });
  return await response.json();
}

export async function updateResident(resident) {
  const response = await fetch(`${apiResidentURL}/${resident.id}`, {
    headers,
    method: "PUT",
    body: JSON.stringify(resident),
  });
  return await response.json();
}
