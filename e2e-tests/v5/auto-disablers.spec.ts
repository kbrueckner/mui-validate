import { test, expect } from '@playwright/test';
import { BASE_URL } from '../constants';
import {
    DISABLER_BUTTON_AWAYS_OFF, DISABLER_BUTTON_DYNAMIC, DISABLER_DISPLAY_2_BUTTON, DISABLER_DISPLAY_2_BUTTON_2,
    DISABLER_DISPLAY_2_CONTROL, DISABLER_DISPLAY_2_ERRORLIST, DISABLER_DISPLAY_2_INPUT, DISABLER_DISPLAY_BUTTON,
    DISABLER_DISPLAY_BUTTON_2, DISABLER_DISPLAY_CONTROL, DISABLER_DISPLAY_ERRORLIST, DISABLER_INPUT,
} from '../../playground/src/v5/locators';

test.describe('Material-UI V5 tests', () => {
    test('AutoDisablers', async ({ page }) => {
        await page.goto(`${BASE_URL}/autodisablers`);

        const input = `#${DISABLER_INPUT}`;
        // button is disabled based on group validation state
        const button = `#${DISABLER_BUTTON_DYNAMIC}`;
        // button is always disabled by button component prop
        const buttonAlwaysOff = `#${DISABLER_BUTTON_AWAYS_OFF}`;

        expect(await page.isDisabled(button)).toBe(true);
        expect(await page.isDisabled(buttonAlwaysOff)).toBe(true);
        await page.fill(input, 'test');
        expect(await page.isDisabled(button)).toBe(false);
        expect(await page.isDisabled(buttonAlwaysOff)).toBe(true);
    });

    test('AutoDisablers (firstDisplayErrors)', async ({ page }) => {
        await page.goto(`${BASE_URL}/autodisablers`);

        const control = `#${DISABLER_DISPLAY_CONTROL}`;
        const button = `#${DISABLER_DISPLAY_BUTTON}`;
        const button2 = `#${DISABLER_DISPLAY_BUTTON_2}`;
        const list = `#${DISABLER_DISPLAY_ERRORLIST}`;

        expect(await page.locator(`${list} .error-list__error-message`).count()).toBe(0);
        expect(await page.waitForSelector(`${control}[data-has-message="false"]`)).toBeTruthy();
        expect(await page.isDisabled(button)).toBe(false);
        expect(await page.isDisabled(button2)).toBe(false);
        await page.click(button);
        expect(await page.locator(`${list} .error-list__error-message`).count()).toBe(1);
        expect(await page.waitForSelector(`${control}[data-has-message="true"]`)).toBeTruthy();
        expect(await page.isDisabled(button)).toBe(true);
        expect(await page.isDisabled(button2)).toBe(true);
    });

    test('AutoDisablers (firstDisplayErrors) - disabled when error message already shown', async ({ page }) => {
        await page.goto(`${BASE_URL}/autodisablers`);

        const control = `#${DISABLER_DISPLAY_2_CONTROL}`;
        const input = `#${DISABLER_DISPLAY_2_INPUT}`;
        const button = `#${DISABLER_DISPLAY_2_BUTTON}`;
        const button2 = `#${DISABLER_DISPLAY_2_BUTTON_2}`;
        const list = `#${DISABLER_DISPLAY_2_ERRORLIST}`;

        expect(await page.locator(`${list} .error-list__error-message`).count()).toBe(0);
        expect(await page.waitForSelector(`${control}[data-has-message="false"]`)).toBeTruthy();
        expect(await page.isDisabled(button)).toBe(false);
        expect(await page.isDisabled(button2)).toBe(false);
        await page.fill(input, 'test');
        await page.fill(input, '');
        expect(await page.isDisabled(button)).toBe(true);
        expect(await page.isDisabled(button2)).toBe(true);
    });
});
