import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './', // Ensure the test directory is correctly set
    timeout: 30000, // Set a reasonable timeout for tests
    retries: 1, // Allow one retry for flaky tests
    use: {
        headless: true, // Run tests in headless mode
        viewport: { width: 1280, height: 720 }, // Set default viewport size
        ignoreHTTPSErrors: true, // Ignore HTTPS errors
        actionTimeout: 10000, // Set timeout for actions
        baseURL: 'https://www.000webhost.com/', // Set a base URL for tests
    },
});
