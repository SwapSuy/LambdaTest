import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { chromium, Browser, Page } from "@playwright/test";
import { registerPage } from "../pages/registerPage";

interface CustomWorld {
  page: Page;
  registerpage: registerPage;
}

setDefaultTimeout(90 * 1000); // optional global change, 30 seconds

//let page:Page;

Given(
  "Launch the Lambdatest web application",
  async function (this: CustomWorld) {
    let reg = new registerPage(this.page);
    await reg.goToU();
    //await this.page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
  }
);

When("click on Register Button", async function (this: CustomWorld) {
  let reg = new registerPage(this.page);
  await reg.clickonRegisterButton();
});

Then(
  "User should be on Register Account page",
  async function (this: CustomWorld) {
    // Wait for a unique element on the Register Account page
    await this.page.waitForSelector("h1");

    // Check if the header contains expected text
    const heading = await this.page.textContent("h1");
    expect(heading?.trim()).toBe("Register Account");
  }
);

Then(
  "user enters values {string}, {string}, {string}, {string}, {string}, {string}",
  async function (
    this: CustomWorld,
    FirstName,
    LastName,
    EMail,
    Telephone,
    Password,
    PasswordConfirm
  ) {
    let reg = new registerPage(this.page);
    // 🔄 Dynamically generate unique email address
    const uniqueEmail = `testuser_${Date.now()}@example.com`;
    console.log(`📧 Generated email: ${uniqueEmail}`);
    await reg.enterTextFields(
      FirstName,
      LastName,
      uniqueEmail,
      Telephone,
      Password,
      PasswordConfirm
    );
  }
);

Then("user clicks on Privacy Policy radio Button", async function () {
  let reg = new registerPage(this.page);
  await reg.privacyPolicyRadio();
});

Then("user clicks on Continue Button", { timeout: 80000 }, async function () {
  let reg = new registerPage(this.page);
  await reg.clickContinueButton();
});

Then("user account is created", { timeout: 8000 }, async function () {
  let reg = new registerPage(this.page);
  await reg.verifyAccountCreation();
});
