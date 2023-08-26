import { test, expect } from '@playwright/test';
import {
    AUTOCOMPLETE_CUSTOM, AUTOCOMPLETE_CUSTOM_INITIAL, AUTOCOMPLETE_CUSTOM_INPUT,
    AUTOCOMPLETE_CUSTOM_INPUT_OPTION_A, AUTOCOMPLETE_CUSTOM_INPUT_OPTION_B, AUTOCOMPLETE_REGEX,
    AUTOCOMPLETE_REGEX_INPUT, AUTOCOMPLETE_REGEX_INPUT_OPTION_A, AUTOCOMPLETE_REGEX_INPUT_OPTION_B,
    AUTOCOMPLETE_REQUIRED, AUTOCOMPLETE_REQUIRED_INPUT, AUTOCOMPLETE_REQUIRED_INPUT_OPTION_A,
    AUTOCOMPLETE_REQUIRED_INPUT_OPTION_EMPTY, AUTOCOMPLETE_UNIQUE, AUTOCOMPLETE_UNIQUE_INPUT,
    AUTOCOMPLETE_UNIQUE_INPUT_OPTION_A, AUTOCOMPLETE_UNIQUE_INPUT_OPTION_B, DISABLER_BUTTON_AWAYS_OFF,
    DISABLER_BUTTON_DYNAMIC, DISABLER_INPUT, PICKER_CUSTOM, PICKER_CUSTOM_INPUT, PICKER_REGEX,
    PICKER_REGEX_INPUT, PICKER_REQUIRED, PICKER_REQUIRED_INPUT, PICKER_UNIQUE, PICKER_UNIQUE_INPUT,
    SELECT_CUSTOM, SELECT_CUSTOM_INPUT, SELECT_CUSTOM_INPUT_OPTION_A, SELECT_CUSTOM_INPUT_OPTION_B,
    SELECT_REGEX, SELECT_REGEX_INPUT, SELECT_REGEX_INPUT_OPTION_A, SELECT_REGEX_INPUT_OPTION_B,
    SELECT_REQUIRED, SELECT_REQUIRED_INPUT, SELECT_REQUIRED_INPUT_OPTION_A, SELECT_REQUIRED_INPUT_OPTION_EMPTY,
    SELECT_UNIQUE, SELECT_UNIQUE_INPUT, SELECT_UNIQUE_INPUT_OPTION_A, SELECT_UNIQUE_INPUT_OPTION_B,
    SETTINGS_INITIAL_NOISY, SETTINGS_INITIAL_NOISY_GROUP, SETTINGS_INITIAL_SILENT, SETTINGS_NOISY,
    SETTINGS_NOISY_INPUT, SETTINGS_SILENT, SETTINGS_SILENT_GROUP, SETTINGS_SILENT_GROUP_INPUT,
    SETTINGS_SILENT_INPUT, TEXTFIELD_CUSTOM, TEXTFIELD_CUSTOM_INPUT, TEXTFIELD_REGEX,
    TEXTFIELD_REGEX_INPUT, TEXTFIELD_REQUIRED, TEXTFIELD_REQUIRED_INPUT, TEXTFIELD_SELECT_CUSTOM,
    TEXTFIELD_SELECT_CUSTOM_INPUT, TEXTFIELD_SELECT_CUSTOM_INPUT_OPTION_A, TEXTFIELD_SELECT_CUSTOM_INPUT_OPTION_B,
    TEXTFIELD_SELECT_REGEX, TEXTFIELD_SELECT_REGEX_INPUT, TEXTFIELD_SELECT_REGEX_INPUT_OPTION_A,
    TEXTFIELD_SELECT_REGEX_INPUT_OPTION_B, TEXTFIELD_SELECT_REQUIRED, TEXTFIELD_SELECT_REQUIRED_INPUT,
    TEXTFIELD_SELECT_REQUIRED_INPUT_OPTION_A, TEXTFIELD_SELECT_REQUIRED_INPUT_OPTION_EMPTY,
    TEXTFIELD_SELECT_UNIQUE, TEXTFIELD_SELECT_UNIQUE_INPUT, TEXTFIELD_SELECT_UNIQUE_INPUT_OPTION_A,
    TEXTFIELD_SELECT_UNIQUE_INPUT_OPTION_B, TEXTFIELD_UNIQUE, TEXTFIELD_UNIQUE_INPUT,
    ERRORLIST1, ERRORLIST2, ERRORLIST_INPUT1, ERRORLIST_INPUT2,
    DISABLER_DISPLAY_ERRORLIST, DISABLER_DISPLAY_BUTTON, DISABLER_DISPLAY_CONTROL, DISABLER_DISPLAY_BUTTON_2,
    DISABLER_DISPLAY_2_ERRORLIST, DISABLER_DISPLAY_2_INPUT, DISABLER_DISPLAY_2_BUTTON, DISABLER_DISPLAY_2_CONTROL, DISABLER_DISPLAY_2_BUTTON_2,
    TEXTFIELD_LINKED_1, TEXTFIELD_LINKED_2, TEXTFIELD_LINKED_3_INPUT,
    TEXTFIELD_LINKED_EXAMPLE_1, TEXTFIELD_LINKED_EXAMPLE_2_INPUT,
    UNREG_UNREGISTER_BUTTON, UNREG_REGISTER_BUTTON, UNREG_CHECK_BUTTON,
} from '../playground/src/v5/locators';

