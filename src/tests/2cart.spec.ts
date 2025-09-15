import { test, expect } from "@playwright/test";
import { ProductPage } from "../pages/ProductPage";
import { CartPage } from "../pages/CartPage";
import { parsePrice } from "../utils/helpers";

test("Add product to cart and update quantity", async ({ page }) => {
  const productName = "Combination Pliers";
  const product = new ProductPage(page);
  await product.goto(productName);
  const cart = new CartPage(page);
  const unitPriceText = await cart.getUnitPriceText();
  const priceText = await product.getPrice();
  const unitPrice = parsePrice(priceText || "");

  await product.addToCart();
  await page.waitForTimeout(5000);

  await cart.goto();

  await page.waitForTimeout(5000);
  const productRow: Locator = page.getByRole("row", { name: productName });

  await expect(productRow).toBeVisible();
  await cart.updateQuantity(3);
  await productRow.click();
  await page.waitForTimeout(5000);

  const totalText = await cart.getTotalPriceText();
  const total = parsePrice(totalText || "");

  const unitPrices = parsePrice(unitPriceText || "");

  expect(total).toBeCloseTo(unitPrices * 3, 2);
});
