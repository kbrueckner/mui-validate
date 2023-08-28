import { test, expect } from '@playwright/test';
import { BASE_URL } from '../constants';
import {
    PICKER_CUSTOM, PICKER_CUSTOM_INPUT, PICKER_REGEX, PICKER_REGEX_INPUT, PICKER_REQUIRED,
    PICKER_REQUIRED_INPUT, PICKER_UNIQUE, PICKER_UNIQUE_INPUT,
} from '../../playground/src/v5/locators';

test.describe('Material-UI V5 tests', () => {
    // test for required
    test('Picker: required', async ({ page }) => {
        await page.goto(`${BASE_URL}/pickers`);

        const control = `#${PICKER_REQUIRED}`;
        const input = `#${PICKER_REQUIRED_INPUT}`;

        await page.fill(input, '11.11.2020');
        expect(await page.waitForSelector(`${control}[data-has-error="false"]`)).toBeTruthy();

        await page.fill(input, '11.11');
        expect(await page.waitForSelector(`${control}[data-has-error="true"]`)).toBeTruthy();
    });

    // test for unique
    test('Picker: unique', async ({ page }) => {
        await page.goto(`${BASE_URL}/pickers`);

        const control = `#${PICKER_UNIQUE}`;
        const input = `#${PICKER_UNIQUE_INPUT}`;

        await page.fill(input, '11.11.2020');
        expect(await page.waitForSelector(`${control}[data-has-error="false"]`)).toBeTruthy();

        await page.fill(input, '11.11.2021');
        expect(await page.waitForSelector(`${control}[data-has-error="true"]`)).toBeTruthy();
    });

    // test for regex
    test('Picker: regex', async ({ page }) => {
        await page.goto(`${BASE_URL}/pickers`);

        const control = `#${PICKER_REGEX}`;
        const input = `#${PICKER_REGEX_INPUT}`;

        await page.fill(input, '11.11.2020');
        expect(await page.waitForSelector(`${control}[data-has-error="false"]`)).toBeTruthy();

        await page.fill(input, '11.11.2021');
        expect(await page.waitForSelector(`${control}[data-has-error="true"]`)).toBeTruthy();
    });

    // test for custom
    test('Picker: custom', async ({ page }) => {
        await page.goto(`${BASE_URL}/pickers`);

        const control = `#${PICKER_CUSTOM}`;
        const input = `#${PICKER_CUSTOM_INPUT}`;

        await page.fill(input, '11.11.2020');
        expect(await page.waitForSelector(`${control}[data-has-error="false"]`)).toBeTruthy();

        await page.fill(input, '11.11.2021');
        expect(await page.waitForSelector(`${control}[data-has-error="true"]`)).toBeTruthy();
    });
});
