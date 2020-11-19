import React, { useEffect, useState } from "react";
import logo from "./pictures/pomegranate.svg";
import { fetchDeals } from "./fetchCalls";
import Navigation from "./Navigation";

export default function MyOrders() {
  const [myOrders, setMyOrders] = useState([]);
  useEffect(() => {
    fetchDeals().then((orders) => {
      setMyOrders(orders);
    });
  }, []);
  return (
    <>
      <title>My Orders</title>
      <Navigation />
      <div></div>
      <ul
        className="list-group mt-5"
        style={{ position: "relative", top: "100px" }}
      >
        {myOrders.map((order) => {
          return (
            <li
              key={order.id}
              className="list-group-item d-flex justify-content-between"
            >
              <a href={`/ordered/${order.id}`} data-testid="details">
                {order.title}
              </a>
              <div>
                <span className="badge badge-pill text-white"></span>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
