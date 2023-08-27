import locator, { ELEMENT_TYPE } from 'test-locator';

export const AUTOCOMPLETE_REQUIRED = locator(['v5', 'autocomplete', 'required']);
export const AUTOCOMPLETE_REQUIRED_INPUT = locator(['v5', 'autocomplete', 'required'], ELEMENT_TYPE.INPUT);
export const AUTOCOMPLETE_REQUIRED_INPUT_OPTION_EMPTY = `${locator(['v5', 'autocomplete', 'required'], ELEMENT_TYPE.INPUT)}-option-0`;
export const AUTOCOMPLETE_REQUIRED_INPUT_OPTION_A = `${locator(['v5', 'autocomplete', 'required'], ELEMENT_TYPE.INPUT)}-option-1`;

export const AUTOCOMPLETE_UNIQUE = locator(['v5', 'autocomplete', 'unique']);
export const AUTOCOMPLETE_UNIQUE_INPUT = locator(['v5', 'autocomplete', 'unique'], ELEMENT_TYPE.INPUT);
export const AUTOCOMPLETE_UNIQUE_INPUT_OPTION_A = `${locator(['v5', 'autocomplete', 'unique'], ELEMENT_TYPE.INPUT)}-option-0`;
export const AUTOCOMPLETE_UNIQUE_INPUT_OPTION_B = `${locator(['v5', 'autocomplete', 'unique'], ELEMENT_TYPE.INPUT)}-option-1`;

export const AUTOCOMPLETE_REGEX = locator(['v5', 'autocomplete', 'regex']);
export const AUTOCOMPLETE_REGEX_INPUT = locator(['v5', 'autocomplete', 'regex'], ELEMENT_TYPE.INPUT);
export const AUTOCOMPLETE_REGEX_INPUT_OPTION_A = `${locator(['v5', 'autocomplete', 'regex'], ELEMENT_TYPE.INPUT)}-option-0`;
export const AUTOCOMPLETE_REGEX_INPUT_OPTION_B = `${locator(['v5', 'autocomplete', 'regex'], ELEMENT_TYPE.INPUT)}-option-1`;

export const AUTOCOMPLETE_CUSTOM = locator(['v5', 'autocomplete', 'custom']);
export const AUTOCOMPLETE_CUSTOM_INPUT = locator(['v5', 'autocomplete', 'custom'], ELEMENT_TYPE.INPUT);
export const AUTOCOMPLETE_CUSTOM_INPUT_OPTION_A = `${locator(['v5', 'autocomplete', 'custom'], ELEMENT_TYPE.INPUT)}-option-0`;
export const AUTOCOMPLETE_CUSTOM_INPUT_OPTION_B = `${locator(['v5', 'autocomplete', 'custom'], ELEMENT_TYPE.INPUT)}-option-1`;

export const AUTOCOMPLETE_CUSTOM_INITIAL = locator(['v5', 'autocomplete', 'custom', 'initial']);
