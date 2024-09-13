import { test, expect } from "@playwright/experimental-ct-react";
import React from "react";
import App from "../src/App";

test.use({ viewport: { width: 500, height: 500 } });

test("click should increase count", async ({ mount }) => {
  const component = await mount(<App></App>);

  const button = component.getByTitle("Click Me!");
  await expect(button).toContainText("count is 0");

  await button.click();
  await expect(button).toContainText("count is 1");
});

