import { test, expect } from '@playwright/test';
import { ContactPage } from '../pages/ContactPage';

test.describe('Contact form', () => {
  test('shows validation errors when submitted empty', async ({ page }) => {
    const contact = new ContactPage(page);
    await contact.goto();
    await contact.submitEmpty();
    const errors = await contact.getValidationMessages();
    expect(errors.length).toBeGreaterThan(0);
  });

  test('submits filled form successfully', async ({ page }) => {
    const contact = new ContactPage(page);
    await contact.goto();
    await contact.fillAndSubmit({
      firstName: 'Anik',
      lastName: 'Test',
      email: `anik+${Date.now()}@example.com`,
      message: `Speak to WSD experts to learn how they can help you take your business to the next level.`,
    });
    await expect(contact.successMessage).toBeVisible();
    const text = await contact.getSuccessText();
    expect(text).toContain('Thank');
  });
});