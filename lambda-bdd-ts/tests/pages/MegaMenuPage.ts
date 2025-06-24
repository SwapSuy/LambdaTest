import { test, expect, Locator, Page } from "@playwright/test";

export class MegaMenuPage {
  private page: Page;
  Header_megaMenu: Locator;
  link_compare: Locator;
  shopByCategory: Locator;
  //Locators for Item Filter Page
  dd_show: Locator;
  dd_SortBy: Locator;
  icon_addToWishlist: Locator;

  constructor(page: Page) {
    this.page = page;
    this.Header_megaMenu = page.locator("ul.navbar-nav.horizontal > li");
    this.link_compare = page.locator("a[href*='compare']");
    this.shopByCategory = page.locator("a[aria-label='Shop by Category'] span");
    this.dd_show=page.locator("select[class='custom-select'][id*='input-limit']");
    this.dd_SortBy=page.locator("select[id*='input-sort'][class='custom-select']");
    this.icon_addToWishlist=page.locator("button[title='Add to Wish List']");
  }

  getOptionByTitle(option: string): Locator {
    return this.page.locator(`[title='${option}']`);
  }

  async navigateMegaMenu() {
    await this.Header_megaMenu.nth(3).waitFor({
      state: "visible",
      timeout: 10000,
    });
    await this.Header_megaMenu.nth(3).hover();
  }

  async selectMegaMenuItem(option: string) {
    await this.page
      .locator(`[title='${option}']`)
      .waitFor({ state: "visible", timeout: 1000 });
    const optionLocator = this.getOptionByTitle(option);
    await optionLocator.waitFor({ state: "visible", timeout: 10000 });
    await optionLocator.hover();
    await optionLocator.click();
    await this.page?.waitForTimeout(9000);
  }

  async shopbyCart() {
    await this.page.waitForLoadState("networkidle");
    await this.shopByCategory
      .nth(1)
      .waitFor({ state: "visible", timeout: 10000 });
    await this.shopByCategory.nth(1).click();
    await this.page?.waitForTimeout(3000);
    await this.page.locator("li[class='nav-item'] span").nth(1).click();
  }

  async filterItem(show: string, sortBy: string){
    await this.dd_show.first().waitFor({state: "visible", timeout: 7000});
    await this.dd_show.first().selectOption(show);
    await this.dd_SortBy.first().waitFor({state: "visible",timeout: 3000});
    await this.dd_SortBy.first().selectOption(sortBy);
    await this.page?.waitForTimeout(3000);
   
  }
  
  async addToWishlist(){
    await this.icon_addToWishlist.first().waitFor({state:"visible", timeout: 3000});
    await this.icon_addToWishlist.first().hover();
    await this.icon_addToWishlist.first().click();

  }
  async hoverAndClickAddToWishlistByProductName(productName: string) {
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
    await this.icon_addToWishlist.first().waitFor({ state: "visible", timeout: 5000 });
    await this.icon_addToWishlist.first().click();

    console.log("Hovered and clicked 'Add to Wishlistt' for product: ${productName}");
    await this.page.waitForLoadState("networkidle");
  }

  
}