test.describe(' Material-UI V5 tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:3000');
    });

    /**
     * Unregister Validate
     */

    test('Unregister validate', async ({ page }) => {
        const unregisterButton = `#${UNREG_UNREGISTER_BUTTON}`;
        const registerButton = `#${UNREG_REGISTER_BUTTON}`;
        const checkButton = `#${UNREG_CHECK_BUTTON}`;

        expect(await page.locator(checkButton)).toBeDisabled();
        await page.click(unregisterButton);
        expect(await page.locator(checkButton)).toBeEnabled();
        await page.click(registerButton);
        expect(await page.locator(checkButton)).toBeDisabled();
    });

    /**
     * Linked validations
     */

    test('Linked Validations - README example', async ({ page }) => {
        const control1 = `#${TEXTFIELD_LINKED_EXAMPLE_1}`;
        const input2 = `#${TEXTFIELD_LINKED_EXAMPLE_2_INPUT}`;

        expect(await page.waitForSelector(`${control1}[data-has-error="true"]`)).toBeTruthy();
        await page.fill(input2, 'test');
        expect(await page.waitForSelector(`${control1}[data-has-error="false"]`)).toBeTruthy();
    });

    test('Linked Validations - multiple links', async ({ page }) => {
        const control1 = `#${TEXTFIELD_LINKED_1}`;
        const control2 = `#${TEXTFIELD_LINKED_2}`;
        const input3 = `#${TEXTFIELD_LINKED_3_INPUT}`;

        expect(await page.waitForSelector(`${control1}[data-has-error="true"]`)).toBeTruthy();
        expect(await page.waitForSelector(`${control2}[data-has-error="true"]`)).toBeTruthy();
        await page.fill(input3, 'test');
        expect(await page.waitForSelector(`${control1}[data-has-error="false"]`)).toBeTruthy();
        expect(await page.waitForSelector(`${control2}[data-has-error="false"]`)).toBeTruthy();
    });

    /**
     * AutoDisabler tests
     */

    test('AutoDisablers', async ({ page }) => {
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

    /**
     * ErrorList tests
     */

    test('ErrorList', async ({ page }) => {
        // both lists display with title
        expect(await page.waitForSelector(`#${ERRORLIST1} .error-list__title`)).toBeTruthy();
        expect(await page.waitForSelector(`#${ERRORLIST2} .error-list__title`)).toBeTruthy();
        // each shows 2 error messages
        expect(await page.locator(`#${ERRORLIST1} .error-list__error-message`).count()).toBe(3);
        expect(await page.locator(`#${ERRORLIST2} .error-list__error-message`).count()).toBe(3);

        await page.fill(`#${ERRORLIST_INPUT1}`, 'test');

        // both lists display with title
        expect(await page.waitForSelector(`#${ERRORLIST1} .error-list__title`)).toBeTruthy();
        expect(await page.waitForSelector(`#${ERRORLIST2} .error-list__title`)).toBeTruthy();
        // each shows 1 error message
        expect(await page.locator(`#${ERRORLIST1} .error-list__error-message`).count()).toBe(1);
        expect(await page.locator(`#${ERRORLIST2} .error-list__error-message`).count()).toBe(1);

        await page.fill(`#${ERRORLIST_INPUT2}`, 'test');

        // only list 1 should be visible
        expect(await page.waitForSelector(`#${ERRORLIST1} .error-list__title`)).toBeTruthy();
        expect(await page.locator(`#${ERRORLIST2} .error-list__title`).count()).toBe(0);
        // list 1 should display message for no issues, list 2 is invisible
        expect(await page.locator(`#${ERRORLIST1} .error-list__error-message`).count()).toBe(0);
        expect(await page.locator(`#${ERRORLIST1} .error-list__no-errors-message`).count()).toBe(1);
        expect(await page.locator(`#${ERRORLIST2} .error-list__error-message`).count()).toBe(0);
    });

    /**
     * validation mode tests
     */

    // test for initialValidation silent
    test('Initial validation mode: silent', async ({ page }) => {
        const control = `#${SETTINGS_INITIAL_SILENT}`;

        expect(await page.waitForSelector(`${control}[data-has-error="true"]`)).toBeTruthy();
        expect(await page.waitForSelector(`${control}[data-has-message="false"]`)).toBeTruthy();
    });

    // test for initialValidation noisy - Validate setting
    test('Initial validation mode: noisy by Validation setting', async ({ page }) => {
        const control = `#${SETTINGS_INITIAL_NOISY}`;

        expect(await page.waitForSelector(`${control}[data-has-error="true"]`)).toBeTruthy();
        expect(await page.waitForSelector(`${control}[data-has-message="true"]`)).toBeTruthy();
        // check for message rendered
        expect(await page.waitForSelector(`${control}[data-has-message="true"] .Mui-error`)).toBeTruthy();
    });

    // test for initialValidation noisy - ValidationGroup setting
    test('Initial validation mode: noisy by ValidationGroup setting', async ({ page }) => {
        const control = `#${SETTINGS_INITIAL_NOISY_GROUP}`;

        expect(await page.waitForSelector(`${control}[data-has-error="true"]`)).toBeTruthy();
        expect(await page.waitForSelector(`${control}[data-has-message="true"]`)).toBeTruthy();
        // check for message rendered
        expect(await page.waitForSelector(`${control}[data-has-message="true"] .Mui-error`)).toBeTruthy();
    });

    // test for validation noisy
    test('Validation mode: noisy', async ({ page }) => {
        const control = `#${SETTINGS_NOISY}`;
        const input = `#${SETTINGS_NOISY_INPUT}`;

        await page.fill(input, 'test');
        await page.fill(input, '');
        expect(await page.waitForSelector(`${control}[data-has-error="true"]`)).toBeTruthy();
        expect(await page.waitForSelector(`${control}[data-has-message="true"]`)).toBeTruthy();
    });

    // test for validation silent - Validate setting
    test('Validation mode: silent by Validation setting', async ({ page }) => {
        const control = `#${SETTINGS_SILENT}`;
        const input = `#${SETTINGS_SILENT_INPUT}`;

        await page.fill(input, 'test');
        await page.fill(input, '');
        expect(await page.waitForSelector(`${control}[data-has-error="true"]`)).toBeTruthy();
        expect(await page.waitForSelector(`${control}[data-has-message="false"]`)).toBeTruthy();
    });

    // test for validation silent - ValidationGroup setting
    test('Validation mode: silent by ValidationGroup setting', async ({ page }) => {
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
    test('TextField: required', async ({ page }) => {
        const control = `#${TEXTFIELD_REQUIRED}`;
        const input = `#${TEXTFIELD_REQUIRED_INPUT}`;

        await page.fill(input, 'test');
        expect(await page.waitForSelector(`${control}[data-has-error="false"]`)).toBeTruthy();

        await page.fill(input, '');
        expect(await page.waitForSelector(`${control}[data-has-error="true"]`)).toBeTruthy();
    });

    // test for unique
    test('TextField: unique', async ({ page }) => {
        const control = `#${TEXTFIELD_UNIQUE}`;
        const input = `#${TEXTFIELD_UNIQUE_INPUT}`;

        await page.fill(input, 'a');
        expect(await page.waitForSelector(`${control}[data-has-error="true"]`)).toBeTruthy();

        await page.fill(input, 'b');
        expect(await page.waitForSelector(`${control}[data-has-error="false"]`)).toBeTruthy();
    });

    // test for regex
    test('TextField: regex', async ({ page }) => {
        const control = `#${TEXTFIELD_REGEX}`;
        const input = `#${TEXTFIELD_REGEX_INPUT}`;

        await page.fill(input, 'a');
        expect(await page.waitForSelector(`${control}[data-has-error="true"]`)).toBeTruthy();

        await page.fill(input, '1');
        expect(await page.waitForSelector(`${control}[data-has-error="false"]`)).toBeTruthy();
    });

    // test for custom
    test('TextField: custom', async ({ page }) => {
        const control = `#${TEXTFIELD_CUSTOM}`;
        const input = `#${TEXTFIELD_CUSTOM_INPUT}`;

        await page.fill(input, 'a');
        expect(await page.waitForSelector(`${control}[data-has-error="true"]`)).toBeTruthy();

        await page.fill(input, 'b');
        expect(await page.waitForSelector(`${control}[data-has-error="false"]`)).toBeTruthy();
    });

    /**
     * TextField select validation methods
     */

    // test for required
    test('TextField (select): required', async ({ page }) => {
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

    /**
     * Select validation methods
     */

    // test for required
    test('Select: required', async ({ page }) => {
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

    /**
     * Autocomplete validation methods
     */

    // test for required
    test('Autocomplete: required', async ({ page }) => {
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
        const control = `#${AUTOCOMPLETE_CUSTOM_INITIAL}`;

        expect(await page.waitForSelector(`${control}[data-has-error="false"]`)).toBeTruthy();
    });

    /**
     * Pickers validation methods
     */

    // test for required
    test('Picker: required', async ({ page }) => {
        const control = `#${PICKER_REQUIRED}`;
        const input = `#${PICKER_REQUIRED_INPUT}`;

        await page.fill(input, '11.11.2020');
        expect(await page.waitForSelector(`${control}[data-has-error="false"]`)).toBeTruthy();

        await page.fill(input, '11.11');
        expect(await page.waitForSelector(`${control}[data-has-error="true"]`)).toBeTruthy();
    });

    // test for unique
    test('Picker: unique', async ({ page }) => {
        const control = `#${PICKER_UNIQUE}`;
        const input = `#${PICKER_UNIQUE_INPUT}`;

        await page.fill(input, '11.11.2020');
        expect(await page.waitForSelector(`${control}[data-has-error="false"]`)).toBeTruthy();

        await page.fill(input, '11.11.2021');
        expect(await page.waitForSelector(`${control}[data-has-error="true"]`)).toBeTruthy();
    });

    // test for regex
    test('Picker: regex', async ({ page }) => {
        const control = `#${PICKER_REGEX}`;
        const input = `#${PICKER_REGEX_INPUT}`;

        await page.fill(input, '11.11.2020');
        expect(await page.waitForSelector(`${control}[data-has-error="false"]`)).toBeTruthy();

        await page.fill(input, '11.11.2021');
        expect(await page.waitForSelector(`${control}[data-has-error="true"]`)).toBeTruthy();
    });

    // test for custom
    test('Picker: custom', async ({ page }) => {
        const control = `#${PICKER_CUSTOM}`;
        const input = `#${PICKER_CUSTOM_INPUT}`;

        await page.fill(input, '11.11.2020');
        expect(await page.waitForSelector(`${control}[data-has-error="false"]`)).toBeTruthy();

        await page.fill(input, '11.11.2021');
        expect(await page.waitForSelector(`${control}[data-has-error="true"]`)).toBeTruthy();
    });
});
