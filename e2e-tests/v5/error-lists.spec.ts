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
        // each shows 2 error messages
        expect(await page.locator(`#${ERRORLIST1} .error-list__error-message`)).toHaveCount(3);
        expect(await page.locator(`#${ERRORLIST2} .error-list__error-message`)).toHaveCount(3);
        await page.locator(`#${ERRORLIST_INPUT1}`).pressSequentially('test');

        // both lists display with title
        expect(await page.waitForSelector(`#${ERRORLIST1} .error-list__title`)).toBeTruthy();
        expect(await page.waitForSelector(`#${ERRORLIST2} .error-list__title`)).toBeTruthy();
        // each shows 1 error message
        expect(await page.locator(`#${ERRORLIST1} .error-list__error-message`)).toHaveCount(1);
        expect(await page.locator(`#${ERRORLIST2} .error-list__error-message`)).toHaveCount(1);

        // await new Promise((r) => setTimeout(r, 1000));
        await page.locator(`#${ERRORLIST_INPUT2}`).pressSequentially('test');

        // only list 1 should be visible
        expect(await page.waitForSelector(`#${ERRORLIST1} .error-list__title`)).toBeTruthy();
        expect(await page.locator(`#${ERRORLIST2} .error-list__title`)).toHaveCount(0);
        // list 1 should display message for no issues, list 2 is invisible
        expect(await page.locator(`#${ERRORLIST1} .error-list__no-errors-message`)).toHaveCount(1);
        expect(page.locator(`#${ERRORLIST1} .error-list__error-message`)).toHaveCount(0);
        expect(page.locator(`#${ERRORLIST2} .error-list__error-message`)).toHaveCount(0);
    });
});
