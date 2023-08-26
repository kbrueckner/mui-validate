import locator, { ELEMENT_TYPE } from 'test-locator';

export const DISABLER_INPUT = locator(['v5', 'textfield', 'required', 'disabler'], ELEMENT_TYPE.INPUT);
export const DISABLER_BUTTON_DYNAMIC = locator(['v5', 'textfield', 'required', 'disabler'], ELEMENT_TYPE.BUTTON);
export const DISABLER_BUTTON_AWAYS_OFF = locator(['v5', 'textfield', 'required', 'disabler', 'always-off'], ELEMENT_TYPE.BUTTON);

export const DISABLER_DISPLAY_ERRORLIST = locator(['v5', 'disabler', 'display', 'errors'], ELEMENT_TYPE.LIST);
export const DISABLER_DISPLAY_CONTROL = locator(['v5', 'disabler', 'display', 'control']);
export const DISABLER_DISPLAY_INPUT = locator(['v5', 'disabler', 'display'], ELEMENT_TYPE.INPUT);
export const DISABLER_DISPLAY_BUTTON = locator(['v5', 'disabler', 'display'], ELEMENT_TYPE.BUTTON);
export const DISABLER_DISPLAY_BUTTON_2 = locator(['v5', 'disabler', 'display', 'b2'], ELEMENT_TYPE.BUTTON);

export const DISABLER_DISPLAY_2_ERRORLIST = locator(['v5', 'disabler', 'display', '2', 'errors'], ELEMENT_TYPE.LIST);
export const DISABLER_DISPLAY_2_CONTROL = locator(['v5', 'disabler', 'display', '2', 'control']);
export const DISABLER_DISPLAY_2_INPUT = locator(['v5', 'disabler', 'display', '2'], ELEMENT_TYPE.INPUT);
export const DISABLER_DISPLAY_2_BUTTON = locator(['v5', 'disabler', 'display', '2'], ELEMENT_TYPE.BUTTON);
export const DISABLER_DISPLAY_2_BUTTON_2 = locator(['v5', 'disabler', 'display', '2', 'b2'], ELEMENT_TYPE.BUTTON);
