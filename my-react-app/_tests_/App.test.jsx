import { it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../src/App";

it("click should increase count", () => {
  render(<App />);

  const button = screen.getByTitle("Click Me!");
  expect(button).toHaveTextContent("count is 0");

  fireEvent.click(button);
  expect(button).toHaveTextContent("count is 1");
});
