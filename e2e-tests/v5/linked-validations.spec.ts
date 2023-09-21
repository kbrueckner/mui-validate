import { test, expect } from '@playwright/test';
import { BASE_URL } from '../constants';
import {
    TEXTFIELD_LINKED_1, TEXTFIELD_LINKED_2, TEXTFIELD_LINKED_3_INPUT, TEXTFIELD_LINKED_EXAMPLE_1, TEXTFIELD_LINKED_EXAMPLE_2_INPUT,
} from '../../playground/src/v5/locators';

test.describe('Material-UI V5 tests', () => {
    test('Linked Validations - README example', async ({ page }) => {
        await page.goto(`${BASE_URL}/linked-validations`);

        const control1 = `#${TEXTFIELD_LINKED_EXAMPLE_1}`;
        const input2 = `#${TEXTFIELD_LINKED_EXAMPLE_2_INPUT}`;

        expect(await page.waitForSelector(`${control1}[data-has-error="true"]`)).toBeTruthy();
        await page.fill(input2, 'test');
        expect(await page.waitForSelector(`${control1}[data-has-error="false"]`)).toBeTruthy();
    });

    test('Linked Validations - multiple links', async ({ page }) => {
        await page.goto(`${BASE_URL}/linked-validations`);

        const control1 = `#${TEXTFIELD_LINKED_1}`;
        const control2 = `#${TEXTFIELD_LINKED_2}`;
        const input3 = `#${TEXTFIELD_LINKED_3_INPUT}`;

        expect(await page.waitForSelector(`${control1}[data-has-error="true"]`)).toBeTruthy();
        expect(await page.waitForSelector(`${control2}[data-has-error="true"]`)).toBeTruthy();
        await page.fill(input3, 'test');
        expect(await page.waitForSelector(`${control1}[data-has-error="false"]`)).toBeTruthy();
        expect(await page.waitForSelector(`${control2}[data-has-error="false"]`)).toBeTruthy();
    });
});
