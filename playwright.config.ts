import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'src/tests',
  timeout: 30000,
  expect: { timeout: 5000 },
  fullyParallel: true,
  retries: 1,
  workers: 1,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: 'https://practicesoftwaretesting.com',
    headless: true,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
});