import locator, { ELEMENT_TYPE } from 'test-locator';

export const TEXTFIELD_SELECT_REQUIRED = locator(['v5', 'textfield', 'select', 'required']);
export const TEXTFIELD_SELECT_REQUIRED_INPUT = locator(['v5', 'textfield', 'select', 'required'], ELEMENT_TYPE.INPUT);
export const TEXTFIELD_SELECT_REQUIRED_INPUT_OPTION_EMPTY = locator(['v5', 'textfield', 'select', 'required', 'empty'], ELEMENT_TYPE.INPUT);
export const TEXTFIELD_SELECT_REQUIRED_INPUT_OPTION_A = locator(['v5', 'textfield', 'select', 'required', 'a'], ELEMENT_TYPE.INPUT);

export const TEXTFIELD_SELECT_UNIQUE = locator(['v5', 'textfield', 'select', 'unique']);
export const TEXTFIELD_SELECT_UNIQUE_INPUT = locator(['v5', 'textfield', 'select', 'unique'], ELEMENT_TYPE.INPUT);
export const TEXTFIELD_SELECT_UNIQUE_INPUT_OPTION_A = locator(['v5', 'textfield', 'select', 'unique', 'a'], ELEMENT_TYPE.INPUT);
export const TEXTFIELD_SELECT_UNIQUE_INPUT_OPTION_B = locator(['v5', 'textfield', 'select', 'unique', 'b'], ELEMENT_TYPE.INPUT);

export const TEXTFIELD_SELECT_REGEX = locator(['v5', 'textfield', 'select', 'regex']);
export const TEXTFIELD_SELECT_REGEX_INPUT = locator(['v5', 'textfield', 'select', 'regex'], ELEMENT_TYPE.INPUT);
export const TEXTFIELD_SELECT_REGEX_INPUT_OPTION_A = locator(['v5', 'textfield', 'select', 'regex', 'a'], ELEMENT_TYPE.INPUT);
export const TEXTFIELD_SELECT_REGEX_INPUT_OPTION_B = locator(['v5', 'textfield', 'select', 'regex', 'b'], ELEMENT_TYPE.INPUT);

export const TEXTFIELD_SELECT_CUSTOM = locator(['v5', 'textfield', 'select', 'custom']);
export const TEXTFIELD_SELECT_CUSTOM_INPUT = locator(['v5', 'textfield', 'select', 'custom'], ELEMENT_TYPE.INPUT);
export const TEXTFIELD_SELECT_CUSTOM_INPUT_OPTION_A = locator(['v5', 'textfield', 'select', 'custom', 'a'], ELEMENT_TYPE.INPUT);
export const TEXTFIELD_SELECT_CUSTOM_INPUT_OPTION_B = locator(['v5', 'textfield', 'select', 'custom', 'b'], ELEMENT_TYPE.INPUT);
