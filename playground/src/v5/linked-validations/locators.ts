import locator, { ELEMENT_TYPE } from 'test-locator';

export const TEXTFIELD_LINKED_1 = locator(['v5', 'textfield', 'linked', '1']);
export const TEXTFIELD_LINKED_1_INPUT = locator(['v5', 'textfield', 'linked', '1'], ELEMENT_TYPE.INPUT);
export const TEXTFIELD_LINKED_2 = locator(['v5', 'textfield', 'linked', '2']);
export const TEXTFIELD_LINKED_2_INPUT = locator(['v5', 'textfield', 'linked', '2'], ELEMENT_TYPE.INPUT);
export const TEXTFIELD_LINKED_3 = locator(['v5', 'textfield', 'linked', '3']);
export const TEXTFIELD_LINKED_3_INPUT = locator(['v5', 'textfield', 'linked', '3'], ELEMENT_TYPE.INPUT);

export const TEXTFIELD_LINKED_EXAMPLE_1 = locator(['v5', 'textfield', 'linked', 'example', '1']);
export const TEXTFIELD_LINKED_EXAMPLE_1_INPUT = locator(['v5', 'textfield', 'linked', 'example', '1'], ELEMENT_TYPE.INPUT);
export const TEXTFIELD_LINKED_EXAMPLE_2 = locator(['v5', 'textfield', 'linked', 'example', '2']);
export const TEXTFIELD_LINKED_EXAMPLE_2_INPUT = locator(['v5', 'textfield', 'linked', 'example', '2'], ELEMENT_TYPE.INPUT);