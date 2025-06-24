import { Given, When, Then } from "@cucumber/cucumber";
import { expect, Page } from "@playwright/test";
import { POManager } from '../pages/POManager';

interface CustomWorld {
  page: Page;
  poManager: POManager;
  
}

When(
  "user click on header megaMenu",
  { timeout: 100 * 1000 },
  async function (this: CustomWorld) {
     const megaMenuPage = this.poManager.getMegaMenuPage();
     await megaMenuPage.navigateMegaMenu();
  }
);

When(
  "select category {string}",
  async function (this: CustomWorld, option: string) {
    console.log(`➡️ Attempting to click Mega Menu option: ${option}`);
    const megaMenuPage = this.poManager.getMegaMenuPage();
    await megaMenuPage.selectMegaMenuItem(option);
  }
);

When("Filter the category {string} and {string}",{ timeout: 100 * 1000 }, async function (this: CustomWorld, show: string, sortBy: string) {
 const megaMenuPage = this.poManager.getMegaMenuPage();
  await megaMenuPage.filterItem(show,sortBy);
});

When("Add to wishlist the first displayed item {string}", async function (this: CustomWorld, ProductName: string) {
  //await this.megamenuPage.addToWishlist();
const megaMenuPage = this.poManager.getMegaMenuPage();
  await megaMenuPage.hoverAndClickAddToWishlistByProductName(ProductName);
});

When("click on View cart button on displayed pop up", async function () {
  console.log("ehhheee");
});

When(
  "validate selected Item displayed on Shopping cart page",
  async function () {
    console.log("eegggee");
  }
);

Then("Click on Checkout button on shopping cart page", async function () {

  console.log("eerrree");
});
