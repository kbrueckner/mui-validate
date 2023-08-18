import locator from 'test-locator';

export const FIXES_LABEL_TEST = locator(['v5', 'fixes', 'label', 'test']);

export const SETTINGS_INITIAL_SILENT = locator(['v5', 'textfield', 'required', 'initial-silent']);

export const SETTINGS_INITIAL_NOISY = locator(['v5', 'textfield', 'required', 'initial-noisy']);

export const SETTINGS_INITIAL_NOISY_GROUP = locator(['v5', 'textfield', 'required', 'initial-noisy', 'by-group']);

export const SETTINGS_NOISY = locator(['v5', 'textfield', 'required', 'noisy']);
export const SETTINGS_NOISY_INPUT = locator(['v5', 'textfield', 'required', 'noisy'], 'input');

export const SETTINGS_SILENT = locator(['v5', 'textfield', 'required', 'silent']);
export const SETTINGS_SILENT_INPUT = locator(['v5', 'textfield', 'required', 'silent'], 'input');

export const SETTINGS_SILENT_GROUP = locator(['v5', 'textfield', 'required', 'silent', 'by-group']);
export const SETTINGS_SILENT_GROUP_INPUT = locator(['v5', 'textfield', 'required', 'silent', 'by-group'], 'input');

export const DISABLER_INPUT = locator(['v5', 'textfield', 'required', 'disabler'], 'input');
export const DISABLER_BUTTON_DYNAMIC = locator(['v5', 'textfield', 'required', 'disabler'], 'button');
export const DISABLER_BUTTON_AWAYS_OFF = locator(['v5', 'textfield', 'required', 'disabler', 'always-off'], 'button');

export const ERRORLIST_INPUT1 = locator(['v5', 'error-list', 'input1'], 'input');
export const ERRORLIST_INPUT2 = locator(['v5', 'error-list', 'input2'], 'input');
export const ERRORLIST1 = locator(['v5', 'error-list1'], 'list');
export const ERRORLIST2 = locator(['v5', 'error-list2'], 'list');

export const DISABLER_DISPLAY_ERRORLIST = locator(['v5', 'disabler', 'display', 'errors'], 'list');
export const DISABLER_DISPLAY_CONTROL = locator(['v5', 'disabler', 'display', 'control']);
export const DISABLER_DISPLAY_INPUT = locator(['v5', 'disabler', 'display'], 'input');
export const DISABLER_DISPLAY_BUTTON = locator(['v5', 'disabler', 'display'], 'button');
export const DISABLER_DISPLAY_BUTTON_2 = locator(['v5', 'disabler', 'display', 'b2'], 'button');

export const DISABLER_DISPLAY_2_ERRORLIST = locator(['v5', 'disabler', 'display', '2', 'errors'], 'list');
export const DISABLER_DISPLAY_2_CONTROL = locator(['v5', 'disabler', 'display', '2', 'control']);
export const DISABLER_DISPLAY_2_INPUT = locator(['v5', 'disabler', 'display', '2'], 'input');
export const DISABLER_DISPLAY_2_BUTTON = locator(['v5', 'disabler', 'display', '2'], 'button');
export const DISABLER_DISPLAY_2_BUTTON_2 = locator(['v5', 'disabler', 'display', '2', 'b2'], 'button');

export const TEXTFIELD_REQUIRED = locator(['v5', 'textfield', 'required']);
export const TEXTFIELD_REQUIRED_INPUT = locator(['v5', 'textfield', 'required'], 'input');

export const TEXTFIELD_UNIQUE = locator(['v5', 'textfield', 'unique']);
export const TEXTFIELD_UNIQUE_INPUT = locator(['v5', 'textfield', 'unique'], 'input');

export const TEXTFIELD_REGEX = locator(['v5', 'textfield', 'regex']);
export const TEXTFIELD_REGEX_INPUT = locator(['v5', 'textfield', 'regex'], 'input');

export const TEXTFIELD_CUSTOM = locator(['v5', 'textfield', 'custom']);
export const TEXTFIELD_CUSTOM_INPUT = locator(['v5', 'textfield', 'custom'], 'input');

