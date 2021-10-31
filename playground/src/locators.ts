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

export const DISABLER_INPUT = locator(['textfield', 'required', 'disabler'], 'input');
export const DISABLER_BUTTON_DYNAMIC = locator(['textfield', 'required', 'disabler'], 'button');
export const DISABLER_BUTTON_AWAYS_OFF = locator(['textfield', 'required', 'disabler', 'always-off'], 'button');

export const TEXTFIELD_REQUIRED = locator(['textfield', 'required']);
export const TEXTFIELD_REQUIRED_INPUT = locator(['textfield', 'required'], 'input');

export const TEXTFIELD_UNIQUE = locator(['textfield', 'unique']);
export const TEXTFIELD_UNIQUE_INPUT = locator(['textfield', 'unique'], 'input');

export const TEXTFIELD_REGEX = locator(['textfield', 'regex']);
export const TEXTFIELD_REGEX_INPUT = locator(['textfield', 'regex'], 'input');

export const TEXTFIELD_CUSTOM = locator(['textfield', 'custom']);
export const TEXTFIELD_CUSTOM_INPUT = locator(['textfield', 'custom'], 'input');
