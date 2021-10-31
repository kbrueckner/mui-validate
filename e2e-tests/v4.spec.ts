import locator from 'test-locator';
import {
    SETTINGS_INITIAL_NOISY, SETTINGS_INITIAL_NOISY_GROUP, SETTINGS_INITIAL_SILENT, SETTINGS_NOISY,
    SETTINGS_NOISY_INPUT, SETTINGS_SILENT, SETTINGS_SILENT_GROUP, SETTINGS_SILENT_GROUP_INPUT,
    SETTINGS_SILENT_INPUT,
} from '../playground/src/locators';

describe(' Material-UI v4 tests', () => {
    beforeAll(async () => {
        await page.goto('http://localhost:3000');
    });

    /**
     * AutoDisabler tests
     */

    it('AutoDisablers', async () => {
        const input = `#${locator(['textfield', 'required', 'disabler'], 'input')}`;
        // button is disabled based on group validation state
        const button = `#${locator(['textfield', 'required', 'disabler'], 'button')}`;
        // button is always disabled by button component prop
        const buttonAlwaysOff = `#${locator(['textfield', 'required', 'disabler', 'always-off'], 'button')}`;

        expect(await page.isDisabled(button)).toBe(true);
        expect(await page.isDisabled(buttonAlwaysOff)).toBe(true);
        await page.fill(input, 'test');
        expect(await page.isDisabled(button)).toBe(false);
        expect(await page.isDisabled(buttonAlwaysOff)).toBe(true);
    });

    /**
     * validation mode tests
     */

    // test for initialValidation silent
    it('Initial validation mode: silent', async () => {
        const control = `#${SETTINGS_INITIAL_SILENT}`;

        expect(await page.waitForSelector(`${control}[data-has-error="true"]`)).toBeTruthy();
        expect(await page.waitForSelector(`${control}[data-has-message="false"]`)).toBeTruthy();
    });

    // test for initialValidation noisy - Validate setting
    it('Initial validation mode: noisy by Validation setting', async () => {
        const control = `#${SETTINGS_INITIAL_NOISY}`;

        expect(await page.waitForSelector(`${control}[data-has-error="true"]`)).toBeTruthy();
        expect(await page.waitForSelector(`${control}[data-has-message="true"]`)).toBeTruthy();
        // check for message rendered
        expect(await page.waitForSelector(`${control}[data-has-message="true"] .Mui-error`)).toBeTruthy();
    });

    // test for initialValidation noisy - ValidationGroup setting
    it('Initial validation mode: noisy by ValidationGroup setting', async () => {
        const control = `#${SETTINGS_INITIAL_NOISY_GROUP}`;

        expect(await page.waitForSelector(`${control}[data-has-error="true"]`)).toBeTruthy();
        expect(await page.waitForSelector(`${control}[data-has-message="true"]`)).toBeTruthy();
        // check for message rendered
        expect(await page.waitForSelector(`${control}[data-has-message="true"] .Mui-error`)).toBeTruthy();
    });

    // test for validation noisy
    it('Validation mode: noisy', async () => {
        const control = `#${SETTINGS_NOISY}`;
        const input = `#${SETTINGS_NOISY_INPUT}`;

        await page.fill(input, 'test');
        await page.fill(input, '');
        expect(await page.waitForSelector(`${control}[data-has-error="true"]`)).toBeTruthy();
        expect(await page.waitForSelector(`${control}[data-has-message="true"]`)).toBeTruthy();
    });

    // test for validation silent - Validate setting
    it('Validation mode: silent by Validation setting', async () => {
        const control = `#${SETTINGS_SILENT}`;
        const input = `#${SETTINGS_SILENT_INPUT}`;

        await page.fill(input, 'test');
        await page.fill(input, '');
        expect(await page.waitForSelector(`${control}[data-has-error="true"]`)).toBeTruthy();
        expect(await page.waitForSelector(`${control}[data-has-message="false"]`)).toBeTruthy();
    });

    // test for validation silent - ValidationGroup setting
    it('Validation mode: silent by ValidationGroup setting', async () => {
        const control = `#${SETTINGS_SILENT_GROUP}`;
        const input = `#${SETTINGS_SILENT_GROUP_INPUT}`;

        await page.fill(input, 'test');
        await page.fill(input, '');
        expect(await page.waitForSelector(`${control}[data-has-error="true"]`)).toBeTruthy();
        expect(await page.waitForSelector(`${control}[data-has-message="false"]`)).toBeTruthy();
    });

    /**
     * TextField validation methods
     */

    // test for required

    // test for unique

    // test for regex

    // test for custom
});
