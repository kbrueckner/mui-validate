import React from 'react';
import { FormControl, FormHelperText } from '@material-ui/core';
import {
    ValidationRuleRegex, ValidationRuleRequired, ValidationRules,
    ValidationRuleUnique, Validation, ValidationRuleCustom, InputType,
    InitialValidationMode,
} from '../type';
import { useValidation } from './ValidationContext';
import validate from '../fns/validation-fns';
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
    initialValidation?: InitialValidationMode;
};

type AdditionalProps = {
    onChange: Function;
    helperText?: string;
    error?: boolean;
};

const Validate = ({
    children, name, required = false, unique, regex, custom, after, before, inputType = 'detect', initialValidation,
}: Props): JSX.Element => {
    const { validations, setValidations, initialValidation: initialValidationSetting } = useValidation();
    const initialValidationDerrived = initialValidation || initialValidationSetting;
    const detectedInputType: InputType = inputType === 'detect' ? detectInputType(children.props) : inputType;

    // Validation rules which will be applied
    const validationRules: ValidationRules = {};
    if (required) { validationRules.required = required; }
    if (unique !== undefined) { validationRules.unique = unique; }
    if (regex !== undefined) { validationRules.regex = regex; }
    if (custom !== undefined) { validationRules.custom = custom; }

    // Initial validations during first child component rendering
    // all supported child types (so far) define an initial value in the component attribut 'value'
    if (validations[name] === undefined && Object.keys(validationRules).length > 0) {
        const value = children.props.value || '';
        const validationResult = validate(value, validationRules);
        if (initialValidationDerrived === 'silent') { validationResult.message = undefined; }
        setValidations({ ...validations, [name]: validationResult });
    }

    // eslint-disable-next-line
    const onChange = (...args: any[]): void => {
        if (children.props.onChange) {
            children.props.onChange(...args);
        }

        // before hook operations
        if (before) { before(); }

        // value to be found from underlying component
        let value = '';

        // autocomplete sends the attached option in the second parameter
        // in case no option is selected null is sent instead
        if (detectedInputType === 'autocomplete') {
            value = args[1] ? 'value selected' : '';
        }
        // picker send a date object or 'Invalid Date' as the first parameter
        else if (detectedInputType === 'picker') {
            try {
                value = new Date(args[0]).toISOString();
            } catch (e) {
                value = '';
            }
        }
        // textfield and select send a regular event as first parameter
        else if (['textfield', 'select'].includes(detectedInputType)) {
            const { value: eventValue = '' } = args[0].target;
            value = eventValue;
        }

        const validationResult = validate(value, validationRules);
        setValidations({ ...validations, [name]: validationResult });

        // after hook operations
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
