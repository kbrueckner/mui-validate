import locator, { ELEMENT_TYPE } from 'test-locator';

export const PICKER_REQUIRED = locator(['v5', 'picker', 'required']);
export const PICKER_REQUIRED_INPUT = locator(['v5', 'picker', 'required'], ELEMENT_TYPE.INPUT);

export const PICKER_UNIQUE = locator(['v5', 'picker', 'unique']);
export const PICKER_UNIQUE_INPUT = locator(['v5', 'picker', 'unique'], ELEMENT_TYPE.INPUT);

export const PICKER_REGEX = locator(['v5', 'picker', 'regex']);
export const PICKER_REGEX_INPUT = locator(['v5', 'picker', 'regex'], ELEMENT_TYPE.INPUT);

export const PICKER_CUSTOM = locator(['v5', 'picker', 'custom']);
export const PICKER_CUSTOM_INPUT = locator(['v5', 'picker', 'custom'], ELEMENT_TYPE.INPUT);
