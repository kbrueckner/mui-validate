import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'dotenv/config';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const CONFIG: PlaywrightTestConfig = {
    testDir: './e2e-tests',
    /* Maximum time one test can run for. */
    timeout: 60000,
    expect: {
        /**
         * Maximum time expect() should wait for the condition to be met.
         * For example in `await expect(locator).toHaveText();`
         */
        timeout: 20000,
    },
    /* Run tests in files in parallel */
    fullyParallel: false,
    /* Fail the build on CI if you accidentally left test.only in the source code. */
    forbidOnly: Boolean(process.env.CI),
    /* Retry on CI only */
    // retries: process.env.CI ? 2 : 0,
    /* Opt out of parallel tests on CI. */
    workers: 1,
    /* Reporter to use. See https://playwright.dev/docs/test-reporters */
    reporter: [['html'], ['junit', { outputFile: 'results.xml' }]],
    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    use: {
        /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
        actionTimeout: 5000,
        /* Base URL to use in actions like `await page.goto('/')`. */
        baseURL: 'http://localhost:3000',
        headless: !(process.env.HEADLESS === 'false'),
        ignoreHTTPSErrors: process.env.IGNORE_HTTPS_ERRORS === 'true',
        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
    },
    /* Configure projects for major browsers */
    projects: [
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome'],
            },
        },
    ],
};
export default CONFIG;
