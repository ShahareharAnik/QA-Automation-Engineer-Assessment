Playwright Practice Shop Automation Framework

This repository contains a test automation framework built using Playwright for both UI and API testing on Practice Software Testing. The framework follows Page Object Model (POM) and is designed to be scalable and maintainable for future enhancements.

---

Table of Contents:

* Project Structure
* Installation
* Running Tests
* Framework Design
* Test Coverage
* Best Practices Used

---

Installation:

1. Clone the repository:

2. Install dependencies:
   npm install

3. Install Playwright browsers (if not installed):
   npx playwright install

---

Running Tests:
Run all tests (headless):
npm test

Run tests in headed mode (browser visible):
npm run test\:headed

Run a specific test file:
npx playwright test src/tests/contact.spec.ts

Generate HTML report:
npx playwright show-report

---

Framework Design:

* Page Object Model (POM): Each page has its own class that contains locators and functions for interactions.
* Helper Functions: Utilities such as parsePrice for converting price strings to numbers.
* Configurable: URLs, selectors, and other reusable variables are centralized for easy maintenance.
* Scalable: Easy to add new pages, tests, or APIs without changing existing structure.

---

Test Coverage:

1. Contact Form

   * Submit empty form → validate error messages
   * Fill and submit form → validate success message

2. Cart Functionality

   * Add product to cart → verify product added
   * Update quantity → verify total price calculation

---

Best Practices Used:

* Proper Page Object Model separation
* Locator caching for reusable elements
* Explicit waits for dynamic elements (avoiding arbitrary sleep where possible)
* Handling real user behavior (blur events, tabbing, clicking outside)
* Conversion of text prices to numbers before assertions
* Retry mechanism for flaky tests in CI

---

Notes:

* Some input updates require a blur event (e.g., updating quantity in cart) for frontend calculation to complete. This is handled via press('Tab') or click outside in the framework.
* All tests are designed to be idempotent and can run repeatedly without affecting the test environment.

---

Author:
Shaharehar Rahaman Anik – Sr.QA Automation Engineer
