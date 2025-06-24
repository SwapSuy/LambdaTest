import { test, expect, Locator, Page } from "@playwright/test";

export class LoginPage {
  private page: Page;
  ddLogin: Locator;
  emailAddress: Locator;
  password: Locator;
  btnLogin: Locator;
  linkLogout: Locator;
  warningMessageLogin: Locator;

  constructor(page: Page) {
    this.page = page;
    this.ddLogin = page.locator("a[href*='login']");
    this.emailAddress = page.locator("input[id='input-email']");
    this.password = page.locator("input[id='input-password']");
    this.btnLogin = page.locator("input[value='Login']");
    this.linkLogout = page.locator("a[href*='logout']");
    this.warningMessageLogin = page.locator(
      "div[class='alert alert-danger alert-dismissible']"
    );
  }

  async goToU() {
    await this.page.goto(
      "https://ecommerce-playground.lambdatest.io/index.php?route=account/login"
    );
  }

  async validLogin(username: string, password: string) {
    // Ensure we're on the login page
    if (!this.page.url().includes("route=account/login")) {
      await this.goToU();
    }
    await this.ddLogin.nth(1).click();
    await this.emailAddress.fill(username);
    await this.password.fill(password);
  }

  async clickLoginBtn() {
    await this.btnLogin.click();
  }

  async validSuccessfulLogin() {
    await this.page.waitForLoadState("networkidle");
    await expect(this.linkLogout.nth(1)).toBeVisible();
  }

  async unauthorizedLogin(ErrorMessage: string, Em2: string) {
    const actualWarningText = await this.warningMessageLogin.textContent();

    if (actualWarningText?.trim().includes(ErrorMessage?.trim())) {
      expect(actualWarningText?.trim()).toBe(ErrorMessage);
    } else {
      expect(actualWarningText?.trim()).toBe(Em2);
    }
  }
}


