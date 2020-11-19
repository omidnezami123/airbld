import React from "react";
import { createPortal } from "react-dom";

export default function Modal({ restaurantName, description, slogan }) {
  return createPortal(
    <>
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal1"
        tabIndex={-1}
        role="dialog"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-dismiss="modal">
              <div className="lr">
                <div className="rl" />
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <div className="modal-body">
                    {/* Project Details Go Here */}
                    <h2 className="text-uppercase">About DULCE</h2>
                    <p className="item-intro text-muted">
                      Located in the USC Village
                    </p>
                    {/* <img
                      className="img-fluid d-block mx-auto"
                      src="img/portfolio/01-full.jpg"
                      alt=""
                    /> */}
                    <p>
                      We serve the finest specialty coffees &amp; teas, along
                      with fresh salads, sandwiches and baked goods made
                      in-house daily! Our signature items include DULCE lattes,
                      Vietnamese style iced coffee, blueberry matcha lattes,
                      bacon donuts, and roti buns.
                    </p>
                    <ul className="list-inline">
                      <li>
                        Grab great deals on pastries, coffee, sandwiches and
                        more!
                      </li>
                    </ul>
                    <button
                      className="btn btn-primary"
                      data-dismiss="modal"
                      type="button"
                    >
                      <i className="fas fa-times" />
                      Close{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("modal-container")
  );
}
