import { test, expect, Locator, Page } from '@playwright/test';

export class registerPage {
  page: Page;
  register: Locator;
  firstName: Locator;
  lastName: Locator;
  email: Locator;
  telePhone: Locator;
  passWord: Locator;
  confirmPassword: Locator;
  agreeRadio: Locator;
  continueButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.register = page.locator("div[id='account-login'] a:nth-child(2)");
    this.firstName = page.locator("#input-firstname");
    this.lastName = page.locator("#input-lastname");
    this.email = page.locator("#input-email");
    this.telePhone = page.locator("#input-telephone");
    this.passWord = page.locator("#input-password");
    this.confirmPassword = page.locator("#input-confirm");
    this.agreeRadio = page.locator("label[for='input-agree']");
    this.continueButton = page.locator("input[value='Continue']");
  }

  async goToU() {
    if (!this.page.isClosed()) {
    await this.page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
  }
  }

  async clickonRegisterButton() {
    await this.register.waitFor({ state: 'visible', timeout: 5000 });
    await this.register.click();
  }

  async enterTextFields(
    FirstName: string,
    LastName: string,
    uniqueEmail: string,
    Telephone: string,
    Password: string,
    PasswordConfirm: string
  ) {
     await this.firstName.fill(FirstName)
        await this.lastName.fill(LastName);
        await this.email.fill(uniqueEmail);
        await this.telePhone.fill(Telephone);
        await this.page.waitForSelector('#input-password');
        await this.passWord.fill(Password);
        await this.confirmPassword.fill(PasswordConfirm);
  }

  async privacyPolicyRadio() {
    await this.agreeRadio.waitFor({ state: 'visible', timeout: 5000 });
    await this.agreeRadio.click();
    
  }

  async clickContinueButton() {
    await this.continueButton.waitFor({ state: 'visible', timeout: 35000 });
    await this.continueButton.click();
  }
    async verifyAccountCreation() {
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForSelector("h1[class='page-title my-3']");
    

  const actualTextH1= await this.page.locator("h1[class='page-title my-3']").textContent();
  expect(actualTextH1?.trim()).toBe('Your Account Has Been Created!');
    }
 
    

}
