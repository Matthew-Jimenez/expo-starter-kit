import { by, element, expect } from "detox";

const { openApp } = require("../utils/openApp");

describe("User can sign in successfully", () => {
  beforeAll(async () => {
    await openApp();
  });

  it("should be able to sign in", async () => {
    await expect(element(by.id("sign-in-screen"))).toBeVisible();

    // sign into the app
    await element(by.id("sign-in-email-input")).typeText("testemail@gmail.com");
    await element(by.id("sign-in-password-input")).typeText("020524fA!");
    await element(by.id("sign-in-submit-button")).tap();

    // wait for navigation
    await waitFor(element(by.id("home-screen")))
      .toBeVisible()
      .withTimeout(5000);

    await expect(element(by.id("home-screen"))).toBeVisible();
  });
});
