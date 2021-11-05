import React from 'react';
import { FormControl, FormHelperText } from '@material-ui/core';
import {
    ValidationRuleRegex, ValidationRuleRequired, ValidationRules,
    ValidationRuleUnique, Validation, ValidationRuleCustom, InputType,
    ValidationMode,
} from '../type';
import { useValidation } from './ValidationContext';
import validate from '../fns/validation-fns';
import { detectInputType, getValueFromAutocomplete } from '../fns/helper-fns';

type Props = {
    name: string;
    id?: string;
    required?: ValidationRuleRequired;
    unique?: ValidationRuleUnique;
    regex?: ValidationRuleRegex;
    custom?: ValidationRuleCustom;
    after?: (result: Validation) => void;
    before?: () => void;
    inputType?: 'detect' | InputType;
    initialValidation?: ValidationMode;
    validation?: ValidationMode;
    children: JSX.Element & { fullWidth?: boolean; };
};

type AdditionalProps = {
    onChange: Function;
    helperText?: string;
    error?: boolean;
};

const Validate = ({
    children, name, required, unique, regex, custom, after, before,
    initialValidation, validation, inputType = 'detect', id,
}: Props): JSX.Element => {
    const {
        validations, setValidations,
        initialValidation: initialValidationSetting,
        validation: validationSetting,
    } = useValidation();
    const initialValidationDerrived = initialValidation || initialValidationSetting;
    const validationDerrived = validation || validationSetting;
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
        let value;
        if (detectedInputType === 'autocomplete') {
            value = getValueFromAutocomplete(children.props.value, children);
        } else {
            value = children.props.value || '';
        }
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
            value = getValueFromAutocomplete(args[1], children);
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
        if (validationDerrived === 'silent') { validationResult.message = undefined; }
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
            data-has-error={validations[name]?.valid !== true}
            data-has-message={validations[name]?.message !== undefined}
            id={id}
        >
            {React.cloneElement(children, addedProps)}
            <FormHelperText>{validations[name]?.message}</FormHelperText>
        </FormControl>
    );
};

Validate.displayName = 'Validate';
export default Validate;
