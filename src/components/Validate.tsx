import React from 'react';
import { FormControl, FormHelperText } from '@material-ui/core';
import { ValidationRuleRegex, ValidationRuleRequired, ValidationRules, ValidationRuleUnique } from '../type';
import { useValidation } from './ValidationContext';
import validate from '../fns/validation-fns';

type Props = {
    children: JSX.Element & { fullWidth?: boolean; };
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

    // This block is specifically for TextFields
    if (validations[name]?.message) {
        addedProps.helperText = '';
        addedProps.error = true;
    }

    // Additionally for FormControl based elements (i.e. Select) we need to wrap them into a FormControl
    return (
        <FormControl
            error={validations[name]?.message !== undefined}
            classes={{ root: children.props.fullWidth === true ? 'MuiInputBase-fullWidth' : '' }}
        >
            {React.cloneElement(children, addedProps)}
            <FormHelperText>{validations[name]?.message}</FormHelperText>
        </FormControl>
    );
};

Validate.displayName = 'Validate';
export default Validate;
