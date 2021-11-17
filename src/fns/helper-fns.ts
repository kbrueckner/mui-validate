import { InputType } from '../type';

// eslint-disable-next-line
export const detectInputType = (props: any): InputType => {
    if (props.autoComplete !== undefined || props.getOptionLabel !== undefined) { return 'autocomplete'; }
    if (props.allowKeyboardControl !== undefined || props.KeyboardButtonProps !== undefined || props.inputFormat) { return 'picker'; }
    return 'textfield';
};

// eslint-disable-next-line
export const getValueFromAutocomplete = (option: any, children: any): string => {
    let value;

    if (!option) {
        value = '';
    } else {
        // eslint-disable-next-line
        // @ts-ignore-next-line
        value = children?.props?.getOptionLabel ? children.props.getOptionLabel(option) : option;
    }

    return value;
};
