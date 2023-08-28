import { test, expect } from '@playwright/test';
import { BASE_URL } from '../constants';
import {
    SELECT_CUSTOM, SELECT_CUSTOM_INPUT, SELECT_CUSTOM_INPUT_OPTION_A, SELECT_CUSTOM_INPUT_OPTION_B,
    SELECT_REGEX, SELECT_REGEX_INPUT, SELECT_REGEX_INPUT_OPTION_A, SELECT_REGEX_INPUT_OPTION_B,
    SELECT_REQUIRED, SELECT_REQUIRED_INPUT, SELECT_REQUIRED_INPUT_OPTION_A, SELECT_REQUIRED_INPUT_OPTION_EMPTY,
    SELECT_UNIQUE, SELECT_UNIQUE_INPUT, SELECT_UNIQUE_INPUT_OPTION_A, SELECT_UNIQUE_INPUT_OPTION_B,
} from '../../playground/src/v5/locators';

test.describe('Material-UI V5 tests', () => {
    // test for required
    test('Select: required', async ({ page }) => {
        await page.goto(`${BASE_URL}/selects`);

        const control = `#${SELECT_REQUIRED}`;
        const input = `#${SELECT_REQUIRED_INPUT}`;
        const optionA = `#${SELECT_REQUIRED_INPUT_OPTION_A}`;
        const optionEmpty = `#${SELECT_REQUIRED_INPUT_OPTION_EMPTY}`;

        await page.click(input);
        await page.click(optionA);
        expect(await page.waitForSelector(`${control}[data-has-error="false"]`)).toBeTruthy();

        await page.click(input);
        await page.click(optionEmpty);
        expect(await page.waitForSelector(`${control}[data-has-error="true"]`)).toBeTruthy();
    });

    // test for unique
    test('Select: unique', async ({ page }) => {
        await page.goto(`${BASE_URL}/selects`);

        const control = `#${SELECT_UNIQUE}`;
        const input = `#${SELECT_UNIQUE_INPUT}`;
        const optionA = `#${SELECT_UNIQUE_INPUT_OPTION_A}`;
        const optionB = `#${SELECT_UNIQUE_INPUT_OPTION_B}`;

        await page.click(input);
        await page.click(optionA);
        expect(await page.waitForSelector(`${control}[data-has-error="false"]`)).toBeTruthy();

        await page.click(input);
        await page.click(optionB);
        expect(await page.waitForSelector(`${control}[data-has-error="true"]`)).toBeTruthy();
    });

    // test for regex
    test('Select: regex', async ({ page }) => {
        await page.goto(`${BASE_URL}/selects`);

        const control = `#${SELECT_REGEX}`;
        const input = `#${SELECT_REGEX_INPUT}`;
        const optionA = `#${SELECT_REGEX_INPUT_OPTION_A}`;
        const optionB = `#${SELECT_REGEX_INPUT_OPTION_B}`;

        await page.click(input);
        await page.click(optionA);
        expect(await page.waitForSelector(`${control}[data-has-error="false"]`)).toBeTruthy();

        await page.click(input);
        await page.click(optionB);
        expect(await page.waitForSelector(`${control}[data-has-error="true"]`)).toBeTruthy();
    });

    // test for custom
    test('Select: custom', async ({ page }) => {
        await page.goto(`${BASE_URL}/selects`);

        const control = `#${SELECT_CUSTOM}`;
        const input = `#${SELECT_CUSTOM_INPUT}`;
        const optionA = `#${SELECT_CUSTOM_INPUT_OPTION_A}`;
        const optionB = `#${SELECT_CUSTOM_INPUT_OPTION_B}`;

        await page.click(input);
        await page.click(optionA);
        expect(await page.waitForSelector(`${control}[data-has-error="false"]`)).toBeTruthy();

        await page.click(input);
        await page.click(optionB);
        expect(await page.waitForSelector(`${control}[data-has-error="true"]`)).toBeTruthy();
    });
});
