import { Page, Locator } from '@playwright/test';

export class ProductPage {
  readonly page: Page;
  readonly addToCartButton: Locator;
  readonly quantityInput: Locator;
  readonly increaseQuantityButton: Locator;
  readonly decreaseQuantityButton: Locator;
  readonly price: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addToCartButton = page.locator(`//button[@id='btn-add-to-cart']`)
    this.quantityInput = page.getByRole('spinbutton', { name: /Quantity/i });
    this.increaseQuantityButton = page.getByRole('button', { name: /Increase quantity/i });
    this.decreaseQuantityButton = page.getByRole('button', { name: /Decrease quantity/i });
    this.price = page.getByText(/^\$\d/); // matches something like "$14.15"
  }

  async goto(productName: string) {
    await this.page.goto('/');
    await this.page.getByRole('link', { name: productName }).click();
  }

  async addToCart() {
    await this.addToCartButton.click();
  }

  async getPrice(): Promise<string> {
    return await this.price.textContent() ?? '';
  }

  async updateQuantity(amount: number) {
    await this.quantityInput.fill(amount.toString());
  }
}
