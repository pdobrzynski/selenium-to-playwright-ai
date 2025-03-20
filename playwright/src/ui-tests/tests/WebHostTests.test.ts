import { test, expect } from '@playwright/test';
import { Site88Page } from '../page-objects/Site88Page';

test('site88Test', async ({ page }) => {
  const site88Page = new Site88Page(page);

  // Navigate to URL.
  await site88Page.navigate();

  // Type 'Hello World' to text box.
  await (await site88Page.getTextBox()).fill('Hello World TypeScript');

  // Wait before closing browser.
  await page.waitForTimeout(3000);
});
