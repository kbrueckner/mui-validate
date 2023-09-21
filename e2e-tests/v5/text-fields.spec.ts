import { test, expect } from '@playwright/test';
import { BASE_URL } from '../constants';
import {
    TEXTFIELD_CUSTOM, TEXTFIELD_CUSTOM_INPUT, TEXTFIELD_REGEX, TEXTFIELD_REGEX_INPUT, TEXTFIELD_REQUIRED,
    TEXTFIELD_REQUIRED_INPUT, TEXTFIELD_UNIQUE, TEXTFIELD_UNIQUE_INPUT,
} from '../../playground/src/v5/locators';

test.describe('Material-UI V5 tests', () => {
    // test for required
    test('TextField: required', async ({ page }) => {
        await page.goto(`${BASE_URL}/textfields`);

        const control = `#${TEXTFIELD_REQUIRED}`;
        const input = `#${TEXTFIELD_REQUIRED_INPUT}`;

        await page.fill(input, 'test');
        expect(await page.waitForSelector(`${control}[data-has-error="false"]`)).toBeTruthy();

        await page.fill(input, '');
        expect(await page.waitForSelector(`${control}[data-has-error="true"]`)).toBeTruthy();
    });

    // test for unique
    test('TextField: unique', async ({ page }) => {
        await page.goto(`${BASE_URL}/textfields`);

        const control = `#${TEXTFIELD_UNIQUE}`;
        const input = `#${TEXTFIELD_UNIQUE_INPUT}`;

        await page.fill(input, 'a');
        expect(await page.waitForSelector(`${control}[data-has-error="true"]`)).toBeTruthy();

        await page.fill(input, 'b');
        expect(await page.waitForSelector(`${control}[data-has-error="false"]`)).toBeTruthy();
    });

    // test for regex
    test('TextField: regex', async ({ page }) => {
        await page.goto(`${BASE_URL}/textfields`);

        const control = `#${TEXTFIELD_REGEX}`;
        const input = `#${TEXTFIELD_REGEX_INPUT}`;

        await page.fill(input, 'a');
        expect(await page.waitForSelector(`${control}[data-has-error="true"]`)).toBeTruthy();

        await page.fill(input, '1');
        expect(await page.waitForSelector(`${control}[data-has-error="false"]`)).toBeTruthy();
    });

    // test for custom
    test('TextField: custom', async ({ page }) => {
        await page.goto(`${BASE_URL}/textfields`);

        const control = `#${TEXTFIELD_CUSTOM}`;
        const input = `#${TEXTFIELD_CUSTOM_INPUT}`;

        await page.fill(input, 'a');
        expect(await page.waitForSelector(`${control}[data-has-error="true"]`)).toBeTruthy();

        await page.fill(input, 'b');
        expect(await page.waitForSelector(`${control}[data-has-error="false"]`)).toBeTruthy();
    });
});
