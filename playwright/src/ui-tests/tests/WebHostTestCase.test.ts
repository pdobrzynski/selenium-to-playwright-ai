import { test, expect, Page } from '@playwright/test';

test.describe('WebHost Test Case', () => {
    let page: Page;
    const BROWSER_WAIT_MILLISECONDS = 4000;

    test.beforeEach(async ({ browser }) => {
        console.log('Setting up WebHostTests...');
        const context = await browser.newContext();
        page = await context.newPage();
    });

    test.afterEach(async () => {
        console.log('Tearing down WebHostTests...');
        await page.close();
    });

    test('Navigate to Site88 and verify title', async () => {
        await page.goto('https://www.000webhost.com/');
        expect(await page.title()).toContain('Free Web Hosting');
    });

    test('Wait before closing browser', async () => {
        await page.goto('https://www.000webhost.com/');
        console.log('Waiting before closing browser...');
        await page.waitForTimeout(BROWSER_WAIT_MILLISECONDS);
    });
});
