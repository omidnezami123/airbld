// import React from "react";

// //GET request
// export function fetchDeals() {
//   return fetch(`https://chinook-api.herokuapp.com/api/playlists`).then(
//     (res) => {
//       if (res.status >= 400) {
//         return Promise.reject(`There was an error with loading the playlists`);
//       }
//       return res.json();
//     }
//   );
// }

// //PUT and POST requests
// export function saveOrder(data) {
//   const isEditing = data.hasOwnProperty("id");
//   const url = isEditing ? `/airbld-myorders/${data.id}` : "/issues";
//   const method = isEditing ? "put" : "post";

//   return fetch(url, {
//     method,
//     body: JSON.stringify(data),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   }).then((response) => {
//     return response.json();
//   });
// }

//DELETE request
export function removeDeal(id) {
  return fetch(`/mydeals/${id}`, {
    method: "DELETE",
  });
}
