import { test, expect } from '@playwright/test';
import { BASE_URL } from '../constants';
import {
    AUTOCOMPLETE_CUSTOM, AUTOCOMPLETE_CUSTOM_INITIAL, AUTOCOMPLETE_CUSTOM_INPUT, AUTOCOMPLETE_CUSTOM_INPUT_OPTION_A,
    AUTOCOMPLETE_CUSTOM_INPUT_OPTION_B, AUTOCOMPLETE_REGEX, AUTOCOMPLETE_REGEX_INPUT, AUTOCOMPLETE_REGEX_INPUT_OPTION_A,
    AUTOCOMPLETE_REGEX_INPUT_OPTION_B, AUTOCOMPLETE_REQUIRED, AUTOCOMPLETE_REQUIRED_INPUT, AUTOCOMPLETE_REQUIRED_INPUT_OPTION_A,
    AUTOCOMPLETE_REQUIRED_INPUT_OPTION_EMPTY, AUTOCOMPLETE_UNIQUE, AUTOCOMPLETE_UNIQUE_INPUT, AUTOCOMPLETE_UNIQUE_INPUT_OPTION_A,
    AUTOCOMPLETE_UNIQUE_INPUT_OPTION_B,
} from '../../playground/src/v5/locators';

test.describe('Material-UI V5 tests', () => {
    // test for required
    test('Autocomplete: required', async ({ page }) => {
        await page.goto(`${BASE_URL}/autocompletes`);

        const control = `#${AUTOCOMPLETE_REQUIRED}`;
        const input = `#${AUTOCOMPLETE_REQUIRED_INPUT}`;
        const optionA = `#${AUTOCOMPLETE_REQUIRED_INPUT_OPTION_A}`;
        const optionEmpty = `#${AUTOCOMPLETE_REQUIRED_INPUT_OPTION_EMPTY}`;

        await page.click(input);
        await page.click(optionA);
        expect(await page.waitForSelector(`${control}[data-has-error="false"]`)).toBeTruthy();

        await page.click(input);
        await page.click(optionEmpty);
        expect(await page.waitForSelector(`${control}[data-has-error="true"]`)).toBeTruthy();
    });

    // test for unique
    test('Autocomplete: unique', async ({ page }) => {
        await page.goto(`${BASE_URL}/autocompletes`);

        const control = `#${AUTOCOMPLETE_UNIQUE}`;
        const input = `#${AUTOCOMPLETE_UNIQUE_INPUT}`;
        const optionA = `#${AUTOCOMPLETE_UNIQUE_INPUT_OPTION_A}`;
        const optionB = `#${AUTOCOMPLETE_UNIQUE_INPUT_OPTION_B}`;

        await page.click(input);
        await page.click(optionA);
        expect(await page.waitForSelector(`${control}[data-has-error="false"]`)).toBeTruthy();

        await page.click(input);
        await page.click(optionB);
        expect(await page.waitForSelector(`${control}[data-has-error="true"]`)).toBeTruthy();
    });

    // test for regex
    test('Autocomplete: regex', async ({ page }) => {
        await page.goto(`${BASE_URL}/autocompletes`);

        const control = `#${AUTOCOMPLETE_REGEX}`;
        const input = `#${AUTOCOMPLETE_REGEX_INPUT}`;
        const optionA = `#${AUTOCOMPLETE_REGEX_INPUT_OPTION_A}`;
        const optionB = `#${AUTOCOMPLETE_REGEX_INPUT_OPTION_B}`;

        await page.click(input);
        await page.click(optionA);
        expect(await page.waitForSelector(`${control}[data-has-error="false"]`)).toBeTruthy();

        await page.click(input);
        await page.click(optionB);
        expect(await page.waitForSelector(`${control}[data-has-error="true"]`)).toBeTruthy();
    });

    // test for custom
    test('Autocomplete: custom', async ({ page }) => {
        await page.goto(`${BASE_URL}/autocompletes`);

        const control = `#${AUTOCOMPLETE_CUSTOM}`;
        const input = `#${AUTOCOMPLETE_CUSTOM_INPUT}`;
        const optionA = `#${AUTOCOMPLETE_CUSTOM_INPUT_OPTION_A}`;
        const optionEmpty = `#${AUTOCOMPLETE_CUSTOM_INPUT_OPTION_B}`;

        await page.click(input);
        await page.click(optionA);
        expect(await page.waitForSelector(`${control}[data-has-error="false"]`)).toBeTruthy();

        await page.click(input);
        await page.click(optionEmpty);
        expect(await page.waitForSelector(`${control}[data-has-error="true"]`)).toBeTruthy();
    });

    // test for initial validation
    test('Autocomplete: custom initial valid', async ({ page }) => {
        await page.goto(`${BASE_URL}/autocompletes`);

        const control = `#${AUTOCOMPLETE_CUSTOM_INITIAL}`;

        expect(await page.waitForSelector(`${control}[data-has-error="false"]`)).toBeTruthy();
    });
});
