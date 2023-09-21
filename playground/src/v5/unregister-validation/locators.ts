import locator, { ELEMENT_TYPE } from 'test-locator';

export const UNREG_UNREGISTER_BUTTON = locator(['v5', 'unreg', 'unregister'], ELEMENT_TYPE.BUTTON);
export const UNREG_REGISTER_BUTTON = locator(['v5', 'unreg', 'register'], ELEMENT_TYPE.INPUT);
export const UNREG_CHECK_BUTTON = locator(['v5', 'unreg', 'check'], ELEMENT_TYPE.BUTTON);

export const UNREG_UNREGISTER_2_BUTTON = locator(['v5', 'unreg', 'unregister', '2'], ELEMENT_TYPE.BUTTON);
export const UNREG_REGISTER_2_BUTTON = locator(['v5', 'unreg', 'register', '2'], ELEMENT_TYPE.INPUT);
export const UNREG_CHECK_2_BUTTON = locator(['v5', 'unreg', 'check', '2'], ELEMENT_TYPE.BUTTON);
