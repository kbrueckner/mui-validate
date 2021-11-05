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

export const TEXTFIELD_SELECT_REQUIRED = locator(['textfield', 'select', 'required']);
export const TEXTFIELD_SELECT_REQUIRED_INPUT = locator(['textfield', 'select', 'required'], 'input');
export const TEXTFIELD_SELECT_REQUIRED_INPUT_OPTION_EMPTY = locator(['textfield', 'select', 'required', 'empty'], 'input');
export const TEXTFIELD_SELECT_REQUIRED_INPUT_OPTION_A = locator(['textfield', 'select', 'required', 'a'], 'input');

export const TEXTFIELD_SELECT_UNIQUE = locator(['textfield', 'select', 'unique']);
export const TEXTFIELD_SELECT_UNIQUE_INPUT = locator(['textfield', 'select', 'unique'], 'input');
export const TEXTFIELD_SELECT_UNIQUE_INPUT_OPTION_A = locator(['textfield', 'select', 'unique', 'a'], 'input');
export const TEXTFIELD_SELECT_UNIQUE_INPUT_OPTION_B = locator(['textfield', 'select', 'unique', 'b'], 'input');

export const TEXTFIELD_SELECT_REGEX = locator(['textfield', 'select', 'regex']);
export const TEXTFIELD_SELECT_REGEX_INPUT = locator(['textfield', 'select', 'regex'], 'input');
export const TEXTFIELD_SELECT_REGEX_INPUT_OPTION_A = locator(['textfield', 'select', 'regex', 'a'], 'input');
export const TEXTFIELD_SELECT_REGEX_INPUT_OPTION_B = locator(['textfield', 'select', 'regex', 'b'], 'input');

export const TEXTFIELD_SELECT_CUSTOM = locator(['textfield', 'select', 'custom']);
export const TEXTFIELD_SELECT_CUSTOM_INPUT = locator(['textfield', 'select', 'custom'], 'input');
export const TEXTFIELD_SELECT_CUSTOM_INPUT_OPTION_A = locator(['textfield', 'select', 'custom', 'a'], 'input');
export const TEXTFIELD_SELECT_CUSTOM_INPUT_OPTION_B = locator(['textfield', 'select', 'custom', 'b'], 'input');

export const SELECT_REQUIRED = locator(['select', 'required']);
export const SELECT_REQUIRED_INPUT = locator(['select', 'required'], 'input');
export const SELECT_REQUIRED_INPUT_OPTION_EMPTY = locator(['select', 'required', 'empty'], 'input');
export const SELECT_REQUIRED_INPUT_OPTION_A = locator(['select', 'required', 'a'], 'input');

export const SELECT_UNIQUE = locator(['select', 'unique']);
export const SELECT_UNIQUE_INPUT = locator(['select', 'unique'], 'input');
export const SELECT_UNIQUE_INPUT_OPTION_A = locator(['select', 'unique', 'a'], 'input');
export const SELECT_UNIQUE_INPUT_OPTION_B = locator(['select', 'unique', 'b'], 'input');

export const SELECT_REGEX = locator(['select', 'regex']);
export const SELECT_REGEX_INPUT = locator(['select', 'regex'], 'input');
export const SELECT_REGEX_INPUT_OPTION_A = locator(['select', 'regex', 'a'], 'input');
export const SELECT_REGEX_INPUT_OPTION_B = locator(['select', 'regex', 'b'], 'input');

export const SELECT_CUSTOM = locator(['select', 'custom']);
export const SELECT_CUSTOM_INPUT = locator(['select', 'custom'], 'input');
export const SELECT_CUSTOM_INPUT_OPTION_A = locator(['select', 'custom', 'a'], 'input');
export const SELECT_CUSTOM_INPUT_OPTION_B = locator(['select', 'custom', 'b'], 'input');

export const AUTOCOMPLETE_REQUIRED = locator(['autocomplete', 'required']);
export const AUTOCOMPLETE_REQUIRED_INPUT = locator(['autocomplete', 'required'], 'input');
export const AUTOCOMPLETE_REQUIRED_INPUT_OPTION_EMPTY = `${locator(['autocomplete', 'required'], 'input')}-option-0`;
export const AUTOCOMPLETE_REQUIRED_INPUT_OPTION_A = `${locator(['autocomplete', 'required'], 'input')}-option-1`;

export const AUTOCOMPLETE_UNIQUE = locator(['autocomplete', 'unique']);
export const AUTOCOMPLETE_UNIQUE_INPUT = locator(['autocomplete', 'unique'], 'input');
export const AUTOCOMPLETE_UNIQUE_INPUT_OPTION_A = `${locator(['autocomplete', 'unique'], 'input')}-option-0`;
export const AUTOCOMPLETE_UNIQUE_INPUT_OPTION_B = `${locator(['autocomplete', 'unique'], 'input')}-option-1`;

export const AUTOCOMPLETE_REGEX = locator(['autocomplete', 'regex']);
export const AUTOCOMPLETE_REGEX_INPUT = locator(['autocomplete', 'regex'], 'input');
export const AUTOCOMPLETE_REGEX_INPUT_OPTION_A = `${locator(['autocomplete', 'regex'], 'input')}-option-0`;
export const AUTOCOMPLETE_REGEX_INPUT_OPTION_B = `${locator(['autocomplete', 'regex'], 'input')}-option-1`;

export const AUTOCOMPLETE_CUSTOM = locator(['autocomplete', 'custom']);
export const AUTOCOMPLETE_CUSTOM_INPUT = locator(['autocomplete', 'custom'], 'input');
export const AUTOCOMPLETE_CUSTOM_INPUT_OPTION_A = `${locator(['autocomplete', 'custom'], 'input')}-option-0`;
export const AUTOCOMPLETE_CUSTOM_INPUT_OPTION_B = `${locator(['autocomplete', 'custom'], 'input')}-option-1`;

export const AUTOCOMPLETE_CUSTOM_INITIAL = locator(['autocomplete', 'custom', 'initial']);
