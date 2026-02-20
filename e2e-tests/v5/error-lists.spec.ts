import { test, expect } from '@playwright/test';
import { BASE_URL } from '../constants';
import {
    ERRORLIST1, ERRORLIST2, ERRORLIST_INPUT1, ERRORLIST_INPUT2,
} from '../../playground/src/v5/locators';

test.describe('Material-UI V5 tests', () => {
    test('ErrorList', async ({ page }) => {
        await page.goto(`${BASE_URL}/errorlists`);

        // both lists display with title
        expect(await page.waitForSelector(`#${ERRORLIST1} .error-list__title`)).toBeTruthy();
        expect(await page.waitForSelector(`#${ERRORLIST2} .error-list__title`)).toBeTruthy();
        // each shows 3 error messages
        await expect(page.locator(`#${ERRORLIST1} .error-list__error-message`)).toHaveCount(3);
        await expect(page.locator(`#${ERRORLIST2} .error-list__error-message`)).toHaveCount(3);
        // Type slowly to allow app state to update
        // eslint-disable-next-line no-restricted-syntax
        for (const char of 'test') {
            // eslint-disable-next-line no-await-in-loop
            await page.locator(`#${ERRORLIST_INPUT1}`).press(char);
            // eslint-disable-next-line no-await-in-loop
            await page.waitForTimeout(10); // wait 10ms between key presses
        }

        // both lists display with title
        expect(await page.waitForSelector(`#${ERRORLIST1} .error-list__title`)).toBeTruthy();
        expect(await page.waitForSelector(`#${ERRORLIST2} .error-list__title`)).toBeTruthy();
        // each shows 1 error message
        await expect(page.locator(`#${ERRORLIST1} .error-list__error-message`)).toHaveCount(1);
        await expect(page.locator(`#${ERRORLIST2} .error-list__error-message`)).toHaveCount(1);

        // eslint-disable-next-line no-restricted-syntax
        for (const char of 'test') {
            // eslint-disable-next-line no-await-in-loop
            await page.locator(`#${ERRORLIST_INPUT2}`).press(char);
            // eslint-disable-next-line no-await-in-loop
            await page.waitForTimeout(10);
        }

        // only list 1 should be visible
        expect(await page.waitForSelector(`#${ERRORLIST1} .error-list__title`)).toBeTruthy();
        await expect(page.locator(`#${ERRORLIST2} .error-list__title`)).toHaveCount(0);
        // list 1 should display message for no issues, list 2 is invisible
        await expect(page.locator(`#${ERRORLIST1} .error-list__no-errors-message`)).toHaveCount(1);
        await expect(page.locator(`#${ERRORLIST1} .error-list__error-message`)).toHaveCount(0);
        await expect(page.locator(`#${ERRORLIST2} .error-list__error-message`)).toHaveCount(0);
    });
});
