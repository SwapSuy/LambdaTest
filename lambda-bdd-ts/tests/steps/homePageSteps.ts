import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect, Page } from "playwright/test";
import { homePage } from "../pages/homePage";

interface CustomWorld {
  page: Page;
  HomePage: homePage;
}

setDefaultTimeout(60 * 1000);

When("click on Home Button", async function (this: CustomWorld) {
  let home = new homePage(this.page);
  await home.goToHomePage();
});

Then("user clicks on Shop Now Button on banner", async function () {
  let home = new homePage(this.page);
  await home.clickOnBannerButton();
});

Then("user validates the home {string}", async function (url) {
  let home = new homePage(this.page);
  await home.goToHomePage();
  await home.validateHomeUrl(url);
});

Then("user clicks on Shop Now Button", async function () {
  let home = new homePage(this.page);
  await home.clickOnShopNowButton();
});

Then("user clicks on Popular tab", async function () {
  let home = new homePage(this.page);
  await home.clickOnPopularTab();
  console.log("Clicked on the Popular tab");
});

Then("user clicks on Latest tab", async function () {
  let home = new homePage(this.page);
  await home.clickOnLatestTab();
  console.log("Clicked on the Latest tab");
});

Then("user clicks on Best Seller tab", async function () {
  let home = new homePage(this.page);
  await home.clickOnBestSellerTab();
});

Then("user validates Top Colletion header", async function () {
  let home = new homePage(this.page);
  await home.validateTopCollectionHeader();
});

Then("user clicks on right arrow on Top Collection", async function () {
  let home = new homePage(this.page);
  await home.clickOnRightArrow();
});

Then("user clicks on left arrow on Top Collection", async function () {
  let home = new homePage(this.page);
  await home.clickOnRightArrow();
});

Then("user hover over product image under Top Collection", async function () {
  let home = new homePage(this.page);
  await home.hoverOverProductImage();
});

Given(
  "user selects a product and clicks on Add to Cart Button",
  async function () {
    let home = new homePage(this.page);
    await home.clickOnSelectProduct();
  }
);

Then("user clicks on camera product image", async function () {
  let home = new homePage(this.page);
  await home.hoverOverCameraImage();
});

Then(
  "user hover over on Ipod product image",
  { timeout: 35000 },
  async function () {
    let home = new homePage(this.page);
    await home.hoverOverIpodImage();
  }
);

Then(
  "user hover over add to cart option on image",
  { timeout: 35000 },
  async function () {
    let home = new homePage(this.page);
    await home.hoverOverAddToCartButton();
  }
);

Then("user clicks on Desktop product", async function () {
  let home = new homePage(this.page);
  await home.clickonDesktopSelectProduct();
});

Then("user selects In Stock checkbox", async function () {
  let home = new homePage(this.page);
  await home.InStockCheckbox();
});

Then("user clicks on first product", { timeout: 35000 }, async function () {
  let home = new homePage(this.page);
  await home.clickonSelectInStockProduct();
});

Then("user clicks on Add to Cart button", async function () {
  let home = new homePage(this.page);
  await home.clickOnAddToCartButton();
});

Then("user clicks on View Cart button", { timeout: 25000 }, async function () {
  let home = new homePage(this.page);
  await home.clickOnViewCartButton();
});

Then(
  "user validates the Add to Cart page {string}",
  async function (addtocarturl) {
    let home = new homePage(this.page);
    await home.valiadteAddToCartUrl(addtocarturl);
  }
);

Then("user clicks on checkout button", { timeout: 25000 }, async function () {
  let home = new homePage(this.page);
  await home.clickOnCheckOutButton();
});

Then(
  "user validates the Checkout page {string}",
  { timeout: 25000 },
  async function (checkouturl) {
    let home = new homePage(this.page);
    await home.validateCheckOutUrl(checkouturl);
  }
);

Then(
  "user adds {string} product to cart",
  async function (productName: string) {
    let home = new homePage(this.page);
    await home.hoverAndClickAddToCartByProductName(productName);
  }
);

Then(
  "user adds {string} product to compare",
  async function (productName: string) {
    let home = new homePage(this.page);
    await home.hoverAndClickAddToCompareByProductName(productName);
  }
);

Then(
  "user clicks on Product Compare button",
  { timeout: 25000 },
  async function () {
    let home = new homePage(this.page);
    await home.clickOnProductCompareButton();
  }
);

Then(
  "success alert message is displayed on product compare page",
  { timeout: 25000 },
  async function () {
    let home = new homePage(this.page);
    await home.validateProductCompareSuccessAlert();
  }
);

Then(
  "user enters and complete the checkout form",
  { timeout: 35000 },
  async function () {
    let home = new homePage(this.page);
    await home.fillCheckoutForm();
  }
);

Then(
  "user clicks on Remove button to remove the product from cart",
  { timeout: 25000 },
  async function () {
    let home = new homePage(this.page);
    await home.removeFromCart();
  }
);

Then(
  "user clicks on Add to Cart button on product compare page",
  { timeout: 25000 },
  async function () {
    let home = new homePage(this.page);
    await home.clickOnAddToCartButtonOnProductComparePage();
  }
);

Then("validate product compare table", { timeout: 25000 }, async function () {
  let home = new homePage(this.page);
  await home.validateProductCompareTableElements();
});

Then('user removes all products from the cart', async function () {
    const home = new homePage(this.page);
    await home.removeAllProductsFromCart();
});
