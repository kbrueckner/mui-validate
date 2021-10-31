import locator from 'test-locator';

export const SETTINGS_INITIAL_SILENT = locator(['textfield', 'required', 'initial-silent']);

export const SETTINGS_INITIAL_NOISY = locator(['textfield', 'required', 'initial-noisy']);

export const SETTINGS_INITIAL_NOISY_GROUP = locator(['textfield', 'required', 'initial-noisy', 'by-group']);

export const SETTINGS_NOISY = locator(['textfield', 'required', 'noisy']);
export const SETTINGS_NOISY_INPUT = locator(['textfield', 'required', 'noisy'], 'input');

export const SETTINGS_SILENT = locator(['textfield', 'required', 'silent']);
export const SETTINGS_SILENT_INPUT = locator(['textfield', 'required', 'silent'], 'input');

export const SETTINGS_SILENT_GROUP = locator(['textfield', 'required', 'silent', 'by-group']);
export const SETTINGS_SILENT_GROUP_INPUT = locator(['textfield', 'required', 'silent', 'by-group'], 'input');
