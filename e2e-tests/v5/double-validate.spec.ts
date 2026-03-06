import { test, expect } from '@playwright/test';
import { BASE_URL } from '../constants';
import {
    TEXTFIELD_DOUBLE_VALIDATE_1, TEXTFIELD_DOUBLE_VALIDATE_1_INPUT,
} from '../../playground/src/v5/locators';

test.describe('Material-UI V5 tests', () => {
    test('DoubleValidate', async ({ page }) => {
        await page.goto(`${BASE_URL}/double-validate`);

        const control = `#${TEXTFIELD_DOUBLE_VALIDATE_1}`;
        const input = `#${TEXTFIELD_DOUBLE_VALIDATE_1_INPUT}`;
        const errorMessage = `${control} .mui-validate__validate-message`;

        expect(await page.waitForSelector(`${control}[data-has-message="false"]`)).toBeTruthy();

        await page.fill(input, 'test');
        await expect(page.locator(errorMessage)).toHaveText('Value must be empty');
        expect(await page.waitForSelector(`${control}[data-has-message="false"]`)).toBeTruthy();

        await page.fill(input, '');
        expect(await page.waitForSelector(`${control}[data-has-message="true"]`)).toBeTruthy();
        await expect(page.locator(errorMessage)).toHaveText('Please fill in this field.');
    });
});
