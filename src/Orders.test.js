import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Orders from "./Orders";

const orders = [
  {
    id: 0,
    title: "Fried Chicken",
    restaurant: "Popeye's",
  },
  {
    id: 1,
    title: "Hot Dog",
    restaurant: "Wienerschnitzel",
  },
  {
    id: 2,
    title: "Caesar Salad",
    restaurant: "Panera",
  },
];

test("home icon works", () => {
  const { getByTestId } = render(<Orders orders={orders} />);

  fireEvent.click(getByTestId("home"));
});

test("see deals link refreshes page", () => {
  const { getByTestId } = render(<Orders orders={orders} />);

  fireEvent.click(getByTestId("seedeals"));
});

test("my orders link works", () => {
  const { getByTestId } = render(<Orders orders={orders} />);

  fireEvent.click(getByTestId("mydeals"));
});
