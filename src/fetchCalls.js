//GET request
export function fetchDeals() {
  return fetch("/airbld-myorders").then((res) => {
    if (res.status >= 400) {
      return Promise.reject(`There was an error with loading the playlists`);
    }
    return res.json();
  });
}

//PUT request
export function saveDeal(data) {
  const url = `/airbld-myorders/${data.id}`;
  const method = "put";

  return fetch(url, {
    method,
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    return response.json();
  });
}

//POST request
export function addDeal(data) {
  const url = `/airbld-myorders`;
  const method = "post";

  return fetch(url, {
    method,
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    return response.json();
  });
}

//DELETE request
export function removeDeal(id) {
  return fetch(`/airbld-myorders/${id}`, {
    method: "DELETE",
  });
}