export const TEXTFIELD_SELECT_REQUIRED = locator(['v5', 'textfield', 'select', 'required']);
export const TEXTFIELD_SELECT_REQUIRED_INPUT = locator(['v5', 'textfield', 'select', 'required'], 'input');
export const TEXTFIELD_SELECT_REQUIRED_INPUT_OPTION_EMPTY = locator(['v5', 'textfield', 'select', 'required', 'empty'], 'input');
export const TEXTFIELD_SELECT_REQUIRED_INPUT_OPTION_A = locator(['v5', 'textfield', 'select', 'required', 'a'], 'input');

export const TEXTFIELD_SELECT_UNIQUE = locator(['v5', 'textfield', 'select', 'unique']);
export const TEXTFIELD_SELECT_UNIQUE_INPUT = locator(['v5', 'textfield', 'select', 'unique'], 'input');
export const TEXTFIELD_SELECT_UNIQUE_INPUT_OPTION_A = locator(['v5', 'textfield', 'select', 'unique', 'a'], 'input');
export const TEXTFIELD_SELECT_UNIQUE_INPUT_OPTION_B = locator(['v5', 'textfield', 'select', 'unique', 'b'], 'input');

export const TEXTFIELD_SELECT_REGEX = locator(['v5', 'textfield', 'select', 'regex']);
export const TEXTFIELD_SELECT_REGEX_INPUT = locator(['v5', 'textfield', 'select', 'regex'], 'input');
export const TEXTFIELD_SELECT_REGEX_INPUT_OPTION_A = locator(['v5', 'textfield', 'select', 'regex', 'a'], 'input');
export const TEXTFIELD_SELECT_REGEX_INPUT_OPTION_B = locator(['v5', 'textfield', 'select', 'regex', 'b'], 'input');

export const TEXTFIELD_SELECT_CUSTOM = locator(['v5', 'textfield', 'select', 'custom']);
export const TEXTFIELD_SELECT_CUSTOM_INPUT = locator(['v5', 'textfield', 'select', 'custom'], 'input');
export const TEXTFIELD_SELECT_CUSTOM_INPUT_OPTION_A = locator(['v5', 'textfield', 'select', 'custom', 'a'], 'input');
export const TEXTFIELD_SELECT_CUSTOM_INPUT_OPTION_B = locator(['v5', 'textfield', 'select', 'custom', 'b'], 'input');

export const SELECT_REQUIRED = locator(['v5', 'select', 'required']);
export const SELECT_REQUIRED_INPUT = locator(['v5', 'select', 'required'], 'input');
export const SELECT_REQUIRED_INPUT_OPTION_EMPTY = locator(['v5', 'select', 'required', 'empty'], 'input');
export const SELECT_REQUIRED_INPUT_OPTION_A = locator(['v5', 'select', 'required', 'a'], 'input');

export const SELECT_UNIQUE = locator(['v5', 'select', 'unique']);
export const SELECT_UNIQUE_INPUT = locator(['v5', 'select', 'unique'], 'input');
export const SELECT_UNIQUE_INPUT_OPTION_A = locator(['v5', 'select', 'unique', 'a'], 'input');
export const SELECT_UNIQUE_INPUT_OPTION_B = locator(['v5', 'select', 'unique', 'b'], 'input');

export const SELECT_REGEX = locator(['v5', 'select', 'regex']);
export const SELECT_REGEX_INPUT = locator(['v5', 'select', 'regex'], 'input');
export const SELECT_REGEX_INPUT_OPTION_A = locator(['v5', 'select', 'regex', 'a'], 'input');
export const SELECT_REGEX_INPUT_OPTION_B = locator(['v5', 'select', 'regex', 'b'], 'input');

export const SELECT_CUSTOM = locator(['v5', 'select', 'custom']);
export const SELECT_CUSTOM_INPUT = locator(['v5', 'select', 'custom'], 'input');
export const SELECT_CUSTOM_INPUT_OPTION_A = locator(['v5', 'select', 'custom', 'a'], 'input');
export const SELECT_CUSTOM_INPUT_OPTION_B = locator(['v5', 'select', 'custom', 'b'], 'input');

export const AUTOCOMPLETE_REQUIRED = locator(['v5', 'autocomplete', 'required']);
export const AUTOCOMPLETE_REQUIRED_INPUT = locator(['v5', 'autocomplete', 'required'], 'input');
export const AUTOCOMPLETE_REQUIRED_INPUT_OPTION_EMPTY = `${locator(['v5', 'autocomplete', 'required'], 'input')}-option-0`;
export const AUTOCOMPLETE_REQUIRED_INPUT_OPTION_A = `${locator(['v5', 'autocomplete', 'required'], 'input')}-option-1`;

