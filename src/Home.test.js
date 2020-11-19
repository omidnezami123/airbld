import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Home from "./Home";

test("see deals button works", () => {
  const { getByTestId } = render(<Home />);

  fireEvent.click(getByTestId("seedealsbtn"));
});

test("see deals link works", () => {
  const { getByTestId } = render(<Home />);

  fireEvent.click(getByTestId("seedealslink"));
});

test("home icon works", () => {
  const { getByTestId } = render(<Home />);

  fireEvent.click(getByTestId("home"));
});

test("modal works with proper text", () => {
  const { getByTestId } = render(<Home />);
  fireEvent.click(getByTestId("modal"));

  expect(getByTestId("description")).toHaveTextContent(
    "We serve the finest specialty coffees & teas, along with fresh salads, sandwiches and baked goods made in-house daily! Our signature items include DULCE lattes, Vietnamese style iced coffee, blueberry matcha lattes, bacon donuts, and roti buns."
  );
});

test("modal closes out via close button", () => {
  const { getByTestId } = render(<Home />);
  fireEvent.click(getByTestId("modal"));
  fireEvent.click(getByTestId("close"));
});
