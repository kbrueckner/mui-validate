import React from 'react';
import { FormControl, FormHelperText } from '@material-ui/core';
import { ValidationRuleRegex, ValidationRuleRequired, ValidationRules, ValidationRuleUnique, Validation, ValidationRuleCustom } from '../type';
import { useValidation } from './ValidationContext';
import validate from '../fns/validation-fns';
import { InputType } from '../type';
import { detectInputType } from '../fns/helper-fns';

type Props = {
    name: string;
    required?: ValidationRuleRequired;
    unique?: ValidationRuleUnique;
    regex?: ValidationRuleRegex;
    custom?: ValidationRuleCustom;
    after?: (result: Validation) => void;
    before?: () => void;
    inputType?: 'detect' | InputType;
    children: JSX.Element & { fullWidth?: boolean; };
};

type AdditionalProps = {
    onChange: Function;
    helperText?: string;
    error?: boolean;
};

const Validate = ({
    children, name, required, unique, regex, custom, after, before, inputType = 'detect',
}: Props): JSX.Element => {
    const { validations, setValidations } = useValidation();
    const detectedInputType: InputType = inputType === 'detect' ? detectInputType(children.props) : inputType;

    const validationRules: ValidationRules = {};
    if (required) { validationRules.required = required; }
    if (unique !== undefined) { validationRules.unique = unique; }
    if (regex !== undefined) { validationRules.regex = regex; }
    if (custom !== undefined) { validationRules.custom = custom; }

    // check for initial value valid = false conditions
    if (
        required
        && (children.props.value === '' || children.props.value === undefined || children.props.value === null)
        && validations[name] === undefined
    ) {
        setValidations({ ...validations, [name]: { valid: false } });
    }

    // eslint-disable-next-line
    const onChange = (...args: any[]): void => {
        if (children.props.onChange) {
            children.props.onChange(...args);
        }

        if (before) { before(); }

        let value = '';
        if (detectedInputType === 'autocomplete') {
            value = args[1] ? 'set' : '';
        }
        else if (detectedInputType === 'picker') {
            try {
                value = new Date(args[0]).toISOString();
            } catch (e) {
                value = '';
            }
        }
        else if (['textfield', 'select'].includes(detectedInputType)) {
            const { value: eventValue = '' } = args[0].target;
            value = eventValue;
        }

        const validationResult = validate(value, validationRules);
        setValidations({ ...validations, [name]: validationResult });

        if (after) { after(validationResult); }
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
