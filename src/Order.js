import React from "react";
import { useParams } from "react-router-dom";

export default function Order({ orders }) {
  const { id } = useParams();
  console.log(id);
  const order = orders.find((orderr) => {
    return orderr.id === Number(id);
  });
  return (
    <>
      <title>Order {id}</title>
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        id="mainNav"
        style={{ backgroundColor: "black" }}
      >
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="/">
            <img
              src="{logo}"
              alt="AirBLD Logo"
              className="navbar-brand js-scroll-trigger"
              href="#page-top"
              id="logo"
              width="12%"
            />
          </a>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ml-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/orders">
                  See Deals
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/myorders">
                  My Orders
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <span></span>
      <div style={{ position: "relative", top: "150px", left: "40%" }}>
        <h3>{order.title}</h3>
        <h3>{order.restaurant}</h3>
        <h3>{order.price}</h3>
        <a
          className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
          href="/orders"
        >
          Add to My Orders
        </a>
      </div>
    </>
  );
}
