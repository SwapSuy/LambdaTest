import { test, expect, Locator, Page } from "@playwright/test";

export class homePage {
  page: Page;
  home: Locator;
  bannerButton: Locator;
  shopNowButton1: Locator;
  popularTab: Locator;
  latestTab: Locator;
  bestSellerTab: Locator;
  topCollectionHeader: Locator;
  rightArrow: Locator;
  leftArrow: Locator;
  selectProduct: Locator;
  desktopSelectProduct: Locator;
  selectInStockCheckbox: Locator;
  selectInStockProduct: Locator;
  addToCartButton: Locator;
  viewCartButton: Locator;
  checkOutButton: Locator;
  hoverOverSelectProduct: Locator;
  cameraImage: Locator;
  ipodTouchImage: Locator;
  addTocartImage: Locator;
  firstName: Locator;
  lastName: Locator;
  email: Locator;
  telePhone: Locator;
  password: Locator;
  confirmPassword: Locator;
  addressLine1: Locator;
  city: Locator;
  postCode: Locator;
  privacyPolicyCheckbox: Locator;
  termsAndConditionsCheckbox: Locator;
  checkoutContinueButton: Locator;
  removeFromCartButton: Locator;
  productCompareButton: Locator;
  addToCartButtonOnProductComparePage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.home = page.locator('a.nav-link:has(span.title:has-text("Home"))');
    this.bannerButton = page.locator("img[alt='Canon DSLR camera']"); // example button text
    this.shopNowButton1 = page.locator(
      ".btn.btn-lg.btn-outline-primary.ml-lg-auto.flex-shrink-0"
    ); // example button text
    this.popularTab = page.locator(".nav-link.icon-left.active");
    this.latestTab = page.locator(
      "div[id='common-home'] li:nth-child(2) a:nth-child(1)"
    ); // Assuming you have a locator for the Latest tab
    this.bestSellerTab = page.locator(".nav-link.icon-left.active");
    this.topCollectionHeader = page.locator(
      "div[class='mz-tab-listing-header d-flex flex-wrap tabs'] h3[class='module-title']"
    );
    this.rightArrow = page.locator(
      "body > div:nth-child(1) > div:nth-child(5) > div:nth-child(2) > div:nth-child(7) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > a:nth-child(2) > div:nth-child(1) > svg:nth-child(1) > use:nth-child(1)"
    );
    this.leftArrow = page.locator(
      "body > div:nth-child(1) > div:nth-child(5) > div:nth-child(2) > div:nth-child(7) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > a:nth-child(1) > div:nth-child(1) > svg:nth-child(1) > use:nth-child(1)"
    );
    this.selectProduct = page.locator("button:has(i.fa-shopping-cart)");
    this.desktopSelectProduct = page.locator("img[alt='Desktops']");
    this.hoverOverSelectProduct = page.locator(
      "a[id='mz-product-listing-image-39217984-0-1'] div[class='carousel-item active'] img[title='HTC Touch HD']"
    );
    this.selectInStockCheckbox = page.locator("label[for='mz-fss-0--1']");
    this.selectInStockProduct = page.locator(
      "div[class='carousel-item active'] img[title='iPod Nano']"
    );
    this.addToCartButton = page.locator(
      "div[id='entry_216842'] button[title='Add to Cart']"
    );

