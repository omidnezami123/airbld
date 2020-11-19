//GET request
export function fetchDeals() {
  return fetch("/api/airbld-myorders").then((res) => {
    if (res.status >= 400) {
      return Promise.reject(`There was an error with loading the deals`);
    }
    return res.json();
  });
}

//PUT request
export function saveDeal(data) {
  const url = `/api/airbld-myorders/${data.id}`;
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
  const url = "/api/airbld-myorders";
  const method = "post";

  return fetch(url, {
    method,
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch(() =>
      alert(
        `Oops! It seems that ${data.restaurant} has run out of ${data.title}. Sorry!`
      )
    );
}

//DELETE request
export function removeDeal(id) {
  return fetch(`/api/airbld-myorders/${id}`, {
    method: "DELETE",
  });
}
