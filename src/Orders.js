import React from "react";
import logo from "./pictures/pomegranate.svg";
import Navigation from "./Navigation";

export default function Orders({ orders }) {
  return (
    <>
      <title>Orders</title>
      <Navigation />
      <span></span>
      <ul
        className="list-group mt-5"
        style={{ position: "relative", top: "100px" }}
      >
        {orders.map((order) => {
          return (
            <li
              key={order.id}
              className="list-group-item d-flex justify-content-between"
              data-testid="details"
            >
              <a href={`/order/${order.id}`}>{order.title}</a>
              <div>
                <span className="badge badge-pill text-white"></span>
              </div>
            </li>
          );
        })}
      </ul>

      {/* Put your order div here(hard-coded)*/}
    </>
  );
}
