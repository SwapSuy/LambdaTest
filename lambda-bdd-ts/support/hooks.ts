import 'dotenv/config';
import { chromium, Browser, Page } from '@playwright/test';
import { POManager } from '../tests/pages/POManager';

import {
  Before,
  After,
  AfterStep,
  BeforeStep,
  Status,
  ITestCaseHookParameter
} from '@cucumber/cucumber';
import fs from 'fs';
import path from 'path';
import { getEnvVariable } from '../support/utils/env'; // ✅ Load env vars from .env

// ✅ Define shared world for cucumber steps
interface CustomWorld {
  page: Page;
  browser: Browser;
  poManager: POManager;
 
}

// ✅ Define storage state file path for login persistence
const storageStatePath = path.join(__dirname, '../storage/loggedInState.json');

Before(async function (this: CustomWorld) {
  // ✅ Launch browser
  this.browser = await chromium.launch({ headless: false });

  // ✅ Check if login session file exists
  const useStoredState = fs.existsSync(storageStatePath);

  const context = useStoredState
    ? await this.browser.newContext({ storageState: storageStatePath })
    : await this.browser.newContext();

  this.page = await context.newPage();
  this.poManager = new POManager(this.page);

  // ✅ Only perform login if no saved session
  if (!useStoredState) {
    const username = getEnvVariable('LOGIN_EMAIL');
    const password = getEnvVariable('LOGIN_PASSWORD');
    console.log('🔐 LOGIN_EMAIL from env:', process.env.LOGIN_EMAIL);
  console.log('🔐 LOGIN_PASSWORD from env:', process.env.LOGIN_PASSWORD);

    // 🟡 Ensure the login page loads before interacting
    await this.page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/login', {
      waitUntil: 'load'
    });
 
    const Credentials = this.poManager.getLoginPage();
    await Credentials.validLogin(username, password);
    //await this.loginPage.validLogin(username, password);
    await Credentials.clickLoginBtn();
    await Credentials.validSuccessfulLogin();
    //await this.loginPage.clickLoginBtn();
    //await this.loginPage.validSuccessfulLogin();

    // ✅ Save session state
    await context.storageState({ path: storageStatePath });
  } else {
    // 🔁 Optionally navigate to homepage after restoring session
    await this.page.goto('https://ecommerce-playground.lambdatest.io', {
      waitUntil: 'load'
    });
  }
});

After(async function (this: CustomWorld) {
  await this.browser.close();
  console.log('✅ Browser closed in After hook');
});

AfterStep(async function (
  this: CustomWorld,
  { result }: ITestCaseHookParameter
) {
  if (result?.status === Status.FAILED) {
    await this.page.screenshot({ path: 'screenshot1.png' });
  }
});

BeforeStep(function () {
  // Optional placeholder for per-step logic
});
