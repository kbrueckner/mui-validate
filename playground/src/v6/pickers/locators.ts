import locator, { ELEMENT_TYPE } from 'test-locator';

export const PICKER_REQUIRED = locator(['v6', 'picker', 'required']);
export const PICKER_REQUIRED_INPUT = locator(['v6', 'picker', 'required'], ELEMENT_TYPE.INPUT);

export const PICKER_UNIQUE = locator(['v6', 'picker', 'unique']);
export const PICKER_UNIQUE_INPUT = locator(['v6', 'picker', 'unique'], ELEMENT_TYPE.INPUT);

export const PICKER_REGEX = locator(['v6', 'picker', 'regex']);
export const PICKER_REGEX_INPUT = locator(['v6', 'picker', 'regex'], ELEMENT_TYPE.INPUT);

export const PICKER_CUSTOM = locator(['v6', 'picker', 'custom']);
export const PICKER_CUSTOM_INPUT = locator(['v6', 'picker', 'custom'], ELEMENT_TYPE.INPUT);
