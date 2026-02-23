import locator, { ELEMENT_TYPE } from 'test-locator';

export const TEXTFIELD_DOUBLE_VALIDATE_1 = locator(['v5', 'textfield', 'dv', '1']);
export const TEXTFIELD_DOUBLE_VALIDATE_1_INPUT = locator(['v5', 'textfield', 'dv', '1'], ELEMENT_TYPE.INPUT);