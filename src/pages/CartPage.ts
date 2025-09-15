import { Page, Locator } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly qtyInput: Locator;
  readonly updateButton: Locator;
  readonly unitPrice: Locator;
  readonly totalPrice: Locator;

  constructor(page: Page) {
    this.page = page;
    this.qtyInput = page.locator('[data-test="product-quantity"]');
    this.updateButton = page.getByRole('button', { name: /Update cart/i });
    this.unitPrice = page.locator(`span[aria-label='unit-price']`);
    this.totalPrice = page.locator(`td[data-test='cart-total']`);
  }

  async goto() {
    await this.page.goto('/checkout');
  }

  async updateQuantity(qty: number) {
    await this.qtyInput.waitFor({ state: 'visible', timeout: 10000 });
    await this.qtyInput.fill(String(qty));
    await this.qtyInput.press('Tab');
  }
  

  async getUnitPriceText() {
    return this.unitPrice.textContent();
  }

  async getTotalPriceText() {
    return this.totalPrice.textContent();
  }
}