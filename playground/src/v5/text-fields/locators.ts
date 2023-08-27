import locator, { ELEMENT_TYPE } from 'test-locator';

export const TEXTFIELD_REQUIRED = locator(['v5', 'textfield', 'required']);
export const TEXTFIELD_REQUIRED_INPUT = locator(['v5', 'textfield', 'required'], ELEMENT_TYPE.INPUT);

export const TEXTFIELD_UNIQUE = locator(['v5', 'textfield', 'unique']);
export const TEXTFIELD_UNIQUE_INPUT = locator(['v5', 'textfield', 'unique'], ELEMENT_TYPE.INPUT);

export const TEXTFIELD_REGEX = locator(['v5', 'textfield', 'regex']);
export const TEXTFIELD_REGEX_INPUT = locator(['v5', 'textfield', 'regex'], ELEMENT_TYPE.INPUT);

export const TEXTFIELD_CUSTOM = locator(['v5', 'textfield', 'custom']);
export const TEXTFIELD_CUSTOM_INPUT = locator(['v5', 'textfield', 'custom'], ELEMENT_TYPE.INPUT);
