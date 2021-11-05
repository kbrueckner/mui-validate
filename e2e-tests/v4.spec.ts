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
} from '../playground/src/locators';

describe(' Material-UI v4 tests', () => {
    beforeAll(async () => {
        await page.goto('http://localhost:3000');
    });

    /**
     * AutoDisabler tests
     */

    it('AutoDisablers', async () => {
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
    it('TextField: required', async () => {
        const control = `#${TEXTFIELD_REQUIRED}`;
        const input = `#${TEXTFIELD_REQUIRED_INPUT}`;

        await page.fill(input, 'test');
        expect(await page.waitForSelector(`${control}[data-has-error="false"]`)).toBeTruthy();

        await page.fill(input, '');
        expect(await page.waitForSelector(`${control}[data-has-error="true"]`)).toBeTruthy();
    });

    // test for unique
    it('TextField: unique', async () => {
        const control = `#${TEXTFIELD_UNIQUE}`;
        const input = `#${TEXTFIELD_UNIQUE_INPUT}`;

        await page.fill(input, 'a');
        expect(await page.waitForSelector(`${control}[data-has-error="true"]`)).toBeTruthy();

        await page.fill(input, 'b');
        expect(await page.waitForSelector(`${control}[data-has-error="false"]`)).toBeTruthy();
    });

    // test for regex
    it('TextField: regex', async () => {
        const control = `#${TEXTFIELD_REGEX}`;
        const input = `#${TEXTFIELD_REGEX_INPUT}`;

        await page.fill(input, 'a');
        expect(await page.waitForSelector(`${control}[data-has-error="true"]`)).toBeTruthy();

        await page.fill(input, '1');
        expect(await page.waitForSelector(`${control}[data-has-error="false"]`)).toBeTruthy();
    });

    // test for custom
    it('TextField: custom', async () => {
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
    it('TextField (select): required', async () => {
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
    it('TextField (select): unique', async () => {
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
    it('TextField (select): regex', async () => {
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
    it('TextField (select): custom', async () => {
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
    it('Select: required', async () => {
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
    it('Select: unique', async () => {
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
    it('Select: regex', async () => {
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
    it('Select: custom', async () => {
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
    it('Autocomplete: required', async () => {
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
    it('Autocomplete: unique', async () => {
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
    it('Autocomplete: regex', async () => {
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
    it('Autocomplete: custom', async () => {
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
    it('Autocomplete: custom initial valid', async () => {
        const control = `#${AUTOCOMPLETE_CUSTOM_INITIAL}`;

        expect(await page.waitForSelector(`${control}[data-has-error="false"]`)).toBeTruthy();
    });

    /**
     * Pickers validation methods
     */

    // test for required
    it('Picker: required', async () => {
        const control = `#${PICKER_REQUIRED}`;
        const input = `#${PICKER_REQUIRED_INPUT}`;

        await page.fill(input, '11.11.2020');
        expect(await page.waitForSelector(`${control}[data-has-error="false"]`)).toBeTruthy();

        await page.fill(input, '11.11');
        expect(await page.waitForSelector(`${control}[data-has-error="true"]`)).toBeTruthy();
    });

    // test for unique
    it('Picker: unique', async () => {
        const control = `#${PICKER_UNIQUE}`;
        const input = `#${PICKER_UNIQUE_INPUT}`;

        await page.fill(input, '11.11.2020');
        expect(await page.waitForSelector(`${control}[data-has-error="false"]`)).toBeTruthy();

        await page.fill(input, '11.11.2021');
        expect(await page.waitForSelector(`${control}[data-has-error="true"]`)).toBeTruthy();
    });

    // test for regex
    it('Picker: regex', async () => {
        const control = `#${PICKER_REGEX}`;
        const input = `#${PICKER_REGEX_INPUT}`;

        await page.fill(input, '11.11.2020');
        expect(await page.waitForSelector(`${control}[data-has-error="false"]`)).toBeTruthy();

        await page.fill(input, '11.11.2021');
        expect(await page.waitForSelector(`${control}[data-has-error="true"]`)).toBeTruthy();
    });

    // test for custom
    it('Picker: custom', async () => {
        const control = `#${PICKER_CUSTOM}`;
        const input = `#${PICKER_CUSTOM_INPUT}`;

        await page.fill(input, '11.11.2020');
        expect(await page.waitForSelector(`${control}[data-has-error="false"]`)).toBeTruthy();

        await page.fill(input, '11.11.2021');
        expect(await page.waitForSelector(`${control}[data-has-error="true"]`)).toBeTruthy();
    });
});
