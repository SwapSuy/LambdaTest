import { Given, When, Then } from "@cucumber/cucumber";
import { expect, Page } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

interface CustomWorld {
  page: Page;
  loginPage: LoginPage;
}

Given(
  "login to Lambda application with {string} and {string}",
  { timeout: 100 * 1000 },
  async function (this: CustomWorld, username: string, password: string) {
    await this.loginPage.goToU();
    await this.loginPage.validLogin(username, password);
  }
);

When(
  "click on Login Button",
  { timeout: 100 * 1000 },
  async function (this: CustomWorld) {
    await this.loginPage.clickLoginBtn();
  }
);

Then(
  "User should be logged in succesfully",
  async function (this: CustomWorld) {
    await this.loginPage.validSuccessfulLogin();
  }
);

Then(
  "User should Not be logged in succesfully and error message should be displayed {string} and {string}",
  async function (this: CustomWorld, ErrorMessage: string, EM2: string) {
    await this.loginPage.unauthorizedLogin(ErrorMessage, EM2);
  }
);