    this.viewCartButton = page.locator("a[class='btn btn-primary btn-block']");
    this.checkOutButton = page.locator("a[class='btn btn-lg btn-primary']");
    this.cameraImage = page.locator(
      "a[title='Lumix S Series From Panasonic'] div[class='hover-effect hover-effect-2']"
    );
    this.ipodTouchImage = page.locator(
      "div[class='carousel-item active'] img[title='iPod Touch']"
    );
    this.addTocartImage = page.locator(
      "button[class='btn btn-cart cart-59'] i[class='fas fa-shopping-cart']"
    );
    this.firstName = page.locator("#input-payment-firstname");
    this.lastName = page.locator("#input-payment-lastname");
    this.email = page.locator("#input-payment-email");
    this.telePhone = page.locator("#input-payment-telephone");
    this.password = page.locator("#input-payment-password");
    this.confirmPassword = page.locator("#input-payment-confirm");
    this.addressLine1 = page.locator("#input-payment-address-1");
    this.city = page.locator("#input-payment-city");
    this.postCode = page.locator("#input-payment-postcode");
    this.privacyPolicyCheckbox = page.locator(
      "label[for='input-account-agree']"
    );
    this.termsAndConditionsCheckbox = page.locator("label[for='input-agree']");
    this.checkoutContinueButton = page.locator("#button-save");
    this.removeFromCartButton = page.locator(".fas.fa-times-circle");
    this.productCompareButton = page.locator(
      "a[class='btn btn-secondary btn-block']"
    );
    this.addToCartButtonOnProductComparePage = page.locator(
      "input[value='Add to Cart']"
    );
  }

  async goToHomePage() {
    await this.home.click();
    await this.page.waitForLoadState("networkidle");
  }

  async clickOnBannerButton() {
    await this.bannerButton.click();
    console.log("Clicked on the banner button");
    await this.page.waitForLoadState("networkidle");
  }

  async validateHomeUrl(expectedUrl: string) {
    const currentUrl = this.page.url();
    expect(currentUrl).toBe(expectedUrl);
    console.log(`Current URL is: ${currentUrl}`);
  }

  async clickOnShopNowButton() {
    await this.shopNowButton1.click();
    console.log("Clicked on the Shop Now button");
    await this.page.waitForLoadState("networkidle");
  }

  async clickOnPopularTab() {
    await this.popularTab.click();
    console.log("Clicked on the Popular tab");
    await this.page.waitForLoadState("networkidle");
  }

  async clickOnLatestTab() {
    // Implement the logic to click on the Latest tab
    await this.latestTab.click();
    await this.page.waitForLoadState("networkidle");
    console.log("Clicked on the Latest tab");
  }

  async clickOnBestSellerTab() {
    await this.bestSellerTab.click();
    console.log("Clicked on the Best Seller tab");
    await this.page.waitForLoadState("networkidle");
  }

  async validateTopCollectionHeader() {
    const headerText = await this.topCollectionHeader.textContent();
    expect(headerText).toContain("Top Collection");
    console.log(`Top Collection header text is: ${headerText}`);
  }

  async clickOnRightArrow() {
    await this.rightArrow.click();
    console.log("Clicked on the right arrow on Top Collection");
    await this.page.waitForLoadState("networkidle");
  }

  async clickOnLeftArrow() {
    await this.leftArrow.click();
    console.log("Clicked on the left arrow on Top Collection");
    await this.page.waitForLoadState("networkidle");
  }

  async clickonDesktopSelectProduct() {
    await this.desktopSelectProduct.click();
    console.log("Clicked on the Desktop Select Product");
    await this.page.waitForLoadState("networkidle");
  }

  async InStockCheckbox() {
    await this.selectInStockCheckbox.click();
    console.log("Clicked on the In Stock checkbox");
    await this.page.waitForLoadState("networkidle");
  }

  async clickonSelectInStockProduct() {
    await this.selectInStockProduct.click();
    console.log("Clicked on the In Stock product");
    await this.page.waitForLoadState("networkidle");
  }

  async clickOnAddToCartButton() {
    await this.addToCartButton.click();
    console.log("Clicked on the Add to Cart button");
    await this.page.waitForLoadState("networkidle");
  }

  async clickOnViewCartButton() {
    await this.viewCartButton.click();
    console.log("Clicked on the View Cart button");
    await this.page.waitForLoadState("networkidle");
  }

  async valiadteAddToCartUrl(expectedUrl: string) {
    const currentUrl = this.page.url();
    expect(currentUrl).toBe(expectedUrl);
    console.log(`Current URL after Add to Cart is: ${currentUrl}`);
  }

  async clickOnCheckOutButton() {
    await this.checkOutButton.click();
    console.log("Clicked on the Check Out button");
    await this.page.waitForLoadState("networkidle");
  }

  async validateCheckOutUrl(expectedUrl: string) {
    const currentUrl = this.page.url();
    expect(currentUrl).toBe(expectedUrl);
    console.log(`Current URL after Check Out is: ${currentUrl}`);
  }

  async hoverOverProductImage() {
    await this.selectInStockProduct.waitFor({ state: "visible" });
    await this.selectInStockProduct.scrollIntoViewIfNeeded();
    await this.selectInStockProduct.hover();

    await this.selectProduct.waitFor({ state: "visible" });
    await this.selectProduct.scrollIntoViewIfNeeded();
    await this.selectProduct.hover();
    await this.selectProduct.click();
    console.log("Hovered over the product image under Top Collection");
    await this.page.waitForLoadState("networkidle");
  }

  async clickOnSelectProduct() {
    await this.selectProduct.waitFor({ state: "visible" });
    await this.selectProduct.scrollIntoViewIfNeeded();
    await this.selectProduct.click();
    console.log("Clicked on the Select Product button");
    await this.page.waitForLoadState("networkidle");
  }

  async hoverOverCameraImage() {
    await this.cameraImage.waitFor({ state: "visible" });
    await this.cameraImage.click();
    console.log("Hovered over the camera image");

    // await this.ipodTouchImage.first().waitFor({ state: 'visible' });
    // await this.ipodTouchImage.first().scrollIntoViewIfNeeded();
    // await this.selectInStockProduct.waitFor({ state: 'visible' });
    //await this.selectInStockProduct.scrollIntoViewIfNeeded();
    // await this.ipodTouchImage.hover();

    // await this.selectProduct.waitFor({ state: 'visible' });
    // await this.selectProduct.scrollIntoViewIfNeeded();
    // await this.selectProduct.hover();
  }

  async hoverOverIpodImage() {
    await this.ipodTouchImage.waitFor({ state: "visible" });
    await this.ipodTouchImage.scrollIntoViewIfNeeded();
    await this.ipodTouchImage.hover();
    console.log("Hovered over the iPod Touch image");
  }

  async hoverOverAddToCartButton() {
    await this.addTocartImage.waitFor({ state: "visible" });
    await this.addTocartImage.scrollIntoViewIfNeeded();
    await this.addTocartImage.hover();
    console.log("Hovered over the Add to Cart button");
  }

  async hoverAndClickAddToCartByProductName(productName: string) {
    // 1. Find the product card by name
    const productCard = this.page
      .locator("div.product-layout")
      .filter({ hasText: productName })
      .first();

    // 2. Hover to reveal the "Add to Cart" button
    await productCard.hover();

    // 3. Locate the Add to Cart button inside this card
    const addToCartButton = productCard.locator("button[title='Add to Cart']");

    // 4. Wait for it and click
    await addToCartButton.waitFor({ state: "visible", timeout: 5000 });
    await addToCartButton.click();

    console.log(
      `Hovered and clicked 'Add to Cart' for product: ${productName}`
    );
    await this.page.waitForLoadState("networkidle");
  }

  async hoverAndClickAddToCompareByProductName(productName: string) {
    // 1. Find the product card by name
    const productCard = this.page
      .locator("div.product-layout")
      .filter({ hasText: productName })
      .first();

    // 2. Hover to reveal the "Compare this Product" button
    await productCard.hover();

    // 3. Locate the Add to Cart button inside this card
    const addToCartButton = productCard.locator(
      "button[title='Compare this Product']"
    );

    // 4. Wait for it and click
    await addToCartButton.waitFor({ state: "visible", timeout: 5000 });
    await addToCartButton.click();

    console.log(
      `Hovered and clicked 'Compare this Product' for product: ${productName}`
    );
    await this.page.waitForLoadState("networkidle");
  }

  async fillCheckoutForm() {
    await this.firstName.fill("John");
    await this.lastName.fill("Doe");
    // 🔄 Dynamically generate unique email address
    const uniqueEmail = `testuser_${Date.now()}@example.com`;
    console.log(`📧 Generated email: ${uniqueEmail}`);
    await this.email.fill(uniqueEmail);
    await this.telePhone.fill("1234567890");
    await this.password.fill("Password123");
    await this.confirmPassword.fill("Password123");
    await this.addressLine1.fill("123 Main St");
    await this.city.fill("Pune");
    await this.postCode.fill("411033");
    await this.privacyPolicyCheckbox.click();
    await this.termsAndConditionsCheckbox.click();
    console.log("Filled in the checkout form with user details");
    // Optionally, you can add a wait here if needed
    await this.page.waitForTimeout(1000); // Wait for 1 second to ensure the form is filled
    await this.checkoutContinueButton.click();
    console.log("Clicked on the Continue button in the checkout form");
  }

  async removeFromCart() {
    await this.removeFromCartButton.waitFor({ state: "visible" });
    await this.removeFromCartButton.click();
    console.log("Clicked on the Remove from Cart button");
    await this.page.waitForLoadState("networkidle");
  }

  async clickOnProductCompareButton() {
    await this.productCompareButton.waitFor({ state: "visible" });
    await this.productCompareButton.click();
    console.log("Clicked on the Product Compare button");
    await this.page.waitForLoadState("networkidle");
  }

  async validateProductCompareSuccessAlert() {
    const successAlert = this.page.locator(
      ".alert.alert-success.alert-dismissible"
    );
    await successAlert.waitFor({ state: "visible" });
    const alertText = await successAlert.textContent();
    expect(alertText).toContain(
      " Success: You have modified your product comparison!"
    );
    console.log("Success alert message is displayed on product compare page");
  }

  async clickOnAddToCartButtonOnProductComparePage() {
    await this.addToCartButtonOnProductComparePage.waitFor({
      state: "visible",
    });
    await this.addToCartButtonOnProductComparePage.click();
    console.log("Clicked on the Add to Cart button on Product Compare page");
    await this.page.waitForLoadState("networkidle");
  }

  async validateProductCompareTableElements() {
    const productName = this.page.locator("tbody tr td a strong");
    const productPrice = this.page.locator(
      "tbody tr:nth-child(3) td:nth-child(2)"
    );

    await productName.waitFor({ state: "visible" });
    const nameText = await productName.textContent();
    expect(nameText).toBeTruthy();
    console.log("Product name is displayed in the compare table:", nameText);
    await productPrice.waitFor({ state: "visible" });
    const priceText = await productPrice.textContent();
    expect(priceText).toBeTruthy();
    console.log("Product price is displayed in the compare table:", priceText);
    const productModel = this.page.locator(
      "tbody tr:nth-child(4) td:nth-child(2)"
    );
    await productModel.waitFor({ state: "visible" });
    const modelText = await productModel.textContent();
    expect(modelText).toBeTruthy();
    console.log("Product model is displayed in the compare table:", modelText);
    const productBrand = this.page.locator(
      "tbody tr:nth-child(5) td:nth-child(2)"
    );
    await productBrand.waitFor({ state: "visible" });
    const brandText = await productBrand.textContent();
    expect(brandText).toBeTruthy();
    console.log("Product brand is displayed in the compare table:", brandText);
    const productAvailability = this.page.locator(
      "tbody tr:nth-child(6) td:nth-child(2)"
    );
    await productAvailability.waitFor({ state: "visible" });
    const availabilityText = await productAvailability.textContent();
    expect(availabilityText).toBeTruthy();
    console.log(
      "Product availability is displayed in the compare table:",
      availabilityText
    );
  }

  async removeAllProductsFromCart() {
    const removeButton = this.page.locator('button[title="Remove"]');
    const itemCount = await removeButton.count();
    console.log("Found ${itemCount} items in the cart to remove.");

    for (let i = 0; i < itemCount; i++) {
      const firstRemove = removeButton.first();
      await firstRemove.waitFor({ state: "visible", timeout: 7000 });
      await firstRemove.click();
      await this.page.waitForLoadState("networkidle");
      await this.page.waitForTimeout(1000);
      console.log(`Removed item ${i + 1} from the cart.`);
    }

    console.log("All items has been removed from the cart");
  }
}
