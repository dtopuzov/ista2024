import { it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../src/App";

it("click should increase count", () => {
  render(<App />);
  expect(screen.getByTitle("Click Me!")).toHaveTextContent("count is 0");

  fireEvent.click(screen.getByTitle("Click Me!"));
  expect(screen.getByTitle("Click Me!")).toHaveTextContent("count is 1");
});
