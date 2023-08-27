import locator, { ELEMENT_TYPE } from 'test-locator';

export const SELECT_REQUIRED = locator(['v5', 'select', 'required']);
export const SELECT_REQUIRED_INPUT = locator(['v5', 'select', 'required'], ELEMENT_TYPE.INPUT);
export const SELECT_REQUIRED_INPUT_OPTION_EMPTY = locator(['v5', 'select', 'required', 'empty'], ELEMENT_TYPE.INPUT);
export const SELECT_REQUIRED_INPUT_OPTION_A = locator(['v5', 'select', 'required', 'a'], ELEMENT_TYPE.INPUT);

export const SELECT_UNIQUE = locator(['v5', 'select', 'unique']);
export const SELECT_UNIQUE_INPUT = locator(['v5', 'select', 'unique'], ELEMENT_TYPE.INPUT);
export const SELECT_UNIQUE_INPUT_OPTION_A = locator(['v5', 'select', 'unique', 'a'], ELEMENT_TYPE.INPUT);
export const SELECT_UNIQUE_INPUT_OPTION_B = locator(['v5', 'select', 'unique', 'b'], ELEMENT_TYPE.INPUT);

export const SELECT_REGEX = locator(['v5', 'select', 'regex']);
export const SELECT_REGEX_INPUT = locator(['v5', 'select', 'regex'], ELEMENT_TYPE.INPUT);
export const SELECT_REGEX_INPUT_OPTION_A = locator(['v5', 'select', 'regex', 'a'], ELEMENT_TYPE.INPUT);
export const SELECT_REGEX_INPUT_OPTION_B = locator(['v5', 'select', 'regex', 'b'], ELEMENT_TYPE.INPUT);

export const SELECT_CUSTOM = locator(['v5', 'select', 'custom']);
export const SELECT_CUSTOM_INPUT = locator(['v5', 'select', 'custom'], ELEMENT_TYPE.INPUT);
export const SELECT_CUSTOM_INPUT_OPTION_A = locator(['v5', 'select', 'custom', 'a'], ELEMENT_TYPE.INPUT);
export const SELECT_CUSTOM_INPUT_OPTION_B = locator(['v5', 'select', 'custom', 'b'], ELEMENT_TYPE.INPUT);
