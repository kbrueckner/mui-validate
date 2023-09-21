import { test, expect } from '@playwright/test';
import {
    UNREG_CHECK_2_BUTTON, UNREG_CHECK_BUTTON, UNREG_REGISTER_2_BUTTON,
    UNREG_REGISTER_BUTTON, UNREG_UNREGISTER_2_BUTTON, UNREG_UNREGISTER_BUTTON,
} from '../../playground/src/v5/locators';
import { BASE_URL } from '../constants';

test.describe('Material-UI V5 tests', () => {
    /**
     * Unregister Validate
     */

    test('Unregister validate', async ({ page }) => {
        await page.goto(`${BASE_URL}/unregister-validation`);

        const unregisterButton = `#${UNREG_UNREGISTER_BUTTON}`;
        const registerButton = `#${UNREG_REGISTER_BUTTON}`;
        const checkButton = `#${UNREG_CHECK_BUTTON}`;

        expect(await page.locator(checkButton)).toBeDisabled();
        await page.click(unregisterButton);
        expect(await page.locator(checkButton)).toBeEnabled();
        await page.click(registerButton);
        expect(await page.locator(checkButton)).toBeDisabled();
    });

    test('Unregister validate with cross validation', async ({ page }) => {
        await page.goto(`${BASE_URL}/unregister-validation`);

        const unregisterButton = `#${UNREG_UNREGISTER_2_BUTTON}`;
        const registerButton = `#${UNREG_REGISTER_2_BUTTON}`;
        const checkButton = `#${UNREG_CHECK_2_BUTTON}`;

        expect(await page.locator(checkButton)).toBeDisabled();
        await page.click(unregisterButton);
        expect(await page.locator(checkButton)).toBeEnabled();
        await page.click(registerButton);
        expect(await page.locator(checkButton)).toBeDisabled();
    });
});
