import { InputType } from '../type';

// eslint-disable-next-line
export const detectInputType = (props: any): InputType => {
    if (props.autoComplete !== undefined || props.getOptionLabel !== undefined) { return 'autocomplete'; }
    if (props.allowKeyboardControl !== undefined || props.KeyboardButtonProps !== undefined) { return 'picker'; }
    return 'textfield';
};
