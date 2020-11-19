import React from "react";
import { render, fireEvent } from "@testing-library/react";
import MyOrders from "./MyOrders";

test("home icon works", () => {
  const { getByTestId } = render(<MyOrders />);

  fireEvent.click(getByTestId("home"));
});

test("see deals link works", () => {
  const { getByTestId } = render(<MyOrders />);

  fireEvent.click(getByTestId("seedeals"));
});

test("my orders link refreshes page", () => {
  const { getByTestId } = render(<MyOrders />);

  fireEvent.click(getByTestId("mydeals"));
});
