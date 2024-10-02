import { it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import LoginForm from "../src/LoginForm";

it("should require both user and password", () => {
  render(<LoginForm />)

  const loginButton = screen.getByTestId("login-btn");
  fireEvent.click(loginButton);

  const errorMessage = screen.getByTestId("error-message")
  expect(errorMessage).toHaveTextContent("Both fields are required");
});
