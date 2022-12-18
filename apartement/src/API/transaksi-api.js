const transaksiURL = "/api/transactions";
const headers = {
  accept: "application/json",
  "content-type": "application/json",
};

export async function getAllTransaksi() {
  const response = await fetch(
    "/api/transactions?_expand=resident&_expand=unit",
    {
      headers: {
        ...headers,
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    }
  );
  if (response.status < 400) {
    return response.json();
  } else {
    return Promise.reject(await response.json());
  }
}
export async function createTransaksi(transaksi) {
  const response = await fetch(transaksiURL, {
    headers: {
      ...headers,
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    method: "POST",
    body: JSON.stringify(transaksi),
  });
  return await response.json();
}

export async function updateTransaksi(transaksi) {
  const response = await fetch(`${transaksiURL}/${transaksi.id}`, {
    headers: {
      ...headers,
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    method: "PUT",
    body: JSON.stringify(transaksi),
  });
  return await response.json();
}

export async function deleteTransaksi(id) {
  const response = await fetch(`${transaksiURL}/${id}`, {
    headers: {
      ...headers,
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    method: "DELETE",
  });
  return await response.json();
}
