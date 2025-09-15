import { Page, Locator } from '@playwright/test';

export class ContactPage {
  readonly page: Page;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly email: Locator;
  readonly message: Locator;
  readonly submitButton: Locator;
  readonly successMessage: Locator;
  readonly validationMessages: Locator;
  readonly subject: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstName = page.getByLabel('First name');
    this.lastName = page.getByLabel('Last name');
    this.email = page.getByLabel('Email address');
    this.message = page.getByLabel('Message');
    this.submitButton = page.getByRole('button', { name: /Send|Submit|Send message/i });
    this.successMessage = page.locator(`//div[@role='alert']`);
    this.validationMessages = page.getByRole('alert');
    this.subject = page.locator('#subject');
  }

  async goto() {
    await this.page.goto('/contact');
  }

  async submitEmpty() {
    await this.submitButton.click();
  }

  async fillAndSubmit({ firstName, lastName, email, message }: 
    { firstName: string; lastName: string; email: string; message: string; }) {
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.email.fill(email);
    await this.message.fill(message);
    await this.selectSubject('webmaster');
    await this.submitButton.click();
  }

  async getValidationMessages() {
    return this.validationMessages.allTextContents();
  }

  async getSuccessText() {
    return this.successMessage.textContent();
  }

  async selectSubject(value: string) {
    await this.subject.selectOption(value);
  }
}
