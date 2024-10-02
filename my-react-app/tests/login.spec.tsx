import { test, expect } from "@playwright/experimental-ct-react";
import React from "react";
import LoginForm from "../src/LoginForm";

test.use({ viewport: { width: 500, height: 500 } });

test("should require both user and password", async ({ mount }) => {
  const component = await mount(<LoginForm></LoginForm>);

  const loginButton = component.getByTestId("login-btn")
  await loginButton.click();

  const errorMessage = component.getByTestId("error-message")
  expect(errorMessage).toHaveText("Both fields are required");
});

