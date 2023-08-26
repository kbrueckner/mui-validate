import locator, { ELEMENT_TYPE } from 'test-locator';

export const SETTINGS_INITIAL_SILENT = locator(['v5', 'textfield', 'required', 'initial-silent']);

export const SETTINGS_INITIAL_NOISY = locator(['v5', 'textfield', 'required', 'initial-noisy']);

export const SETTINGS_INITIAL_NOISY_GROUP = locator(['v5', 'textfield', 'required', 'initial-noisy', 'by-group']);

export const SETTINGS_NOISY = locator(['v5', 'textfield', 'required', 'noisy']);
export const SETTINGS_NOISY_INPUT = locator(['v5', 'textfield', 'required', 'noisy'], ELEMENT_TYPE.INPUT);

export const SETTINGS_SILENT = locator(['v5', 'textfield', 'required', 'silent']);
export const SETTINGS_SILENT_INPUT = locator(['v5', 'textfield', 'required', 'silent'], ELEMENT_TYPE.INPUT);

export const SETTINGS_SILENT_GROUP = locator(['v5', 'textfield', 'required', 'silent', 'by-group']);
export const SETTINGS_SILENT_GROUP_INPUT = locator(['v5', 'textfield', 'required', 'silent', 'by-group'], ELEMENT_TYPE.INPUT);
