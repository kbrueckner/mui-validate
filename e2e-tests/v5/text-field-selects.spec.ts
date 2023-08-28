import { test, expect } from '@playwright/test';
import { BASE_URL } from '../constants';
import {
    TEXTFIELD_SELECT_CUSTOM, TEXTFIELD_SELECT_CUSTOM_INPUT, TEXTFIELD_SELECT_CUSTOM_INPUT_OPTION_A,
    TEXTFIELD_SELECT_CUSTOM_INPUT_OPTION_B, TEXTFIELD_SELECT_REGEX, TEXTFIELD_SELECT_REGEX_INPUT,
    TEXTFIELD_SELECT_REGEX_INPUT_OPTION_A, TEXTFIELD_SELECT_REGEX_INPUT_OPTION_B, TEXTFIELD_SELECT_REQUIRED,
    TEXTFIELD_SELECT_REQUIRED_INPUT, TEXTFIELD_SELECT_REQUIRED_INPUT_OPTION_A, TEXTFIELD_SELECT_REQUIRED_INPUT_OPTION_EMPTY,
    TEXTFIELD_SELECT_UNIQUE, TEXTFIELD_SELECT_UNIQUE_INPUT, TEXTFIELD_SELECT_UNIQUE_INPUT_OPTION_A, TEXTFIELD_SELECT_UNIQUE_INPUT_OPTION_B,
} from '../../playground/src/v5/locators';

test.describe('Material-UI V5 tests', () => {
// test for required
    test('TextField (select): required', async ({ page }) => {
        await page.goto(`${BASE_URL}/textfield-selects`);

        const control = `#${TEXTFIELD_SELECT_REQUIRED}`;
        const input = `#${TEXTFIELD_SELECT_REQUIRED_INPUT}`;
        const optionA = `#${TEXTFIELD_SELECT_REQUIRED_INPUT_OPTION_A}`;
        const optionEmpty = `#${TEXTFIELD_SELECT_REQUIRED_INPUT_OPTION_EMPTY}`;

        await page.click(input);
        await page.click(optionA);
        expect(await page.waitForSelector(`${control}[data-has-error="false"]`)).toBeTruthy();

        await page.click(input);
        await page.click(optionEmpty);
        expect(await page.waitForSelector(`${control}[data-has-error="true"]`)).toBeTruthy();
    });

    // test for unique
    test('TextField (select): unique', async ({ page }) => {
        await page.goto(`${BASE_URL}/textfield-selects`);

        const control = `#${TEXTFIELD_SELECT_UNIQUE}`;
        const input = `#${TEXTFIELD_SELECT_UNIQUE_INPUT}`;
        const optionA = `#${TEXTFIELD_SELECT_UNIQUE_INPUT_OPTION_A}`;
        const optionB = `#${TEXTFIELD_SELECT_UNIQUE_INPUT_OPTION_B}`;

        await page.click(input);
        await page.click(optionA);
        expect(await page.waitForSelector(`${control}[data-has-error="false"]`)).toBeTruthy();

        await page.click(input);
        await page.click(optionB);
        expect(await page.waitForSelector(`${control}[data-has-error="true"]`)).toBeTruthy();
    });

    // test for regex
    test('TextField (select): regex', async ({ page }) => {
        await page.goto(`${BASE_URL}/textfield-selects`);

        const control = `#${TEXTFIELD_SELECT_REGEX}`;
        const input = `#${TEXTFIELD_SELECT_REGEX_INPUT}`;
        const optionA = `#${TEXTFIELD_SELECT_REGEX_INPUT_OPTION_A}`;
        const optionB = `#${TEXTFIELD_SELECT_REGEX_INPUT_OPTION_B}`;

        await page.click(input);
        await page.click(optionA);
        expect(await page.waitForSelector(`${control}[data-has-error="false"]`)).toBeTruthy();

        await page.click(input);
        await page.click(optionB);
        expect(await page.waitForSelector(`${control}[data-has-error="true"]`)).toBeTruthy();
    });

    // test for custom
    test('TextField (select): custom', async ({ page }) => {
        await page.goto(`${BASE_URL}/textfield-selects`);

        const control = `#${TEXTFIELD_SELECT_CUSTOM}`;
        const input = `#${TEXTFIELD_SELECT_CUSTOM_INPUT}`;
        const optionA = `#${TEXTFIELD_SELECT_CUSTOM_INPUT_OPTION_A}`;
        const optionB = `#${TEXTFIELD_SELECT_CUSTOM_INPUT_OPTION_B}`;

        await page.click(input);
        await page.click(optionA);
        expect(await page.waitForSelector(`${control}[data-has-error="false"]`)).toBeTruthy();

        await page.click(input);
        await page.click(optionB);
        expect(await page.waitForSelector(`${control}[data-has-error="true"]`)).toBeTruthy();
    });
});
