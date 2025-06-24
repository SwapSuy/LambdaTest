import { Given, When, Then } from "@cucumber/cucumber";
import { expect, Page } from "@playwright/test";
import { MegaMenuPage } from "../pages/MegaMenuPage";

interface CustomWorld {
  page: Page;
  megamenuPage: MegaMenuPage;
}

When(
  "user click on header megaMenu",
  { timeout: 100 * 1000 },
  async function (this: CustomWorld) {
    await this.megamenuPage.navigateMegaMenu();
  }
);

When(
  "select category {string}",
  async function (this: CustomWorld, option: string) {
    console.log(`➡️ Attempting to click Mega Menu option: ${option}`);
    await this.megamenuPage.selectMegaMenuItem(option);
  }
);

When("Filter the category {string} and {string}", async function (this: CustomWorld, show: string, sortBy: string) {
  await this.megamenuPage.filterItem(show,sortBy);
});

When("Add to wishlist the first displayed item {string}", async function (this: CustomWorld, ProductName: string) {
  //await this.megamenuPage.addToWishlist();
  await this.megamenuPage.hoverAndClickAddToWishlistByProductName(ProductName);
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
