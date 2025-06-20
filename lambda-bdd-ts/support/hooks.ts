import { chromium, Browser, Page } from '@playwright/test';
import {
  Before,
  After,
  AfterStep,
  BeforeStep,
  Status,
  ITestCaseHookParameter
} from '@cucumber/cucumber';

interface CustomWorld {
  page: Page;
  browser: Browser;
}

Before(async function (this: CustomWorld) {
  this.browser = await chromium.launch({
    headless: false
  });
  const context = await this.browser.newContext();
  this.page = await context.newPage();
  
});

After(async function (this: CustomWorld) {
  await this.browser.close();
  console.log('Browser closed in After hook');
});

AfterStep(async function (
  this: CustomWorld,
  { result }: ITestCaseHookParameter
) {
  if (result?.status === Status.FAILED) {
    await this.page.screenshot({ path: 'screenshot1.png' });
  }
});

BeforeStep(function () {});