export const AUTOCOMPLETE_UNIQUE = locator(['v5', 'autocomplete', 'unique']);
export const AUTOCOMPLETE_UNIQUE_INPUT = locator(['v5', 'autocomplete', 'unique'], 'input');
export const AUTOCOMPLETE_UNIQUE_INPUT_OPTION_A = `${locator(['v5', 'autocomplete', 'unique'], 'input')}-option-0`;
export const AUTOCOMPLETE_UNIQUE_INPUT_OPTION_B = `${locator(['v5', 'autocomplete', 'unique'], 'input')}-option-1`;

export const AUTOCOMPLETE_REGEX = locator(['v5', 'autocomplete', 'regex']);
export const AUTOCOMPLETE_REGEX_INPUT = locator(['v5', 'autocomplete', 'regex'], 'input');
export const AUTOCOMPLETE_REGEX_INPUT_OPTION_A = `${locator(['v5', 'autocomplete', 'regex'], 'input')}-option-0`;
export const AUTOCOMPLETE_REGEX_INPUT_OPTION_B = `${locator(['v5', 'autocomplete', 'regex'], 'input')}-option-1`;

export const AUTOCOMPLETE_CUSTOM = locator(['v5', 'autocomplete', 'custom']);
export const AUTOCOMPLETE_CUSTOM_INPUT = locator(['v5', 'autocomplete', 'custom'], 'input');
export const AUTOCOMPLETE_CUSTOM_INPUT_OPTION_A = `${locator(['v5', 'autocomplete', 'custom'], 'input')}-option-0`;
export const AUTOCOMPLETE_CUSTOM_INPUT_OPTION_B = `${locator(['v5', 'autocomplete', 'custom'], 'input')}-option-1`;

export const AUTOCOMPLETE_CUSTOM_INITIAL = locator(['v5', 'autocomplete', 'custom', 'initial']);

export const PICKER_REQUIRED = locator(['v5', 'picker', 'required']);
export const PICKER_REQUIRED_INPUT = locator(['v5', 'picker', 'required'], 'input');

export const PICKER_UNIQUE = locator(['v5', 'picker', 'unique']);
export const PICKER_UNIQUE_INPUT = locator(['v5', 'picker', 'unique'], 'input');

export const PICKER_REGEX = locator(['v5', 'picker', 'regex']);
export const PICKER_REGEX_INPUT = locator(['v5', 'picker', 'regex'], 'input');

export const PICKER_CUSTOM = locator(['v5', 'picker', 'custom']);
export const PICKER_CUSTOM_INPUT = locator(['v5', 'picker', 'custom'], 'input');

export const TEXTFIELD_LINKED_1 = locator(['v5', 'textfield', 'linked', '1']);
export const TEXTFIELD_LINKED_1_INPUT = locator(['v5', 'textfield', 'linked', '1'], 'input');
export const TEXTFIELD_LINKED_2 = locator(['v5', 'textfield', 'linked', '2']);
export const TEXTFIELD_LINKED_2_INPUT = locator(['v5', 'textfield', 'linked', '2'], 'input');
export const TEXTFIELD_LINKED_3 = locator(['v5', 'textfield', 'linked', '3']);
export const TEXTFIELD_LINKED_3_INPUT = locator(['v5', 'textfield', 'linked', '3'], 'input');

export const TEXTFIELD_LINKED_EXAMPLE_1 = locator(['v5', 'textfield', 'linked', 'example', '1']);
export const TEXTFIELD_LINKED_EXAMPLE_1_INPUT = locator(['v5', 'textfield', 'linked', 'example', '1'], 'input');
export const TEXTFIELD_LINKED_EXAMPLE_2 = locator(['v5', 'textfield', 'linked', 'example', '2']);
export const TEXTFIELD_LINKED_EXAMPLE_2_INPUT = locator(['v5', 'textfield', 'linked', 'example', '2'], 'input');

export const UNREG_UNREGISTER_BUTTON = locator(['v5', 'unreg', 'unregister'], 'button');
export const UNREG_REGISTER_BUTTON = locator(['v5', 'unreg', 'register'], 'input');
export const UNREG_CHECK_BUTTON = locator(['v5', 'unreg', 'check'], 'button');
