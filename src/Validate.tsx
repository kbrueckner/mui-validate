import React from 'react';
import { ValidationRuleRegex, ValidationRuleRequired, ValidationRules, ValidationRuleUnique } from './type';
import { useValidation } from './index';
import { validate } from './validation-fns';

type Props = {
    children: JSX.Element;
    name: string;
    required?: ValidationRuleRequired;
    unique?: ValidationRuleUnique;
    regex?: ValidationRuleRegex;
};

type AdditionalProps = {
    onChange: Function;
    helperText?: string;
    error?: boolean;
};

const Validate = ({
    children, name, required, unique, regex,
}: Props): JSX.Element => {
    const { validations, setValidations } = useValidation();

    const validationRules: ValidationRules = {};
    if (required) { validationRules.required = required; }
    if (unique !== undefined) { validationRules.unique = unique; }
    if (regex !== undefined) { validationRules.regex = regex; }

    // check for initial value valid = false conditions
    if (
        required
        && (children.props.value === '' || children.props.value === undefined)
        && validations[name] === undefined
    ) {
        setValidations({ ...validations, [name]: { valid: false } });
    }

    // eslint-disable-next-line
    const onChange = (event: any): void => {
        const { value = '' } = event.target;

        setValidations({ ...validations, [name]: validate(value, validationRules) });

        if (children.props.onChange) {
            children.props.onChange(event);
        }
    };

    const addedProps: AdditionalProps = {
        onChange,
    };

    // TODO: The if statement makes productions builds to not show any messages
    if (
        children.type.options.name === 'MuiTextField'
    ) {
        addedProps.helperText = validations[name]?.message;
        addedProps.error = validations[name]?.message !== undefined;
    }

    return React.cloneElement(children, addedProps);
};

Validate.displayName = 'Validate';
export default Validate;
