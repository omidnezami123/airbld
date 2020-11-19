import React from "react";
import logo from "./pictures/pomegranate.svg";

export default function Orders({ orders }) {
  return (
    <>
      <title>Orders</title>
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        id="mainNav"
        style={{ backgroundColor: "black" }}
      >
        <div className="container">
          <a
            className="navbar-brand js-scroll-trigger"
            href="/"
            data-testid="home"
          >
            <img
              src={logo}
              alt="AirBLD Logo"
              className="navbar-brand js-scroll-trigger"
              href="#page-top"
              id="logo"
              width="15%"
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
                <a
                  className="nav-link js-scroll-trigger"
                  href="/orders"
                  data-testid="seedeals"
                >
                  See Deals
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link js-scroll-trigger"
                  href="/myorders"
                  data-testid="myorders"
                >
                  My Orders
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
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
