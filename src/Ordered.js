import React from "react";
import { useParams } from "react-router-dom";
import logo from "./pictures/pomegranate.svg";
import { Formik, Field, Form } from "formik";
import Navigation from "./Navigation";

export default function Ordered({ orders, editOrder, deleteOrder }) {
  const { id } = useParams();
  const order = orders.find((orderr) => {
    return orderr.id === Number(id);
  });

  return (
    <>
      <title>Order {id}</title>
      <Navigation />
      <span></span>
      <img
        id="food"
        src={order.src}
        alt=""
        style={{
          position: "relative",
          top: "300px",
          left: "50px",
        }}
      />
      <div
        className="mr-5"
        style={{
          position: "relative",
          left: "50%",
        }}
      >
        <h3>
          Dish: <i>{order.title}</i>
        </h3>
        <h3>
          Restaurant: <i>{order.restaurant}</i>
        </h3>
        <h3>Description:</h3>
        <p style={{ width: "50%" }}>{order.description}</p>
        <h3>
          Price: <i>{order.price}</i>
        </h3>
        <div>
          <Formik
            initialValues={{
              id: id,
              title: order.title,
              restaurant: order.restaurant,
              price: order.price,
              description: order.description,
              notes: order.notes,
              src: order.src,
            }}
            onSubmit={async (values) => {
              editOrder(values);
              alert(`${order.title} Edited`);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <label htmlFor="notes">Notes</label>
                <Field name="notes" placeholder="Add/Edit a note?" />
                <div></div>
                <button
                  className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
                  type="submit"
                  disabled={isSubmitting}
                  style={{ position: "relative", top: "10px" }}
                >
                  Edit this Order
                </button>
              </Form>
            )}
          </Formik>
          <Formik
            initialValues={{
              id: id,
              title: order.title,
              restaurant: order.restaurant,
              price: order.price,
              description: order.description,
              notes: order.notes,
            }}
            onSubmit={async (values) => {
              //   await sleep(500);
              deleteOrder(values);
              alert(`${order.title} Removed`);
              document.getElementById("submit").disabled = true;
            }}
          >
            {() => (
              <Form>
                <button
                  id="submit"
                  className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
                  type="submit"
                  style={{ position: "relative", top: "25px" }}
                >
                  Remove from My Orders
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}
