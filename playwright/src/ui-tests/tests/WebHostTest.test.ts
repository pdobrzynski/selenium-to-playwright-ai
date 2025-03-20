import { test, expect, Page } from '@playwright/test';

test.describe('WebHost Tests', () => {
    let page: Page;

    test.beforeEach(async ({ browser }) => {
        // Ensure browser context and page are correctly initialized
        const context = await browser.newContext();
        page = await context.newPage();
    });

    test.afterEach(async () => {
        // Ensure the page is properly closed after each test
        await page.close();
    });

    test('Sample Test for Site88 Page', async () => {
        // Navigate to the base URL and verify the page title
        await page.goto('/');
        expect(await page.title()).toContain('Free Web Hosting');
    });
});
